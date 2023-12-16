from rest_framework import routers
from tipos_usuarios.api.views import TipoUsuarioViewSet

router_tipo_usuario = routers.DefaultRouter()
router_tipo_usuario.register(prefix='usuario-tipo', viewset=TipoUsuarioViewSet, basename='usuario-tipo')