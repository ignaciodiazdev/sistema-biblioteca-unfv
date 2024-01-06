from django.contrib import admin
from bibliotecas.models import Biblioteca

# Register your models here.
@admin.register(Biblioteca)
class BibliotecaAdmin(admin.ModelAdmin):
  pass