from rest_framework.serializers import ModelSerializer
from escuelas.models import Escuela
from facultades.api.serializers import FacultadSerializer

class EscuelaSerializer(ModelSerializer):
  facultad_data = FacultadSerializer(source='facultad', read_only=True)
  
  class Meta:
    model = Escuela
    fields = '__all__'