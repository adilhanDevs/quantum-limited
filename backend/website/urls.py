from django.urls import path

from .views import ContactInfoView, ProjectListView, SiteLinkListView

urlpatterns = [
    path("projects/", ProjectListView.as_view(), name="project-list"),
    path("contact-info/", ContactInfoView.as_view(), name="contact-info"),
    path("site-links/", SiteLinkListView.as_view(), name="site-link-list"),
]
