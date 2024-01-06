from django.db import models
from facultades.models import Facultad

# Create your models here.
class Biblioteca(models.Model):
  nombre = models.CharField(max_length=255)
  direccion = models.CharField(max_length=255)
  telefono = models.CharField(max_length=255)
  correo = models.CharField(max_length=255)
  facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE, null=True)

  class Meta:
    db_table = 'bibliotecas'

  def __str__(self):
    return self.nombre