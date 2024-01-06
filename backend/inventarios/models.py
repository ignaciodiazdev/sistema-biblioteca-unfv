from django.db import models
from bibliotecas.models import Biblioteca
from documentos.models import Documento

# Create your models here.
class Inventario(models.Model):
  biblioteca = models.ForeignKey(Biblioteca, on_delete=models.CASCADE)
  documento = models.ForeignKey(Documento, on_delete=models.CASCADE)
  fecha_adquisicion = models.DateField()
  stock_actual = models.IntegerField()
  stock_registrado = models.IntegerField()
  
  class Meta:
    db_table = 'inventarios'

  def __str__(self):
    return self.biblioteca.nombre + ' - ' + self.documento.titulo