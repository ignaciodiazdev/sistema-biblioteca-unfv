from django.contrib import admin
from tipos_usuarios.models  import TipoUsuario

# Register your models here.
@admin.register(TipoUsuario)
class TipoUsuarioAdmin(admin.ModelAdmin):
  pass