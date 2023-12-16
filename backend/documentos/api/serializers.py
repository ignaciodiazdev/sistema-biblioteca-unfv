from rest_framework.serializers import ModelSerializer
from documentos.models import Tipo
from documentos.models import Documento
from idiomas.api.serializers import IdiomaSerializer
from autores.api.serializers import AutorSerializer

class TipoSerializer(ModelSerializer):
  class Meta:
    model = Tipo
    fields = '__all__'

class DocumentoSerializer(ModelSerializer):
  tipo_data = TipoSerializer(source='tipo', read_only=True)
  idioma_data = IdiomaSerializer(source='idioma', read_only=True)
  autores_data = AutorSerializer(source='autor', many=True, read_only=True) #source='autor' es el nombre del campo en el modelo Documento, tiene que ser el mismo nombre que el campo ManyToManyField en el modelo Documento

  class Meta:
    model = Documento
    # fields = ['id', 'titulo', 'tipo', 'tipo_data', 'idioma', 'idioma_data', 'autores']
    fields = '__all__'