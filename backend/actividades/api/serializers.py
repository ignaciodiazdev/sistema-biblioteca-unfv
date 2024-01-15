from rest_framework.serializers import ModelSerializer
from actividades.models import Actividad, Estado, Modalidad, Tipo
from ponentes.api.serializers import PonenteSerializer

class TipoSerializer(ModelSerializer):
  class Meta:
    model = Tipo
    fields = '__all__'
    ref_name = 'TipoActividades' 

class EstadoSerializer(ModelSerializer):
  class Meta:
    model = Estado
    fields = '__all__'

class ModalidadSerializer(ModelSerializer):
  class Meta:
    model = Modalidad
    fields = '__all__'

class ActividadSerializer(ModelSerializer):
  tipo_data = TipoSerializer(source='tipo', read_only=True)
  estado_data = EstadoSerializer(source='estado', read_only=True)
  modalidad_data = ModalidadSerializer(source='modalidad', read_only=True)
  ponente_data = PonenteSerializer(source='ponente', many=True, read_only=True)

  class Meta:
    model = Actividad
    fields = '__all__'