from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactInfo, PortfolioProject, SiteLink
from .serializers import ContactInfoSerializer, PortfolioProjectSerializer, SiteLinkSerializer


class ProjectListView(ListAPIView):
    serializer_class = PortfolioProjectSerializer

    def get_queryset(self):
        return PortfolioProject.objects.filter(is_active=True).order_by("order", "-created_at")


class ContactInfoView(APIView):
    def get(self, request):
        contact = ContactInfo.objects.order_by("-updated_at").first()
        if contact is None:
            contact = ContactInfo()

        serializer = ContactInfoSerializer(contact, context={"request": request})
        return Response(serializer.data)


class SiteLinkListView(ListAPIView):
    serializer_class = SiteLinkSerializer

    def get_queryset(self):
        return SiteLink.objects.filter(is_active=True).order_by("order", "label")
