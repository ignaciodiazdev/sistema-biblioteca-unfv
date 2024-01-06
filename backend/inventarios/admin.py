from django.contrib import admin
from inventarios.models import Inventario

# Register your models here.
@admin.register(Inventario)
class InventarioAdmin(admin.ModelAdmin):
  list_display = ('id', 'biblioteca', 'documento', 'fecha_adquisicion', 'stock_actual', 'stock_registrado')