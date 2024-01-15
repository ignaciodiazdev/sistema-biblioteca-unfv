from rest_framework.routers import DefaultRouter
from actividades.api.views import TipoViewSet
from actividades.api.views import ActividadViewSet
from actividades.api.views import EstadoViewSet
from actividades.api.views import ModalidadViewSet

router_actividad = DefaultRouter()

router_actividad.register(prefix='actividad-tipo', viewset=TipoViewSet, basename='actividad-tipo')
router_actividad.register(prefix='actividades', viewset=ActividadViewSet, basename='actividades')
router_actividad.register(prefix='actividad-estado', viewset=EstadoViewSet, basename='actividad-estado')
router_actividad.register(prefix='actividad-modalidad', viewset=ModalidadViewSet, basename='actividad-modalidad')
