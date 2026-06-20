from django.db import models


class Volume(models.Model):
    title = models.CharField(max_length=255)
    volume_number = models.IntegerField()
    issue_number = models.IntegerField()
    published_at = models.CharField(max_length=7, blank=True)
    year = models.IntegerField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    cover_image = models.ImageField(upload_to='cover_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} Vol. {self.volume_number}, Issue {self.issue_number}"

    def save(self, *args, **kwargs):
        if self.published_at and not self.year:
            self.year = int(self.published_at[:4])
        super().save(*args, **kwargs)


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
    title = models.CharField(max_length=255)
    volume = models.ForeignKey(Volume, on_delete=models.SET_NULL, blank=True, null=True, related_name='uploads')
    article = models.ForeignKey(Article, on_delete=models.SET_NULL, blank=True, null=True, related_name='uploads')
    abstract = models.TextField(blank=True)
    authors = models.CharField(max_length=255, blank=True)
    author_affiliations = models.CharField(max_length=255, blank=True)
    keywords = models.CharField(max_length=255, blank=True)
    file = models.FileField(upload_to='journal_uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
