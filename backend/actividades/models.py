from django.db import models
from ponentes.models import Ponente

class Tipo(models.Model):
  nombre = models.CharField(max_length=60)

  class Meta:
    db_table = 'tipos_actividades'
  
  def __str__(self):
    return self.nombre

class Estado(models.Model):
  nombre = models.CharField(max_length=60)

  class Meta:
    db_table = 'estados_actividades'
  
  def __str__(self):
    return self.nombre
  
class Modalidad(models.Model):
  nombre = models.CharField(max_length=60)

  class Meta:
    db_table = 'modalidades_actividades'
  
  def __str__(self):
    return self.nombre

class Actividad(models.Model):
  nombre = models.CharField(max_length=100)
  descripcion = models.TextField(max_length=500)
  tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
  fecha = models.DateField()
  hora = models.TimeField()
  imagen = models.ImageField(upload_to='actividades', null=True, blank=True)
  modalidad = models.ForeignKey(Modalidad, on_delete=models.CASCADE)
  estado = models.ForeignKey(Estado, on_delete=models.CASCADE)
  ponente = models.ManyToManyField(Ponente)
  enlace = models.TextField(null=True, blank=True)
  lugar = models.CharField(max_length=60, default='Por determinar')
  correo = models.CharField(max_length=60, default='bibliocent@unfv.edu.pe')

  class Meta:
    db_table = 'actividades'
  
  def __str__(self):
    return self.nombre