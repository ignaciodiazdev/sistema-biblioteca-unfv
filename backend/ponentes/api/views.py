from rest_framework.viewsets import ModelViewSet
from ponentes.models import Ponente
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from ponentes.api.serializers import PonenteSerializer

class PonenteApiViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = PonenteSerializer
  queryset = Ponente.objects.all()