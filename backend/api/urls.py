from rest_framework.routers import DefaultRouter
from .views import (
    ServiceViewSet,
    ProjectViewSet,
    TestimonialViewSet,
    ContactMessageViewSet,
    QuoteRequestViewSet,
)

router = DefaultRouter()

router.register("services", ServiceViewSet)
router.register("projects", ProjectViewSet)
router.register("testimonials", TestimonialViewSet)
router.register("contact", ContactMessageViewSet)
router.register("quote-requests", QuoteRequestViewSet)

urlpatterns = router.urls