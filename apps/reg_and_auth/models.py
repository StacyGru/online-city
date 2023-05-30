from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import UserManager

ROLE_CHOICES = [
    ('клиент', 'клиент'),
    ('администратор магазина', 'администратор магазина'),
    ('администратор сайта', 'администратор сайта'),
]


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length=50, blank=True, null=True)
    surname = models.CharField(max_length=50, blank=True, null=True)
    phone = models.IntegerField(blank=True, null=True)
    role = models.CharField(choices=ROLE_CHOICES, max_length=150, blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    # def __str__(self):
    #     return self.user_id
