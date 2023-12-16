from django.contrib import admin
from .models import Prestamo

# Register your models here.
@admin.register(Prestamo)

class PrestamoAdmin(admin.ModelAdmin):
  search_fields = ['id', 'usuario__username']
  list_display = ('id', 'usuario', 'documento', 'fecha_prestamo', 'fecha_devolucion', 'estado_prestamo')