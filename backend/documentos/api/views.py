from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
# from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from documentos.models import Tipo
from documentos.api.serializers import TipoSerializer
from documentos.models import Documento
from documentos.api.serializers import DocumentoSerializer

class TipoViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = TipoSerializer
    queryset = Tipo.objects.all()

class DocumentoViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = DocumentoSerializer
    queryset = Documento.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = {'titulo' : ['icontains'], 'tipo' : ['exact'], 'id': ['exact']}
    ordering_fields = '__all__'
    # filter_backends = [filters.SearchFilter]
    # search_fields = ['titulo','isbn']
