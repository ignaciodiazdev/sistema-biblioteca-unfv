from rest_framework.routers import DefaultRouter
from escuelas.api.views import EscuelaViewSet

router_escuelas = DefaultRouter()
router_escuelas.register(prefix='escuelas', basename='escuelas', viewset=EscuelaViewSet)