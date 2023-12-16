from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from users.models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
  list_display = ('username', 'dni','first_name', 'last_name', 'codigo_insti', 'is_staff')
  fieldsets = (
    (None, {'fields': ('username', 'password')}),
    ('Información personal', 
      {
        'fields': ('first_name', 'last_name', 'dni', 'codigo_insti', 'celular', 'tipo_usuario', 'email', 'image')
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
