# Generated by Django 4.2.6 on 2024-01-15 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actividades', '0006_alter_actividad_lugar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='actividad',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
    ]
