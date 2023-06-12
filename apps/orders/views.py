from datetime import datetime
from django.db import transaction
from django.shortcuts import get_object_or_404
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers
from ..reg_and_auth.models import User


class BasketItemView(APIView):
    permission_classes = [permissions.AllowAny]

    # добавление элемента корзины
    def post(self, request):
        basket_item = models.BasketItem.objects.filter(client=request.data['client'], product=request.data['product']).first()
        if basket_item:
            return Response()
        else:
            basket_item = {
                'client': request.data['client'],
                'product': request.data['product']
            }
        serializer = serializers.BasketItemSerializer(data=basket_item)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    # изменение количества товара в корзине
    def patch(self, request, pk):
        basket_item = models.BasketItem.objects.get(id=pk)
        if request.data['message'] == "plus":
            basket_item_serializer = serializers.BasketItemSerializer(basket_item, data={
                'amount': basket_item.amount + 1
            }, partial=True)
        else:
            basket_item_serializer = serializers.OrderItemSerializer(basket_item, data={
                'amount': basket_item.amount - 1
            }, partial=True)
        basket_item_serializer.is_valid(raise_exception=True)
        basket_item_serializer.save()
        return Response(basket_item_serializer.data)

    # удаление элемента корзины
    def delete(self, request, pk):
        basket_item = get_object_or_404(models.BasketItem.objects.all(), id=pk)
        basket_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BasketView(APIView):
    permission_classes = [permissions.AllowAny]

    # получение списка элементов корзины
    def get(self, request, *args, **kwargs):
        basket_items = []
        for basket_item in models.BasketItem.objects.filter(client=self.request.user.id):
            product = basket_item.product
            serializer = {
                "id": basket_item.id,
                "product_id": product.id,
                "name": product.name,
                "short_description": product.short_description,
                "price": product.price,
                "picture": product.picture.url,
                "amount": basket_item.amount
            }
            basket_items.append(serializer)
        return Response(basket_items)


class OrderView(APIView):
    permission_classes = [permissions.AllowAny]

    # добавление заказа
    @transaction.atomic
    def post(self, request):
        global delivery_address_serializer
        if request.data['delivery']:
            delivery_address_serializer = serializers.DeliveryAddressSerializer(data={
                'client': self.request.user.id,
                'city': request.data['city'],
                'street': request.data['street'],
                'building_number': request.data['building_number'],
                'entrance_number': request.data['entrance_number'],
                'floor': request.data['floor'],
                'apartment_number': request.data['apartment_number'],
            })
            delivery_address_serializer.is_valid(raise_exception=True)
            delivery_address_serializer.save()
        order_serializer = serializers.OrderSerializer(data={
            'client': self.request.user.id,
            'order_date_and_time': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            'delivery': request.data['delivery'],
            'delivery_address': delivery_address_serializer.instance.id if request.data['delivery'] else None,
            'delivery_date': request.data['delivery_date'] if request.data['delivery'] else None,
            'delivery_time1': request.data['delivery_time1'] if request.data['delivery'] else None,
            'delivery_time2': request.data['delivery_time2'] if request.data['delivery'] else None,
            'sum': request.data['sum'],
        })
        order_serializer.is_valid(raise_exception=True)
        order_serializer.save()
        for basket_item in request.data['basketItems']:
            order_item_serializer = serializers.OrderItemSerializer(data={
                'order': order_serializer.instance.id,
                'product': basket_item['product_id']
            })
            order_item_serializer.is_valid(raise_exception=True)
            order_item_serializer.save()
            models.BasketItem.objects.get(id=basket_item['id']).delete()
        return Response(order_serializer.data)

    # получение заказа
    def get(self, request, pk, *args, **kwargs):
        order = models.Order.objects.get(id=pk)
        order_items = []
        for order_item in models.OrderItem.objects.filter(order=order.id):
            product = order_item.product
            order_item_serializer = {
                'id': order_item.id,
                'name': product.name,
                'price': product.price,
                'amount': order_item.amount
            }
            order_items.append(order_item_serializer)
        client = User.objects.get(email=order.client)
        if order.delivery:
            delivery_address = models.DeliveryAddress.objects.get(order=order.id)
            delivery_address_serializer = {
                "city": delivery_address.city,
                "street": delivery_address.street,
                "building_number": delivery_address.building_number,
                "entrance_number": delivery_address.entrance_number,
                "floor": delivery_address.floor,
                "apartment_number": delivery_address.apartment_number,
            }
            order_serializer = {
                "id": order.id,
                "client": client.name + " " + client.surname,
                "phone": client.phone,
                "order_date_and_time": order.order_date_and_time.strftime("%d.%m.%Y %H:%M"),
                "order_items": order_items,
                "sum": order.sum,
                "delivery": order.delivery,
                "delivery_address": delivery_address_serializer,
                "delivery_date": order.delivery_date,
                "delivery_time1": order.delivery_time1,
                "delivery_time2": order.delivery_time2,
                "status": order.status,
            }
        else:
            order_serializer = {
                "id": order.id,
                "client": client.name + " " + client.surname,
                "phone": client.phone,
                "order_date_and_time": order.order_date_and_time.strftime("%d.%m.%Y %H:%M"),
                "order_items": order_items,
                "sum": order.sum,
                "delivery": order.delivery,
                "status": order.status,
            }
        return Response(order_serializer)

    # редактирование заказа
    @transaction.atomic
    def patch(self, request, pk):
        order = models.Order.objects.get(id=pk)
        if request.data['delivery']:
            delivery_address = models.DeliveryAddress.objects.get(order=order.id)
            delivery_address_serializer = serializers.DeliveryAddressSerializer(delivery_address, data=request.data, partial=True)
            delivery_address_serializer.is_valid(raise_exception=True)
            delivery_address_serializer.save()
        order_serializer = serializers.OrderSerializer(order, data=request.data, partial=True)
        order_serializer.is_valid(raise_exception=True)
        order_serializer.save()
        return Response(order_serializer.data)


