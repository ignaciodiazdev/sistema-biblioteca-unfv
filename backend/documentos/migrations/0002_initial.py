# Generated by Django 4.2.6 on 2023-12-18 09:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('documentos', '0001_initial'),
        ('inventarios', '0001_initial'),
        ('idiomas', '0001_initial'),
        ('bibliotecas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='documento',
            name='biblioteca',
            field=models.ManyToManyField(through='inventarios.Inventario', to='bibliotecas.biblioteca'),
        ),
        migrations.AddField(
            model_name='documento',
            name='idioma',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='idiomas.idioma'),
        ),
        migrations.AddField(
            model_name='documento',
            name='tipo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='documentos.tipo'),
        ),
    ]
