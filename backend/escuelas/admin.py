from django.contrib import admin
from escuelas.models import Escuela

# Register your models here.
@admin.register(Escuela)
class EscuelaAdmin(admin.ModelAdmin):
  pass