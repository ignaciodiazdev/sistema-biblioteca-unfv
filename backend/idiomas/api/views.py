from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from idiomas.models import Idioma
from idiomas.api.serializers import IdiomaSerializer

class IdiomaViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = IdiomaSerializer
  queryset = Idioma.objects.all()