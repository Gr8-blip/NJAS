from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import (
    ArticleViewSet,
    JournalUploadViewSet,
    StaticPageViewSet,
    VolumeViewSet,
    VolumeDetailView,
    LatestArticleView,
    admin_login,
    admin_me,
    article_view_count,
    dashboard_summary,
    view_counts,
    volume_view_count,
)

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='article')
router.register('volumes', VolumeViewSet, basename='volume')
router.register('pages', StaticPageViewSet, basename='page')
router.register('uploads', JournalUploadViewSet, basename='upload')

urlpatterns = [
    path('auth/login/', admin_login, name='admin-login'),
    path('auth/me/', admin_me, name='admin-me'),
    path('dashboard/', dashboard_summary, name='dashboard-summary'),
    path('volumes/<int:pk>/', VolumeDetailView.as_view(), name='volume-detail-view'),
    path('views/', view_counts, name='view-counts'),
    path('articles/<int:pk>/views/', article_view_count, name='article-view-count'),
    path('articles/current/', LatestArticleView.as_view(), name='latest-article-view'),
    path('volumes/<int:pk>/views/', volume_view_count, name='volume-view-count'),
    path('', include(router.urls)),
]
