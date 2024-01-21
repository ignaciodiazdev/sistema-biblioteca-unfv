from rest_framework import serializers
from users.models import User
from tipos_usuarios.api.serializers import TipoUsuarioSerializer
from escuelas.api.serializers import EscuelaSerializer
from bibliotecas.api.serializers import BibliotecaSerializer

class UserSerializer(serializers.ModelSerializer):
  tipo_usuario_data = TipoUsuarioSerializer(source='tipo_usuario', read_only=True)
  escuela_data = EscuelaSerializer(source='escuela', read_only=True)
  biblioteca_data = BibliotecaSerializer(source='biblioteca', read_only=True)

  class Meta:
    model = User
    fields = '__all__'