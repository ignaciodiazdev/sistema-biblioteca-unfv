from rest_framework import viewsets
from bibliotecas.models import Biblioteca
from bibliotecas.api.serializers import BibliotecaSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class BibliotecaViewSet(viewsets.ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = BibliotecaSerializer
  queryset = Biblioteca.objects.all()