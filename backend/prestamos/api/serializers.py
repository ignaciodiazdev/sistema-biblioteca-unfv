from rest_framework.serializers import ModelSerializer
from prestamos.models import Prestamo
from users.api.serializers import UserSerializer
from inventarios.api.serializers import InventarioSerializer

class PrestamoSerializer(ModelSerializer):
  usuario_data = UserSerializer(source='usuario', read_only=True)
  inventario_data = InventarioSerializer(source='inventario', read_only=True, many=True)
  
  class Meta:
    model = Prestamo
    fields = '__all__'
