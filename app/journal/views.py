from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from .models import Article, JournalUpload, StaticPage, Volume
from .serializers import (
    ArticleSerializer,
    JournalUploadSerializer,
    StaticPageSerializer,
    VolumeSerializer,
)


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        return Article.objects.select_related('volume').order_by('-created_at')


class VolumeViewSet(viewsets.ModelViewSet):
    serializer_class = VolumeSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        return Volume.objects.prefetch_related('articles', 'uploads').order_by('-year', '-volume_number')


class StaticPageViewSet(viewsets.ModelViewSet):
    serializer_class = StaticPageSerializer

    def get_queryset(self):
        return StaticPage.objects.order_by('title')


class JournalUploadViewSet(viewsets.ModelViewSet):
    serializer_class = JournalUploadSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        return JournalUpload.objects.select_related('volume', 'article').order_by('-uploaded_at')


@api_view(['GET'])
def dashboard_summary(request):
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
        },
        'recent_articles': ArticleSerializer(recent_articles, many=True, context={'request': request}).data,
        'recent_uploads': JournalUploadSerializer(recent_uploads, many=True, context={'request': request}).data,
    }
    return Response(payload)
