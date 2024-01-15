from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from users.models import User

#<---- Cierre Nuevo ---->
@admin.register(User)
class UserAdmin(BaseUserAdmin):
  list_display = ('id','username', 'dni','first_name', 'last_name', 'codigo_insti', 'is_staff')
  # Agrega este campo para habilitar la búsqueda por nombre de escuela

  # autocomplete_fields = ['escuela']   # Agrega este campo para utilizar una interfaz de búsqueda más eficiente

  fieldsets = (
    (None, {'fields': ('username', 'password')}),
    ('Información personal', 
      {
        'fields': ('first_name', 'last_name', 'dni', 'codigo_insti', 'celular', 'tipo_usuario', 'email', 'image', 'escuela', 'biblioteca')
      }
    ),
    ('Permisos',
      {
        'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
      }
    ),
    ('Fechas importantes',
      {
        'fields': ('last_login', 'date_joined')
      }
    ),
  )