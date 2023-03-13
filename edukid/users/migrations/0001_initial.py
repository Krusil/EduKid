# Generated by Django 4.1.4 on 2023-01-13 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('name', models.CharField(max_length=20, verbose_name='Имя')),
                ('surname', models.CharField(max_length=40, verbose_name='Фамилия')),
                ('father_name', models.CharField(max_length=30, verbose_name='Отчество')),
                ('type_of_user', models.CharField(max_length=8, verbose_name='Роль')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
