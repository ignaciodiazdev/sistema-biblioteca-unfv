from rest_framework.serializers import ModelSerializer
from facultades.models import Facultad

class FacultadSerializer(ModelSerializer):
    class Meta:
        model = Facultad
        fields = '__all__'
        