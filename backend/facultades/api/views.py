from rest_framework.viewsets import ModelViewSet
from facultades.models import Facultad
from rest_framework.permissions import IsAuthenticated
from facultades.api.serializers import FacultadSerializer

class FacultadViewSet(ModelViewSet):
    queryset = Facultad.objects.all()
    serializer_class = FacultadSerializer
    permission_classes = [IsAuthenticated]