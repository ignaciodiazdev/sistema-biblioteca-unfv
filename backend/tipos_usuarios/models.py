from django.db import models

# Create your models here.

class TipoUsuario(models.Model):
  tipo = models.CharField(max_length=20)

  class Meta:
    db_table = 'tipos_usuarios'

  def __str__(self):
    return self.tipo