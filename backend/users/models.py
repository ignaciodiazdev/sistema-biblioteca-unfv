from django.db import models
from django.contrib.auth.models import AbstractUser
from tipos_usuarios.models import TipoUsuario
from escuelas.models import Escuela
from bibliotecas.models import Biblioteca

# Create your models here.

class User(AbstractUser):
  codigo_insti = models.CharField(max_length=10, null=True)
  dni = models.CharField(max_length=8, null=True)
  celular = models.CharField(max_length=9, null=True)
  image = models.TextField(null=True, blank=True)
  tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.CASCADE, null=True)
  escuela = models.ForeignKey(Escuela, on_delete=models.CASCADE, null=True)
  biblioteca = models.ForeignKey(Biblioteca, on_delete=models.CASCADE, null=True)
  # documentos = models.ManyToManyField('documentos.Documento', through='prestamos.Prestamo')
  
  # USERNAME_FIELD = 'email' # Campo que se usará para el login
  # REQUIRED_FIELDS = [] # Campos requeridos para el registro

  class Meta:
    db_table = 'usuarios'
