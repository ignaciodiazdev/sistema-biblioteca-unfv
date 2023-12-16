from rest_framework.routers import DefaultRouter
from documentos.api.views import TipoViewSet
from documentos.api.views import DocumentoViewSet

router_tipo = DefaultRouter()

router_tipo.register(prefix='documento-tipo', viewset=TipoViewSet, basename='documento-tipo')
router_tipo.register(prefix='documentos', viewset=DocumentoViewSet, basename='documentos')