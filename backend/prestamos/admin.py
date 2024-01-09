from django.contrib import admin
from .models import Prestamo

class PrestamoAdmin(admin.ModelAdmin):
  search_fields = ['id']
  list_display = ('id', 'usuario', 'fecha_reserva', 'fecha_recojo', 'fecha_devolucion','estado_prestamo')
  list_filter = ('inventario__biblioteca', 'estado_prestamo')  # Filtra por biblioteca

  # def inventario_list(self, obj):
  #   return ", ".join([str(inventario) for inventario in obj.inventario.all()])
  # inventario_list.short_description = 'Inventario'

admin.site.register(Prestamo, PrestamoAdmin)


# Register your models here.
# @admin.register(Prestamo)

# class PrestamoAdmin(admin.ModelAdmin):
#   search_fields = ['id', 'usuario__username']
#   list_display = ('id', 'usuario', 'fecha_reserva', 'fecha_recojo', 'fecha_devolucion','estado_prestamo')