# Generated by Django 4.2.6 on 2024-01-15 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actividades', '0004_actividad_correo_actividad_enlace_actividad_lugar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='actividad',
            name='correo',
            field=models.CharField(default='bibliocent@unfv.edu.pe', max_length=60),
        ),
        migrations.AlterField(
            model_name='actividad',
            name='lugar',
            field=models.CharField(default='No indicado', max_length=60),
        ),
    ]