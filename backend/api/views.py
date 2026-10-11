from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly

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
    permission_classes = [IsAuthenticatedOrReadOnly]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Project.objects.all().order_by("-created_at")

        category = self.request.query_params.get("category")
        status = self.request.query_params.get("status")

        if category:
            queryset = queryset.filter(category=category)

        if status:
            queryset = queryset.filter(status=status)

        return queryset


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by("-created_at")
    serializer_class = TestimonialSerializer
    permission_classes = [IsAdminUser]


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by("-created_at")
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]
        return [IsAdminUser()]


class QuoteRequestViewSet(viewsets.ModelViewSet):
    queryset = QuoteRequest.objects.all().order_by("-created_at")
    serializer_class = QuoteRequestSerializer
    permission_classes = [AllowAny]

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]
        return [IsAdminUser()]