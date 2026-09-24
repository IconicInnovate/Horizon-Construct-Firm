from django.db import models

# Create your models here.
from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Project(models.Model):
    PROJECT_TYPES = [
        ("hostel", "Hostel"),
        ("duplex", "Duplex"),
        ("bungalow", "Bungalow"),
        ("other", "Other"),
    ]

    title = models.CharField(max_length=200)
    project_type = models.CharField(
        max_length=20,
        choices=PROJECT_TYPES,
    )
    description = models.TextField()
    location = models.CharField(max_length=200, blank=True)
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
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    project_type = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Quote request from {self.name}"