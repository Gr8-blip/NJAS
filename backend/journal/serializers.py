from rest_framework import serializers
from .models import Article, JournalUpload, StaticPage, Volume


class ArticleSerializer(serializers.ModelSerializer):
    volume_label = serializers.CharField(source='volume.__str__', read_only=True)
    manuscript_url = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'id', 'title', 'citation', 'abstract', 'manuscript_file',
            'manuscript_url', 'pages', 'keywords', 'date_approved', 'authors',
            'author_affiliations', 'status', 'volume', 'volume_label',
            'created_at', 'updated_at',
        ]

    def get_manuscript_url(self, obj):
        if not obj.manuscript_file:
            return ''
        request = self.context.get('request')
        url = obj.manuscript_file.url
        return request.build_absolute_uri(url) if request else url


class VolumeSerializer(serializers.ModelSerializer):
    article_count = serializers.IntegerField(source='articles.count', read_only=True)
    upload_count = serializers.IntegerField(source='uploads.count', read_only=True)
    cover_url = serializers.SerializerMethodField()

    class Meta:
        model = Volume
        fields = [
            'id', 'title', 'volume_number', 'issue_number', 'year',
            'is_published', 'cover_image', 'cover_url',
            'published_at', 'article_count', 'upload_count', 'created_at',
        ]

    def get_cover_url(self, obj):
        if not obj.cover_image:
            return ''
        request = self.context.get('request')
        url = obj.cover_image.url
        return request.build_absolute_uri(url) if request else url


class StaticPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaticPage
        fields = ['id', 'title', 'slug', 'body', 'status', 'updated_at']


class JournalUploadSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()
    volume_label = serializers.CharField(source='volume.__str__', read_only=True)
    article_title = serializers.CharField(source='article.title', read_only=True)

    class Meta:
        model = JournalUpload
        fields = [
            'id', 'title', 'volume', 'volume_label', 'article', 'article_title',
            'abstract', 'authors', 'author_affiliations', 'keywords',
            'file', 'file_url', 'uploaded_at',
        ]

    def get_file_url(self, obj):
        if not obj.file:
            return ''
        request = self.context.get('request')
        url = obj.file.url
        return request.build_absolute_uri(url) if request else url
