from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import (
    ArticleViewSet,
    JournalUploadViewSet,
    StaticPageViewSet,
    VolumeViewSet,
    dashboard_summary,
)

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='article')
router.register('volumes', VolumeViewSet, basename='volume')
router.register('pages', StaticPageViewSet, basename='page')
router.register('uploads', JournalUploadViewSet, basename='upload')

urlpatterns = [
    path('dashboard/', dashboard_summary, name='dashboard-summary'),
    path('', include(router.urls)),
]
