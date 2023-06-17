from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers
from ..orders import models


class ProductListView(APIView):
    def get(self, request, pk, *args, **kwargs):
        products = []
        category = ""
        if pk == "system_unit_list":
            category = "системные блоки"
        elif pk == "computer_kit_list":
            category = "компьютеры в комплекте"
        elif pk == "monitor_list":
            category = "мониторы"
        elif pk == "special_offer_list":
            category = "спецпредложения"
        for product in models.Product.objects.filter(category=category):
            serializer = serializers.ProductSerializer(product)
            new_serializer_data = serializer.data
            basket_item = models.BasketItem.objects.filter(client=self.request.user.id, product=product).first()
            if basket_item:
                new_serializer_data['basket_amount'] = basket_item.amount
            products.append(new_serializer_data)
        return Response(products)
