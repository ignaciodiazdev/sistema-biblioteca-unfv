from rest_framework.serializers import ModelSerializer
from idiomas.models import Idioma

class IdiomaSerializer(ModelSerializer):
  class Meta:
    model = Idioma
    fields = '__all__'