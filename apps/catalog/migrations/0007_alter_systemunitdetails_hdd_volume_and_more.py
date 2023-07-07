# Generated by Django 4.1.7 on 2023-06-21 08:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0006_rename_systemunitfilters_systemunitdetails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='systemunitdetails',
            name='hdd_volume',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='catalog.hddvolume'),
        ),
        migrations.AlterField(
            model_name='systemunitdetails',
            name='ssd_volume',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='catalog.ssdvolume'),
        ),
    ]
