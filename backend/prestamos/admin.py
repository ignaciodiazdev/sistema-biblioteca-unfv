from django.contrib import admin
from .models import Prestamo

class PrestamoAdmin(admin.ModelAdmin):
  search_fields = ['id']
  list_display = ('id', 'usuario', 'fecha_reserva', 'fecha_recojo', 'fecha_devolucion','estado_prestamo')
  list_filter = ('inventario__biblioteca', 'estado_prestamo')  # Filtra por biblioteca

admin.site.register(Prestamo, PrestamoAdmin)