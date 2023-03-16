from django.contrib import admin
from . import models


class DeliveryAddressAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'city', 'street', 'building_number', 'entrance_number', 'floor', 'apartment_number')
    search_fields = ('id', 'client', 'city', 'street', 'building_number', 'entrance_number', 'floor', 'apartment_number')
    filter_fields = ('client', 'city', 'street', 'building_number', 'entrance_number', 'floor', 'apartment_number')


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'order_date_and_time', 'delivery_address', 'delivery_date_and_time', 'sum', 'status')
    search_fields = ('id', 'client', 'order_date_and_time', 'delivery_address', 'delivery_date_and_time', 'sum', 'status')
    filter_fields = ('client', 'order_date_and_time', 'delivery_address', 'delivery_date_and_time', 'sum', 'status')


class BasketItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'product', 'amount')
    search_fields = ('id', 'client', 'product', 'amount')
    filter_fields = ('client', 'product', 'amount')


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'basket_item', 'order')
    search_fields = ('id', 'basket_item', 'order')
    filter_fields = ('basket_item', 'order')


admin.site.register(models.DeliveryAddress, DeliveryAddressAdmin)
admin.site.register(models.Order, OrderAdmin)
admin.site.register(models.BasketItem, BasketItemAdmin)
admin.site.register(models.OrderItem, OrderItemAdmin)
