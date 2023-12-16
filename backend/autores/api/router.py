from rest_framework.routers import DefaultRouter
from autores.api.views import AutorApiViewSet

router_autores = DefaultRouter()

router_autores.register(
  prefix = 'autores',
  basename='autores',
  viewset=AutorApiViewSet
)