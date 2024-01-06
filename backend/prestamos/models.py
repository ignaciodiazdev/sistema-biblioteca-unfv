from django.db import models
from users.models import User
from documentos.models import Documento
from inventarios.models import Inventario
# Create your models here.
class Prestamo(models.Model):
    ESTADO_CHOICES = [
        ('RESERVADO', 'Reservado'),
        ('PRESTADO', 'Prestado'),
        ('DEVUELTO', 'Devuelto'),
    ]

    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_reserva = models.DateField(null=True)
    fecha_recojo = models.DateField(null=True)
    fecha_devolucion = models.DateField(null=True)
    fecha_devolucion_confirmada = models.DateField(null=True)
    estado_prestamo = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='RESERVADO')
    inventario = models.ManyToManyField(Inventario)
    
    class Meta:
        db_table = 'prestamos'

    def __str__(self):
        return f"{self.usuario} - {self.estado_prestamo}"