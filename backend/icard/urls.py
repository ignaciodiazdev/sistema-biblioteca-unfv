"""
URL configuration for icard project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # Para agregar las MEDIA a URLS
from django.conf.urls.static import static  # Para agregar las MEDIA a URLS

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from users.api.router import router_user
from autores.api.router import router_autores
from documentos.api.router import router_tipo
from idiomas.api.router import router_idioma
from tipos_usuarios.api.router import router_tipo_usuario
from prestamos.api.router import router_prestamo
from facultades.api.router import router_facultades
from escuelas.api.router import router_escuelas
from bibliotecas.api.router import router_bibliotecas
from inventarios.api.router import router_inventarios
from ponentes.api.router import router_ponentes
from actividades.api.router import router_actividad

schema_view = get_schema_view(
    openapi.Info(
        title="icard - ApiDoc",
        default_version='v1',
        description="Documentación de la Api de icard",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="ignaciodiazbr@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),
    path('api/', include('users.api.router')),
    path('api/', include(router_user.urls)),
    path('api/', include(router_autores.urls)),
    path('api/', include(router_tipo.urls)),
    path('api/', include(router_idioma.urls)),
    path('api/', include(router_tipo_usuario.urls)),
    path('api/', include(router_prestamo.urls)),
    path('api/', include(router_facultades.urls)),
    path('api/', include(router_escuelas.urls)),
    path('api/', include(router_bibliotecas.urls)),
    path('api/', include(router_inventarios.urls)),
    path('api/', include(router_ponentes.urls)),
    path('api/', include(router_actividad.urls)),
]

# Agregamos las MEDIA a URLS
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
