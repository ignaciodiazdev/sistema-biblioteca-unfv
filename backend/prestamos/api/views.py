from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from prestamos.models import Prestamo
from prestamos.api.serializers import PrestamoSerializer

from django.shortcuts import get_object_or_404
from django.db import transaction
from rest_framework.response import Response
from documentos.models import Documento
import logging

class PrestamoViewSet(viewsets.ModelViewSet):
  perrmission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = PrestamoSerializer
  queryset = Prestamo.objects.all()
  filter_backends = [DjangoFilterBackend, OrderingFilter]
  filterset_fields = ['usuario', 'estado_prestamo']
  ordering_fields = ['fecha_reserva']
  ordering = ['-fecha_reserva'] 

  # def create(self, request, *args, **kwargs):
  #     # Imprimir el valor de 'request.data'
  #     print("Valor de 'request.data':", request.data)

  #     # Tu lógica aquí
  #     return super().create(request, *args, **kwargs)


# <------------------------------ INICIO --------------------------------------->
  # (ORIGINAL) Código para modificar el valor cantidad de un documento, cuando se crea un prestamo nuevo, se resta 1 y cuando el estado del prestamo es devuelto, se suma 1
  # def create(self, request, *args, **kwargs):
  #   with transaction.atomic():
  #     try:
  #       documento = Documento.objects.get(pk=request.data['documento'])
  #       print("Cantidad de documentos antes: ", documento.cantidad)

  #       if documento.cantidad > 0:
  #         documento.cantidad -= 1
  #         documento.save()
  #         print("Cantidad de documentos despues: ", documento.cantidad)
          
  #         return super().create(request, *args, **kwargs)
  #       else:
  #         return Response({'detail': 'El documento ' + documento.titulo + ' no se encuentra disponible en estos momentos.'}, status=status.HTTP_400_BAD_REQUEST)
  #     except Exception as e:
  #       logging.error(e)
  #       return Response({'detail': 'No se pudo crear el prestamo'}, status=status.HTTP_400_BAD_REQUEST)
# <------------------------------- FIN ------------------------------------------------>
  
# <--------------------------------- INICIO ------------------------------------------->
  #(ORIGINAL)Código para aumentar la cantidad de documentos cuando el estado del prestamo es devuelto.
  # def update(self, request, *args, **kwargs):
  #   try:
  #       prestamo = Prestamo.objects.get(pk=kwargs['pk'])
  #       documento = Documento.objects.get(pk=prestamo.documento.pk)
  #       print("Cantidad de documentos antes: ", documento.cantidad)
  #       print("Datos de la solicitud:", request.data)


  #       if prestamo.estado_prestamo != "DEVUELTO" and request.data['estado_prestamo'] == "DEVUELTO":
  #           documento.cantidad += 1
  #           documento.save()
  #           print("Cantidad de documentos despues: ", documento.cantidad)

  #   except Prestamo.DoesNotExist:
  #       return Response({'error': 'Prestamo no encontrado'}, status=status.HTTP_404_NOT_FOUND)

  #   except Documento.DoesNotExist:
  #       return Response({'error': 'Documento no encontrado'}, status=status.HTTP_404_NOT_FOUND)

  #   return super().update(request, *args, **kwargs)
# <------------------------------------- FIN ------------------------------------------------>
  

# <----------------------------- OTROS CÓDIGOS BUENOS ------------------------------------->
  # Código para modificar el valor cantidad de un documento, cuando se crea un prestamo nuevo, se resta 1, suponiendo que el campo documento es de tipo many to many
  
  # def create(self, request, *args, **kwargs):
  #   with transaction.atomic():
  #     try:
  #       documentos_ids = request.data['documentos']
  #       print("Valor de 'request.data':", request.data)
  #       print("Valor de 'documentos_ids':", documentos_ids)
  #       documentos = Documento.objects.filter(pk__in=documentos_ids)
  #       print("Valor de 'documentos':", documentos)
  #       for documento in documentos:
  #         print("Titulo del documento: ", documento.titulo)
  #         print("Cantidad de documentos antes: ", documento.cantidad)
  #         if documento.cantidad > 0:
  #             documento.cantidad -= 1
  #             documento.save()
  #             print("Cantidad de documentos despues: ", documento.cantidad)
  #         else:
  #             return Response({'detail': 'El documento ' + documento.titulo + ' no se encuentra disponible en estos momentos.'}, status=status.HTTP_400_BAD_REQUEST)
  #       return super().create(request, *args, **kwargs)
  #     except Exception as e:
  #       logging.error(e)
  #       return Response({'detail': 'No se pudo crear el prestamo'}, status=status.HTTP_400_BAD_REQUEST)

 #Código para aumentar la cantidad de documentos cuando el estado del prestamo es devuelto suponiendo que el campo documento es de tipo many to many
  # def update(self, request, *args, **kwargs):
  #   try:
  #     prestamo = Prestamo.objects.get(pk=kwargs['pk'])
  #     documentos_ids = request.data['documentos']
  #     documentos = Documento.objects.filter(pk__in=documentos_ids)
  #     print("Valor de 'documentos':", documentos)
  #     for documento in documentos:
  #       print("Titulo del documento: ", documento.titulo)
  #       print("Cantidad de documentos antes: ", documento.cantidad)
  #       if prestamo.estado_prestamo == 'DEVUELTO' and request.data['estado_prestamo'] != 'DEVUELTO':
  #           documento.cantidad += 1
  #           documento.save()
  #           print("Cantidad de documentos despues: ", documento.cantidad)
  #   except Prestamo.DoesNotExist:
  #     # Manejar la excepción cuando no se encuentra el Prestamo
  #     return Response({'error': 'Prestamo no encontrado'}, status=status.HTTP_404_NOT_FOUND)
  #   except Documento.DoesNotExist:
  #     # Manejar la excepción cuando no se encuentra el Documento
  #     return Response({'error': 'Documento no encontrado'}, status=status.HTTP_404_NOT_FOUND)
  #   return super().update(request, *args, **kwargs)
# <--------------------------------------------------------------------------------------->