from django.db import models

# Create your models here.
class Autor(models.Model):
  nombre = models.CharField(max_length=50)
  apellidos = models.CharField(max_length=70)

  class Meta:
    db_table = 'autores'

  def __str__(self):
    return self.nombre + ' ' + self.apellidos
  