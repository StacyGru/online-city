from datetime import datetime
from django.db import transaction
from django.shortcuts import get_object_or_404
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers


class BasketItemsView(APIView):
    permission_classes = [permissions.AllowAny]

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

    def delete(self, request, pk):
        basket_item = get_object_or_404(models.BasketItem.objects.all(), id=pk)
        basket_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class OrderView(APIView):
    permission_classes = [permissions.AllowAny]

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
        order_serializer.save()
        return Response(order_serializer.data)

    def get(self, request, *args, **kwargs):
        orders = []
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
            serializer = {
                "id": order.id,
                "order_date_and_time": order.order_date_and_time.strftime("%d.%m.%Y %H:%M"),
                "order_items": order_items,
                "sum": order.sum,
                "delivery": order.delivery,
                "status": order.status,
            }
            orders.append(serializer)
        return Response(orders)
