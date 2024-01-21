from django.contrib import admin
from inventarios.models import Inventario

# @admin.register(Inventario)
class InventarioAdmin(admin.ModelAdmin):
  search_fields = ['documento__titulo']
  list_display = ('id', 'documento', 'fecha_adquisicion', 'stock_actual', 'stock_registrado')
  list_filter = ('biblioteca__nombre',)

admin.site.register(Inventario, InventarioAdmin)