from rest_framework.serializers import ModelSerializer
from ponentes.models import Ponente

class PonenteSerializer(ModelSerializer):
  class Meta:
    model = Ponente
    fields = '__all__'