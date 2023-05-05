from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers


class SystemUnitListView(APIView):
    def get(self, request):
        products = []
        for product in models.Product.objects.filter(category='системные блоки'):
            serializer = serializers.ProductSerializer(product)
            products.append(serializer.data)
        return Response(products)

    def post(self, request):
        serializer = serializers.ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
