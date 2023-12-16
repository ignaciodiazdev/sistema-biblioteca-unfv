from django.contrib import admin
from autores.models import Autor

@admin.register(Autor)
class AutorAdmin(admin.ModelAdmin):
  pass