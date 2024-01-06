from rest_framework.routers import DefaultRouter
from bibliotecas.api.views import BibliotecaViewSet

router_bibliotecas = DefaultRouter()
router_bibliotecas.register(prefix='bibliotecas', viewset=BibliotecaViewSet, basename='bibliotecas')