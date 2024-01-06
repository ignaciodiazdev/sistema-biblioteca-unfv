from django.db import models

# Create your models here.
class Facultad(models.Model):
  nombre = models.CharField(max_length=100)

  class Meta:
    db_table = 'facultades'

  def __str__(self):
      return self.nombre