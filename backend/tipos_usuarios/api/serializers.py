from rest_framework import serializers
from tipos_usuarios.models import TipoUsuario

class TipoUsuarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = TipoUsuario
    fields = '__all__'