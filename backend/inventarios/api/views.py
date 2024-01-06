from rest_framework import viewsets
from inventarios.models import Inventario
from inventarios.api.serializers import InventarioSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend

class InventarioViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = InventarioSerializer
    queryset = Inventario.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {'biblioteca' : ['exact']}