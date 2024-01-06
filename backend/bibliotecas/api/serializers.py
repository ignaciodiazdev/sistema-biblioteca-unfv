from rest_framework.serializers import ModelSerializer
from bibliotecas.models import Biblioteca
from facultades.api.serializers import FacultadSerializer

class BibliotecaSerializer(ModelSerializer):
  facultad_data = FacultadSerializer(source='facultad', read_only=True)

  class Meta:
    model = Biblioteca
    fields = '__all__'