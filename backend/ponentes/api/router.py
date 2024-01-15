from rest_framework.routers import DefaultRouter
from ponentes.api.views import PonenteApiViewSet

router_ponentes = DefaultRouter()

router_ponentes.register(
  prefix = 'ponentes',
  basename='ponentes',
  viewset= PonenteApiViewSet
)