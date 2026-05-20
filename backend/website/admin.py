from django.contrib import admin
from django.utils.html import format_html

from .models import ContactInfo, PortfolioProject, SiteLink


@admin.register(PortfolioProject)
class PortfolioProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "order", "is_active", "has_image", "updated_at")
    list_editable = ("order", "is_active")
    list_filter = ("is_active", "category", "created_at", "updated_at")
    search_fields = ("title", "short_description", "full_description", "category", "project_url", "github_url")
    ordering = ("order", "-created_at")
    readonly_fields = ("image_preview", "created_at", "updated_at")
    actions = ("activate_projects", "deactivate_projects")
    list_per_page = 25
    fieldsets = (
        ("Project content", {"fields": ("title", "category", "short_description", "full_description")}),
        ("Media", {"fields": ("image", "image_preview")}),
        ("Links", {"fields": ("project_url", "github_url")}),
        ("Display controls", {"fields": ("order", "is_active")}),
        ("Timestamps", {"fields": ("created_at", "updated_at")}),
    )

    @admin.display(boolean=True, description="Image")
    def has_image(self, obj):
        return bool(obj.image)

    @admin.display(description="Current image")
    def image_preview(self, obj):
        if not obj.image:
            return "No image uploaded."

        return format_html(
            '<img src="{}" style="max-width: 320px; max-height: 180px; border-radius: 8px;" />',
            obj.image.url,
        )

    @admin.action(description="Activate selected projects")
    def activate_projects(self, request, queryset):
        updated = queryset.update(is_active=True)
        self.message_user(request, f"{updated} project(s) activated.")

    @admin.action(description="Deactivate selected projects")
    def deactivate_projects(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f"{updated} project(s) deactivated.")


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ("phone", "instagram", "telegram", "email", "updated_at")
    fields = ("phone", "instagram", "telegram", "email", "address", "updated_at")
    readonly_fields = ("updated_at",)

    def has_add_permission(self, request):
        return not ContactInfo.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(SiteLink)
class SiteLinkAdmin(admin.ModelAdmin):
    list_display = ("label", "url", "order", "is_active", "updated_at")
    list_editable = ("order", "is_active")
    list_filter = ("is_active",)
    search_fields = ("label", "url")
    ordering = ("order", "label")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        ("Link", {"fields": ("label", "url")}),
        ("Display controls", {"fields": ("order", "is_active")}),
        ("Timestamps", {"fields": ("created_at", "updated_at")}),
    )
