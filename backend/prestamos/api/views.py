from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from prestamos.models import Prestamo
from prestamos.api.serializers import PrestamoSerializer

from django.shortcuts import get_object_or_404
from django.db import transaction
from rest_framework.response import Response
from inventarios.models import Inventario
import logging

class PrestamoViewSet(viewsets.ModelViewSet):
  perrmission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = PrestamoSerializer
  queryset = Prestamo.objects.all()
  filter_backends = [DjangoFilterBackend, OrderingFilter]
  filterset_fields = ['usuario', 'estado_prestamo']
  ordering_fields = ['id']
  ordering = ['-id']

# Código para modificar el valor stock_actual de un registro del modelo inventario, cuando se crea un prestamo nuevo, se resta 1, suponiendo que el campo inventario es de tipo many to many
  def create(self, request, *args, **kwargs):
    with transaction.atomic():
      try:
        usuario = request.user
        # Verificar si el usuario tiene préstamos en estado 'Reserva' o 'Prestado'
        prestamos_pendientes = Prestamo.objects.filter(usuario=usuario, estado_prestamo__in=['RESERVADO', 'PRESTADO'])
        if prestamos_pendientes.exists():
            return Response({'detail': 'No puedes realizar más reservas. Tienes préstamos en estado de "Reservado" o "Prestado".'}, status=status.HTTP_400_BAD_REQUEST)
        
        inventarios_ids = request.data['inventario']
        inventarios = Inventario.objects.filter(pk__in=inventarios_ids)
        for inventario in inventarios:
          if inventario.stock_actual > 0:
              inventario.stock_actual -= 1
              inventario.save()
          else:
              return Response({'detail': 'El documento ' + inventario.documento.titulo + ' no se encuentra disponible en estos momentos.'}, status=status.HTTP_400_BAD_REQUEST)
        return super().create(request, *args, **kwargs)
      except Exception as e:
        logging.error(e)
        return Response({'detail': 'No se pudo crear el prestamo'}, status=status.HTTP_400_BAD_REQUEST)