class OrderListView(APIView):
    permission_classes = [permissions.AllowAny]

    # получение списка заказов
    def get(self, request, *args, **kwargs):
        orders = []
        if self.request.user.role == "клиент":
            for order in models.Order.objects.filter(client=self.request.user.id):
                order_items = []
                for order_item in models.OrderItem.objects.filter(order=order.id):
                    product = order_item.product
                    order_item_serializer = {
                        'name': product.name,
                        'price': product.price,
                        'amount': order_item.amount
                    }
                    order_items.append(order_item_serializer)
                order_serializer = {
                    "id": order.id,
                    "order_date_and_time": order.order_date_and_time.strftime("%d.%m.%Y %H:%M"),
                    "order_items": order_items,
                    "sum": order.sum,
                    "delivery": order.delivery,
                    "status": order.status,
                }
                orders.append(order_serializer)
        else:
            for order in models.Order.objects.all():
                order_items = []
                for order_item in models.OrderItem.objects.filter(order=order.id):
                    product = order_item.product
                    order_item_serializer = {
                        'name': product.name,
                        'price': product.price,
                        'amount': order_item.amount
                    }
                    order_items.append(order_item_serializer)
                client = User.objects.get(email=order.client)
                order_serializer = {
                    "id": order.id,
                    "client": client.name + " " + client.surname,
                    "order_date_and_time": order.order_date_and_time.strftime("%d.%m.%Y %H:%M"),
                    "order_items": order_items,
                    "sum": order.sum,
                    "delivery": order.delivery,
                    "status": order.status,
                }
                orders.append(order_serializer)
        return Response(orders)


class OrderItemView(APIView):
    permission_classes = [permissions.AllowAny]

    # удаление позиции из заказа
    def delete(self, request, pk):
        sum = 0
        order_item = get_object_or_404(models.OrderItem.objects.all(), id=pk)
        order_item.delete()
        order = order_item.order
        order_items = models.OrderItem.objects.filter(order=order.id)
        for order_item in order_items:
            product = order_item.product
            sum += product.price * order_item.amount
        order_serializer = serializers.OrderSerializer(order, data={
            'sum': sum
        }, partial=True)
        order_serializer.is_valid(raise_exception=True)
        order_serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # изменение количества товара в позиции
    def patch(self, request, pk):
        order_item = models.OrderItem.objects.get(id=pk)
        if request.data['message'] == "plus":
            order_item_serializer = serializers.OrderItemSerializer(order_item, data={
                'amount': order_item.amount + 1
            }, partial=True)
        else:
            order_item_serializer = serializers.OrderItemSerializer(order_item, data={
                'amount': order_item.amount - 1
            }, partial=True)
        order_item_serializer.is_valid(raise_exception=True)
        order_item_serializer.save()
        return Response(order_item_serializer.data)
