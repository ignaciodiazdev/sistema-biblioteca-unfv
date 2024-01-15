from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from actividades.models import Tipo
from actividades.models import Actividad
from actividades.api.serializers import Estado
from actividades.api.serializers import Modalidad

from actividades.api.serializers import TipoSerializer
from actividades.api.serializers import ActividadSerializer
from actividades.api.serializers import EstadoSerializer
from actividades.api.serializers import ModalidadSerializer

class TipoViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = TipoSerializer
  queryset = Tipo.objects.all()

class EstadoViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = EstadoSerializer
  queryset = Estado.objects.all()

class ModalidadViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = ModalidadSerializer
  queryset = Modalidad.objects.all()

class ActividadViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = ActividadSerializer
  queryset = Actividad.objects.all()
  filter_backends = [DjangoFilterBackend, OrderingFilter]
  filterset_fields = {'nombre' : ['icontains'], 'tipo' : ['exact'], 'id': ['exact'], 'estado' : ['exact']}
  ordering_fields = '__all__'
