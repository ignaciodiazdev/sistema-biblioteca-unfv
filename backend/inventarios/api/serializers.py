from rest_framework.serializers import ModelSerializer, SerializerMethodField
from inventarios.models import Inventario
from bibliotecas.api.serializers import BibliotecaSerializer
from documentos.api.serializers import DocumentoSerializer

class InventarioSerializer(ModelSerializer):
  biblioteca_data = BibliotecaSerializer(source='biblioteca', read_only=True)
  documento_data = DocumentoSerializer(source='documento', read_only=True)
  # biblioteca_data = SerializerMethodField()
  class Meta:
    model = Inventario
    fields = '__all__'

  # def get_biblioteca_data(self, obj):
  #     # Filtrar los campos que quieres incluir en la representación de biblioteca_data
  #     biblioteca_instance = obj.biblioteca
  #     return BibliotecaSerializer(biblioteca_instance, context=self.context).data['nombre']
