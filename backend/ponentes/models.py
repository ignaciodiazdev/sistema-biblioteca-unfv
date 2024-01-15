from django.db import models

# Create your models here.
class Ponente(models.Model):
  nombre = models.CharField(max_length=50)
  correo = models.CharField(max_length=50)
  telefono = models.CharField(max_length=9)
  profesion = models.CharField(max_length=50)
  foto = models.ImageField(upload_to='ponentes', null=True, blank=True)

  class Meta:
      db_table = 'ponentes'

  def __str__(self):
      return self.nombre