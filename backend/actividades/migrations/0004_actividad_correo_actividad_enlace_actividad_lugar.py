# Generated by Django 4.2.6 on 2024-01-15 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actividades', '0003_alter_actividad_descripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='actividad',
            name='correo',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='actividad',
            name='enlace',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='actividad',
            name='lugar',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
    ]
