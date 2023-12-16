from django.contrib import admin
from idiomas.models import Idioma

# Register your models here.
@admin.register(Idioma)
class IdiomaAdmin(admin.ModelAdmin):
  pass