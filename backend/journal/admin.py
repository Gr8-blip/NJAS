from django.contrib import admin
from .models import Article, JournalUpload, StaticPage, Volume

@admin.register(Volume)
class VolumeAdmin(admin.ModelAdmin):
    list_display = ('volume_number', 'issue_number', 'year', 'is_published', 'published_at', 'view_count')
    list_filter = ('year', 'is_published')
    search_fields = ('volume_number', 'issue_number')


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'authors', 'status', 'volume', 'date_approved', 'view_count')
    list_filter = ('status', 'volume')
    search_fields = ('title', 'authors', 'keywords', 'abstract')


@admin.register(StaticPage)
class StaticPageAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'updated_at')
    list_filter = ('status',)
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'body')


@admin.register(JournalUpload)
class JournalUploadAdmin(admin.ModelAdmin):
    list_display = ('title', 'volume', 'article', 'authors', 'uploaded_at')
    list_filter = ('volume',)
    search_fields = ('title', 'authors', 'keywords', 'abstract')
