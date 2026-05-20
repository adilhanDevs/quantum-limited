from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ContactInfo",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("phone", models.CharField(default="+996 558 557 726", max_length=64)),
                ("instagram", models.CharField(default="quantum.limited", max_length=120)),
                ("telegram", models.CharField(default="sattarzhanovdev", max_length=120)),
                ("email", models.EmailField(blank=True, max_length=254)),
                ("address", models.CharField(blank=True, max_length=255)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Contact information",
                "verbose_name_plural": "Contact information",
            },
        ),
        migrations.CreateModel(
            name="PortfolioProject",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=180)),
                ("short_description", models.TextField()),
                ("full_description", models.TextField(blank=True)),
                ("category", models.CharField(max_length=120)),
                ("image", models.ImageField(blank=True, null=True, upload_to="portfolio/")),
                ("project_url", models.URLField(blank=True)),
                ("github_url", models.URLField(blank=True)),
                ("order", models.PositiveIntegerField(db_index=True, default=0)),
                ("is_active", models.BooleanField(db_index=True, default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "ordering": ["order", "-created_at"],
            },
        ),
        migrations.CreateModel(
            name="SiteLink",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("label", models.CharField(max_length=120)),
                ("url", models.CharField(max_length=255)),
                ("order", models.PositiveIntegerField(db_index=True, default=0)),
                ("is_active", models.BooleanField(db_index=True, default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "ordering": ["order", "label"],
            },
        ),
    ]
