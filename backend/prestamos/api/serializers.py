from rest_framework.serializers import ModelSerializer
from prestamos.models import Prestamo
from users.api.serializers import UserSerializer
from documentos.api.serializers import DocumentoSerializer

class PrestamoSerializer(ModelSerializer):
  usuario_data = UserSerializer(source='usuario', read_only=True)
  documento_data = DocumentoSerializer(source='documento', read_only=True)

  class Meta:
    model = Prestamo
    fields = '__all__'
