from django.db import models
from idiomas.models import Idioma
from autores.models import Autor

# Create your models here.
class Tipo(models.Model):
  tipo = models.CharField(max_length=50)

  class Meta:
    # Cambia el nombre de la tabla
    db_table = 'tipos_documentos'

  def __str__(self):
    return self.tipo

class Documento(models.Model):
  titulo = models.CharField(max_length=100)
  isbn = models.CharField(max_length=13)
  anio_publicacion = models.DateField()
  descripcion = models.TextField()
  imagen = models.ImageField(upload_to='documentos', null=True)
  cantidad = models.IntegerField()
  idioma = models.ForeignKey(Idioma, on_delete=models.CASCADE)
  tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
  autor = models.ManyToManyField(Autor)

  class Meta:
    db_table = 'documentos'

  def __str__(self):
    return self.titulo