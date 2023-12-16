from rest_framework import viewsets
from tipos_usuarios.api.serializers import TipoUsuarioSerializer
from tipos_usuarios.models import TipoUsuario
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class TipoUsuarioViewSet(viewsets.ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = TipoUsuarioSerializer
  queryset = TipoUsuario.objects.all()