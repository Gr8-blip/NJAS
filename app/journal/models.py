from django.db import models


class Volume(models.Model):
    volume_number = models.IntegerField()
    year = models.IntegerField()
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    publication_cycle = models.CharField(max_length=100, blank=True)
    is_published = models.BooleanField(default=False)
    cover_image = models.ImageField(upload_to='cover_images/', blank=True, null=True)
    published_at = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Volume {self.volume_number} ({self.year})"


class Article(models.Model):
    STATUS_DRAFT = 'draft'
    STATUS_REVIEW = 'review'
    STATUS_PUBLISHED = 'published'
    STATUS_ARCHIVED = 'archived'

    STATUS_CHOICES = [
        (STATUS_DRAFT, 'Draft'),
        (STATUS_REVIEW, 'Under Review'),
        (STATUS_PUBLISHED, 'Published'),
        (STATUS_ARCHIVED, 'Archived'),
    ]

    title = models.CharField(max_length=255)
    citation = models.CharField(max_length=255, blank=True)
    abstract = models.TextField(blank=True)
    manuscript_file = models.FileField(upload_to='manuscripts/', blank=True, null=True)
    pages = models.CharField(max_length=50, blank=True)
    keywords = models.CharField(max_length=255, blank=True)
    date_approved = models.DateField(blank=True, null=True)
    authors = models.CharField(max_length=255, blank=True)
    author_affiliations = models.CharField(max_length=255, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_DRAFT)
    volume = models.ForeignKey(Volume, on_delete=models.SET_NULL, blank=True, null=True, related_name='articles')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class StaticPage(models.Model):
    STATUS_DRAFT = 'draft'
    STATUS_PUBLISHED = 'published'

    STATUS_CHOICES = [
        (STATUS_DRAFT, 'Draft'),
        (STATUS_PUBLISHED, 'Published'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    body = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_DRAFT)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class JournalUpload(models.Model):
    DOCUMENT_PDF = 'pdf'
    DOCUMENT_COVER = 'cover'
    DOCUMENT_SUPPLEMENT = 'supplement'

    DOCUMENT_CHOICES = [
        (DOCUMENT_PDF, 'Journal PDF'),
        (DOCUMENT_COVER, 'Cover Image'),
        (DOCUMENT_SUPPLEMENT, 'Supplementary File'),
    ]

    title = models.CharField(max_length=255)
    document_type = models.CharField(max_length=30, choices=DOCUMENT_CHOICES, default=DOCUMENT_PDF)
    file = models.FileField(upload_to='journal_uploads/')
    description = models.TextField(blank=True)
    volume = models.ForeignKey(Volume, on_delete=models.SET_NULL, blank=True, null=True, related_name='uploads')
    article = models.ForeignKey(Article, on_delete=models.SET_NULL, blank=True, null=True, related_name='uploads')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
