from django.db import models
from facultades.models import Facultad

# Create your models here.
class Escuela(models.Model):
  nombre = models.CharField(max_length=255)
  facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)
  
  class Meta:
    db_table = 'escuelas'

  def __str__(self):
    return self.nombre