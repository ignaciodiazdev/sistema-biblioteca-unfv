from django.contrib import admin
from actividades.models import Tipo, Estado, Modalidad, Actividad

@admin.register(Tipo)
class TipoAdmin(admin.ModelAdmin):
  pass

@admin.register(Estado)
class EstadoAdmin(admin.ModelAdmin):
  pass

@admin.register(Modalidad)
class ModalidadAdmin(admin.ModelAdmin):
  pass

@admin.register(Actividad)
class ActividadAdmin(admin.ModelAdmin):
  pass