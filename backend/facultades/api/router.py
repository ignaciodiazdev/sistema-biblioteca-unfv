from rest_framework.routers import DefaultRouter
from facultades.api.views import FacultadViewSet

router_facultades = DefaultRouter()
router_facultades.register(prefix='facultades', basename='facultades', viewset=FacultadViewSet)