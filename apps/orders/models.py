from django.db import models

from config.settings import AUTH_USER_MODEL
from ..catalog.models import Product


STATUS_CHOICES = [
    ('в обработке', 'в обработке'),
    ('в сборке', 'в сборке'),
    ('в доставке', 'в доставке'),
    ('выполнен', 'выполнен'),
    ('отменён', 'отменён'),
]


class DeliveryAddress(models.Model):
    client = models.ForeignKey(AUTH_USER_MODEL, models.DO_NOTHING)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    building_number = models.CharField(max_length=5)
    entrance_number = models.IntegerField()
    floor = models.IntegerField()
    apartment_number = models.CharField(max_length=5)

    class Meta:
        managed = True
        db_table = 'delivery_address'


class Order(models.Model):
    client = models.ForeignKey(AUTH_USER_MODEL, models.DO_NOTHING)
    order_date_and_time = models.DateTimeField()
    delivery = models.BooleanField(default=False)
    delivery_address = models.ForeignKey(DeliveryAddress, models.DO_NOTHING, null=True)
    delivery_date = models.DateField(null=True)
    delivery_time1 = models.TimeField(null=True)
    delivery_time2 = models.TimeField(null=True)
    sum = models.IntegerField()
    status = models.CharField(choices=STATUS_CHOICES, max_length=150, default='в обработке')

    class Meta:
        managed = True
        db_table = 'order'


class BasketItem(models.Model):
    client = models.ForeignKey(AUTH_USER_MODEL, models.DO_NOTHING)
    product = models.ForeignKey(Product, models.DO_NOTHING)
    amount = models.IntegerField(default=1)

    class Meta:
        managed = True
        db_table = 'basket_item'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, models.DO_NOTHING)
    product = models.ForeignKey(Product, models.DO_NOTHING)
    amount = models.IntegerField(default=1)

    class Meta:
        managed = True
        db_table = 'order_item'
