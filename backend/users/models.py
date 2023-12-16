from django.db import models
from django.contrib.auth.models import AbstractUser
from tipos_usuarios.models import TipoUsuario

# Create your models here.

class User(AbstractUser):
  # email = models.EmailField(unique=True)
  codigo_insti = models.CharField(max_length=10, null=True)
  dni = models.CharField(max_length=8, null=True)
  celular = models.CharField(max_length=9, null=True)
  tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.CASCADE, null=True)
  documentos = models.ManyToManyField('documentos.Documento', through='prestamos.Prestamo')
  image = models.ImageField(upload_to='users', null=True, blank=True)
  
  # USERNAME_FIELD = 'email' # Campo que se usará para el login
  # REQUIRED_FIELDS = [] # Campos requeridos para el registro

  class Meta:
    db_table = 'usuarios'
