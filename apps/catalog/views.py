from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers
from ..orders import models


class SystemUnitsListView(APIView):
    def get(self, request):
        products = []
        for product in models.Product.objects.filter(category='системные блоки'):
            serializer = serializers.ProductSerializer(product)
            new_serializer_data = serializer.data
            print("PRINT", new_serializer_data)
            basket_item = models.BasketItem.objects.filter(client=self.request.user.id, product=product).first()
            if basket_item:
                new_serializer_data['basket_amount'] = basket_item.amount
            products.append(new_serializer_data)
        return Response(products)

    def post(self, request):
        serializer = serializers.ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class ComputerKitsListView(APIView):
    def get(self, request):
        products = []
        for product in models.Product.objects.filter(category='компьютеры в комплекте'):
            serializer = serializers.ProductSerializer(product)
            products.append(serializer.data)
        return Response(products)

    def post(self, request):
        serializer = serializers.ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class MonitorsListView(APIView):
    def get(self, request):
        products = []
        for product in models.Product.objects.filter(category='мониторы'):
            serializer = serializers.ProductSerializer(product)
            products.append(serializer.data)
        return Response(products)

    def post(self, request):
        serializer = serializers.ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class SpecialOffersView(APIView):
    def get(self, request):
        products = []
        for product in models.Product.objects.filter(category='спецпредложения'):
            serializer = serializers.ProductSerializer(product)
            products.append(serializer.data)
        return Response(products)

    def post(self, request):
        serializer = serializers.ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)