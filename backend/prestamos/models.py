from django.db import models
from datetime import timedelta, date
from users.models import User
from inventarios.models import Inventario

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
    fecha_devolucion_confirmada = models.DateField(null=True, blank=True)
    estado_prestamo = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='RESERVADO')
    inventario = models.ManyToManyField(Inventario)
    
    class Meta:
        db_table = 'prestamos'

    def __str__(self):
        return f"{self.usuario} - {self.estado_prestamo}"
    
    def save(self, *args, **kwargs):
        if self.estado_prestamo == 'DEVUELTO' and self.fecha_devolucion_confirmada:
            # Verificar si la fecha de devolución confirmada es mayor a la fecha de devolución
            if self.fecha_devolucion_confirmada > self.fecha_devolucion:
                # Calcular la diferencia de días
                dias_multa = (self.fecha_devolucion_confirmada - self.fecha_devolucion).days

                # Desactivar la cuenta del usuario por cierta cantidad de días
                self.usuario.is_active = False
                self.usuario.save()

                # Configurar la fecha de activación después de la multa
                self.fecha_activacion_despues_multa = date.today() + timedelta(days=dias_multa)
            else:
                # Si la fecha de devolución confirmada es menor o igual a la fecha de devolución, activar la cuenta
                self.usuario.is_active = True
                self.usuario.save()

        super().save(*args, **kwargs)