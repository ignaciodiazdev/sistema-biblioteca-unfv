from django.contrib import admin

# Register your models here.
from .models import Ponente
@admin.register(Ponente)
class PonenteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'correo', 'telefono', 'profesion', 'foto')
    search_fields = ('nombre', 'correo', 'telefono', 'profesion', 'foto')