from django.db import models

ROLE_CHOICES = [
    ('клиент', 'клиент'),
    ('администратор магазина', 'администратор магазина'),
    ('администратор сайта', 'администратор сайта'),
]


class User(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    phone = models.IntegerField(max_length=15)
    email = models.CharField(max_length=150)
    role = models.CharField(choices=ROLE_CHOICES)
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'user'

    def __str__(self):
        return self.surname
