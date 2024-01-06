from rest_framework.routers import DefaultRouter
from inventarios.api.views import InventarioViewSet

router_inventarios = DefaultRouter()
router_inventarios.register(prefix='inventarios', viewset=InventarioViewSet, basename='inventarios')