from rest_framework.viewsets import ModelViewSet
from autores.models import Autor
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from autores.api.serializers import AutorSerializer

class AutorApiViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = AutorSerializer
  queryset = Autor.objects.all()  