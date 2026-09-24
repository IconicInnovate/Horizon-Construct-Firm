from django.contrib import admin
from .models import (
    Service,
    Project,
    ProjectImage,
    Testimonial,
    ContactMessage,
    QuoteRequest,
)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at")
    search_fields = ("title",)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "project_type", "location", "year", "featured")
    list_filter = ("project_type", "featured")
    search_fields = ("title", "location")


@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ("project", "caption")
    search_fields = ("project__title",)


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("client_name", "created_at")
    search_fields = ("client_name",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "created_at")
    search_fields = ("name", "email", "phone")
    readonly_fields = ("created_at",)


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "project_type", "created_at")
    search_fields = ("name", "email", "phone", "project_type")
    readonly_fields = ("created_at",)
