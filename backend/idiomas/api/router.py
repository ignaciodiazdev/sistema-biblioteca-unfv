from rest_framework.routers import DefaultRouter
from idiomas.api.views import IdiomaViewSet

router_idioma = DefaultRouter()
router_idioma.register(prefix='idiomas', viewset=IdiomaViewSet, basename='idiomas')