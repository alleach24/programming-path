# Generated by Django 4.1.4 on 2022-12-19 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_task_description_alter_task_frequency_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.TextField(default='description'),
        ),
    ]