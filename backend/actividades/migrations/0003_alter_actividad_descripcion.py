# Generated by Django 4.2.6 on 2024-01-15 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actividades', '0002_actividad_ponente_alter_actividad_descripcion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='actividad',
            name='descripcion',
            field=models.TextField(max_length=500),
        ),
    ]
