
from rest_framework import viewsets
from .models import (
    Service,
    Project,
    Testimonial,
    ContactMessage,
    QuoteRequest,
)
from .serializers import (
    ServiceSerializer,
    ProjectSerializer,
    TestimonialSerializer,
    ContactMessageSerializer,
    QuoteRequestSerializer,
)


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by("-created_at")
    serializer_class = ServiceSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by("-created_at")
    serializer_class = TestimonialSerializer


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by("-created_at")
    serializer_class = ContactMessageSerializer


class QuoteRequestViewSet(viewsets.ModelViewSet):
    queryset = QuoteRequest.objects.all().order_by("-created_at")
    serializer_class = QuoteRequestSerializer