import uuid
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_http_methods
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.tokens import AccessToken
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
                'product': request.data['product'],
                'amount': 1
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
                "amount": basket_item.amount,
            }
            basket_items.append(serializer)
        return Response(basket_items)

    def delete(self, request, pk):
        basket_item = get_object_or_404(models.BasketItem.objects.all(), id=pk)
        basket_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
