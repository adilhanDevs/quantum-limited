from rest_framework import serializers

from .models import ContactInfo, PortfolioProject, SiteLink


class PortfolioProjectSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = PortfolioProject
        fields = [
            "id",
            "title",
            "short_description",
            "full_description",
            "category",
            "image_url",
            "project_url",
            "github_url",
            "order",
            "created_at",
            "updated_at",
        ]

    def get_image_url(self, obj: PortfolioProject) -> str:
        if not obj.image:
            return ""

        request = self.context.get("request")
        url = obj.image.url
        return request.build_absolute_uri(url) if request else url


class ContactInfoSerializer(serializers.ModelSerializer):
    instagram_url = serializers.SerializerMethodField()
    telegram_url = serializers.SerializerMethodField()
    phone_href = serializers.SerializerMethodField()

    class Meta:
        model = ContactInfo
        fields = [
            "phone",
            "phone_href",
            "instagram",
            "instagram_url",
            "telegram",
            "telegram_url",
            "email",
            "address",
            "updated_at",
        ]

    def get_phone_href(self, obj: ContactInfo) -> str:
        digits = "".join(char for char in obj.phone if char.isdigit() or char == "+")
        return f"tel:{digits}"

    def get_instagram_url(self, obj: ContactInfo) -> str:
        handle = obj.instagram.lstrip("@")
        return f"https://www.instagram.com/{handle}" if handle else ""

    def get_telegram_url(self, obj: ContactInfo) -> str:
        handle = obj.telegram.lstrip("@")
        return f"https://t.me/{handle}" if handle else ""


class SiteLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteLink
        fields = ["id", "label", "url", "order", "updated_at"]
