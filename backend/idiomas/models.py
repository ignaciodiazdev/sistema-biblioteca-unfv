from django.db import models

# Create your models here.
class Idioma(models.Model):
  idioma = models.CharField(max_length=20)

  class Meta:
    # Cambia el nombre de la tabla
    db_table = 'idiomas'

  def __str__(self):
    return self.idioma