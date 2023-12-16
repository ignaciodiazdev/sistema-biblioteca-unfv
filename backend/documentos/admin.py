from django.contrib import admin
from documentos.models import Tipo, Documento

# Register your models here.
@admin.register(Tipo)
class TipoAdmin(admin.ModelAdmin):
  pass

@admin.register(Documento)
class DocumentoAdmin(admin.ModelAdmin):
  pass