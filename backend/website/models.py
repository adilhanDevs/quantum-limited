from django.db import models


class PortfolioProject(models.Model):
    title = models.CharField(max_length=180)
    short_description = models.TextField()
    full_description = models.TextField(blank=True)
    category = models.CharField(max_length=120)
    image = models.ImageField(upload_to="portfolio/", blank=True, null=True)
    project_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    order = models.PositiveIntegerField(default=0, db_index=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.title


class ContactInfo(models.Model):
    phone = models.CharField(max_length=64, default="+996 558 557 726")
    instagram = models.CharField(max_length=120, default="quantum.limited")
    telegram = models.CharField(max_length=120, default="sattarzhanovdev")
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=255, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Contact information"
        verbose_name_plural = "Contact information"

    def __str__(self) -> str:
        return "Website contact information"


class SiteLink(models.Model):
    label = models.CharField(max_length=120)
    url = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0, db_index=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "label"]

    def __str__(self) -> str:
        return self.label
