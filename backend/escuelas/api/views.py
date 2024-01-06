from rest_framework import viewsets
from escuelas.models import Escuela
from escuelas.api.serializers import EscuelaSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class EscuelaViewSet(viewsets.ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = EscuelaSerializer
  queryset = Escuela.objects.all()