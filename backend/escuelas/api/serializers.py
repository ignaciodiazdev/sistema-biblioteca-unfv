from rest_framework.serializers import ModelSerializer
from escuelas.models import Escuela

class EscuelaSerializer(ModelSerializer):
  class Meta:
    model = Escuela
    fields = '__all__'