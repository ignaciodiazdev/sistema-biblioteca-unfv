from django.db import models
from users.models import User
from documentos.models import Documento

# Create your models here.
class Prestamo(models.Model):
    ESTADO_CHOICES = [
        ('RESERVADO', 'Reservado'),
        ('PRESTADO', 'Prestado'),
        ('DEVUELTO', 'Devuelto'),
    ]

    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    documento = models.ForeignKey(Documento, on_delete=models.CASCADE)
    fecha_prestamo = models.DateField(auto_now_add=True)
    fecha_devolucion = models.DateField(null=True)
    estado_prestamo = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='RESERVADO')
    
    class Meta:
        db_table = 'prestamos'

    def __str__(self):
        return f"{self.usuario} - {self.documento} - {self.estado_prestamo}"