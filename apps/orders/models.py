from django.db import models
from ..reg_and_auth.models import User
from ..catalog.models import Product


STATUS_CHOICES = [
    ('в обработке', 'в обработке'),
    ('в сборке', 'в сборке'),
    ('в доставке', 'в доставке'),
    ('выполнен', 'выполнен'),
    ('отменён', 'отменён'),
]


class DeliveryAddress(models.Model):
    client = models.ForeignKey(User, models.DO_NOTHING)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    building_number = models.CharField(max_length=5)
    entrance_number = models.IntegerField()
    floor = models.IntegerField()
    apartment_number = models.CharField(max_length=5)

    class Meta:
        managed = True
        db_table = 'delivery_address'

    def __str__(self):
        return str(self.id)


class Order(models.Model):
    client = models.ForeignKey(User, models.DO_NOTHING)
    order_date_and_time = models.DateTimeField()
    delivery_address = models.ForeignKey(DeliveryAddress, models.DO_NOTHING)
    delivery_date_and_time = models.DateTimeField()
    sum = models.IntegerField()
    status = models.CharField(choices=STATUS_CHOICES, max_length=150)

    class Meta:
        managed = True
        db_table = 'order'

    def __str__(self):
        return str(self.id)


class BasketItem(models.Model):
    client = models.ForeignKey(User, models.DO_NOTHING)
    product = models.ForeignKey(Product, models.DO_NOTHING)
    amount = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'basket_item'

    def __str__(self):
        return str(self.id)


class OrderItem(models.Model):
    basket_item = models.ForeignKey(BasketItem, models.DO_NOTHING)
    order = models.ForeignKey(Order, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'order_item'

    def __str__(self):
        return str(self.id)
