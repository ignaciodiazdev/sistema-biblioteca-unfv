from rest_framework import routers
from prestamos.api.views import PrestamoViewSet

router_prestamo = routers.DefaultRouter()
router_prestamo.register( 
  prefix='prestamos',
  viewset=PrestamoViewSet,
  basename='prestamos'
)