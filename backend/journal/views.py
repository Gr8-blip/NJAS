from django.contrib.auth import authenticate
from django.core import signing
from django.db.models import F
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.permissions import BasePermission
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from .models import Article, JournalUpload, StaticPage, Volume
from .serializers import (
    ArticleSerializer,
    JournalUploadSerializer,
    StaticPageSerializer,
    VolumeSerializer,
)
from rest_framework.permissions import SAFE_METHODS

TOKEN_SALT = 'journal-admin-token'


def make_admin_token(user):
    signer = signing.TimestampSigner(salt=TOKEN_SALT)
    return signer.sign(str(user.id))


def get_token_user_id(request):
    header = request.headers.get('Authorization', '')
    if not header.startswith('Bearer '):
        return None
    token = header.removeprefix('Bearer ').strip()
    try:
        return signing.TimestampSigner(salt=TOKEN_SALT).unsign(token, max_age=60 * 60 * 24)
    except signing.BadSignature:
        return None
    except signing.SignatureExpired:
        return None


class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        return bool(get_token_user_id(request))

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        queryset = Article.objects.select_related('volume').order_by('-created_at')
        volume_id = self.request.query_params.get('volume')
        if volume_id:
            queryset = queryset.filter(volume_id=volume_id)
        return queryset


class VolumeViewSet(viewsets.ModelViewSet):
    serializer_class = VolumeSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        return Volume.objects.prefetch_related('articles', 'uploads').order_by('-year', '-volume_number', '-issue_number')


class StaticPageViewSet(viewsets.ModelViewSet):
    serializer_class = StaticPageSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        return StaticPage.objects.order_by('title')


class JournalUploadViewSet(viewsets.ModelViewSet):
    serializer_class = JournalUploadSerializer
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        return JournalUpload.objects.select_related('volume', 'article').order_by('-uploaded_at')


@api_view(['GET'])
def dashboard_summary(request):
    if not get_token_user_id(request):
        return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)

    recent_articles = Article.objects.select_related('volume').order_by('-created_at')[:5]
    recent_uploads = JournalUpload.objects.select_related('volume', 'article').order_by('-uploaded_at')[:5]
    payload = {
        'stats': {
            'pages': StaticPage.objects.count(),
            'articles': Article.objects.count(),
            'published_articles': Article.objects.filter(status=Article.STATUS_PUBLISHED).count(),
            'volumes': Volume.objects.count(),
            'published_volumes': Volume.objects.filter(is_published=True).count(),
            'uploads': JournalUpload.objects.count(),
            'submissions': Article.objects.filter(status=Article.STATUS_REVIEW).count(),
            'article_views': sum(Article.objects.values_list('view_count', flat=True)),
            'volume_views': sum(Volume.objects.values_list('view_count', flat=True)),
        },
        'recent_articles': ArticleSerializer(recent_articles, many=True, context={'request': request}).data,
        'recent_uploads': JournalUploadSerializer(recent_uploads, many=True, context={'request': request}).data,
    }
    return Response(payload)


@api_view(['POST'])
def admin_login(request):
    username = request.data.get('username') or request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if not user or not user.is_active or not user.is_staff:
        return Response({'detail': 'Invalid admin credentials.'}, status=status.HTTP_400_BAD_REQUEST)

    return Response({
        'token': make_admin_token(user),
        'user': {
            'id': user.id,
            'username': user.get_username(),
            'email': user.email,
        },
    })


@api_view(['GET'])
def admin_me(request):
    if not get_token_user_id(request):
        return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response({'authenticated': True})


@api_view(['GET'])
def view_counts(request):
    return Response({
        'article_views': sum(Article.objects.values_list('view_count', flat=True)),
        'volume_views': sum(Volume.objects.values_list('view_count', flat=True)),
    })


@api_view(['GET', 'POST'])
def article_view_count(request, pk):
    if request.method == 'POST':
        Article.objects.filter(pk=pk).update(view_count=F('view_count') + 1)
    article = Article.objects.filter(pk=pk).first()
    if not article:
        return Response({'detail': 'Article not found.'}, status=status.HTTP_404_NOT_FOUND)
    return Response({'id': article.id, 'views': article.view_count})


@api_view(['GET', 'POST'])
def volume_view_count(request, pk):
    if request.method == 'POST':
        Volume.objects.filter(pk=pk).update(view_count=F('view_count') + 1)
    volume = Volume.objects.filter(pk=pk).first()
    if not volume:
        return Response({'detail': 'Volume not found.'}, status=status.HTTP_404_NOT_FOUND)
    return Response({'id': volume.id, 'views': volume.view_count})
