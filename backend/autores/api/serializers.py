from rest_framework.serializers import ModelSerializer
from autores.models import Autor

class AutorSerializer(ModelSerializer):
  class Meta:
    model = Autor
    fields = '__all__'