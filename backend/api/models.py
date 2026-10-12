from django.db import models

# Create your models here.

class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Project(models.Model):
    CATEGORY_CHOICES = [
        ("residential", "Residential"),
        ("commercial", "Commercial"),
        ("renovation", "Renovation"),
    ]

    STATUS_CHOICES = [
        ("completed", "Completed"),
        ("ongoing", "Ongoing"),
        ("design_concept", "Design Concept"),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="residential",
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="design_concept",
    )
    description = models.TextField()
    location = models.CharField(max_length=200, blank=True)
    plot_size = models.CharField(max_length=100, blank=True)
    features = models.TextField(
        blank=True,
        help_text="Enter project features, one per line.",
    )
    year = models.PositiveIntegerField(null=True, blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="images",
    )
    image = models.ImageField(upload_to="projects/")
    caption = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.project.title} image"


class Testimonial(models.Model):
    client_name = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.client_name


class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"


class QuoteRequest(models.Model):
    PROJECT_TYPES = [
        ("design", "Design"),
        ("construction", "Construction"),
        ("renovation", "Renovation"),
        ("advisory", "Advisory"),
        ("facility_management", "Facility Management"),
        ("property_trading", "Property Trading"),
    ]

    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=30)
    email = models.EmailField(blank=True)
    project_type = models.CharField(
        max_length=30,
        choices=PROJECT_TYPES,
    )
    location = models.CharField(max_length=200, blank=True)
    plot_size = models.CharField(max_length=100, blank=True)
    budget_range = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Quote request from {self.name}"