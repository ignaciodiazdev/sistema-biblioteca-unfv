from django.contrib import admin
from facultades.models import Facultad

# Register your models here.
@admin.register(Facultad)
class FacultadAdmin(admin.ModelAdmin):
  pass
