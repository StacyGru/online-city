from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers
from ..orders.models import Product, BasketItem


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
        if pk == "main_page":
            main_page = []
            product = Product.objects.filter(category="системные блоки").first()
            main_page.append(product)
            product = Product.objects.filter(category="компьютеры в комплекте").first()
            main_page.append(product)
            product = Product.objects.filter(category="мониторы").first()
            main_page.append(product)
            product = Product.objects.filter(category="спецпредложения").first()
            main_page.append(product)
            for product in main_page:
                serializer = serializers.ProductSerializer(product)
                new_serializer_data = serializer.data
                basket_item = BasketItem.objects.filter(client=self.request.user.id, product=product).first()
                if basket_item:
                    new_serializer_data['basket_amount'] = basket_item.amount
                products.append(new_serializer_data)
            return Response(products)
        else:
            for product in Product.objects.filter(category=category).order_by('price'):
                # if (product.id != 5) & (product.id != 20):
                # if (product.id == 11) | (product.id == 12) | (product.id == 14) | (product.id == 16) | (product.id == 18):
                serializer = serializers.ProductSerializer(product)
                new_serializer_data = serializer.data
                basket_item = BasketItem.objects.filter(client=self.request.user.id, product=product).first()
                if basket_item:
                    new_serializer_data['basket_amount'] = basket_item.amount
                products.append(new_serializer_data)
        return Response(products)


class ProductView(APIView):
    def get(self, request, pk, *args, **kwargs):
        details_serializer = ""
        product = Product.objects.get(id=pk)
        serializer = serializers.ProductSerializer(product)
        if product.system_unit:
            details_serializer = serializers.SystemUnitDetailsSerializer(product.system_unit).data
        if product.monitor:
            details_serializer = serializers.MonitorDetailsSerializer(product.monitor)
        response = {
            "product": serializer.data,
            "details": details_serializer
        }
        return Response(response)


class AmountOfRAMListView(APIView):
    def get(self, request):
        list = []
        for item in models.AmountOfRAM.objects.all():
            serializer = serializers.AmountOfRAMSerializer(item)
            list.append(serializer.data)
        return Response(list)


class ProcessorSeriesListView(APIView):
    def get(self, request):
        list = []
        for item in models.ProcessorSeries.objects.all():
            serializer = serializers.ProcessorSeriesSerializer(item)
            list.append(serializer.data)
        return Response(list)


class VideoCardListView(APIView):
    def get(self, request):
        list = []
        for item in models.VideoCard.objects.all():
            serializer = serializers.VideoCardSerializer(item)
            list.append(serializer.data)
        return Response(list)


class ManufacturerListView(APIView):
    def get(self, request):
        list = []
        for item in models.Manufacturer.objects.all():
            serializer = serializers.ManufacturerSerializer(item)
            list.append(serializer.data)
        return Response(list)


class ScreenResolutionListView(APIView):
    def get(self, request):
        list = []
        for item in models.ScreenResolution.objects.all():
            serializer = serializers.ScreenResolutionSerializer(item)
            list.append(serializer.data)
        return Response(list)


class MatrixTypeListView(APIView):
    def get(self, request):
        list = []
        for item in models.MatrixType.objects.all():
            serializer = serializers.MatrixTypeSerializer(item)
            list.append(serializer.data)
        return Response(list)


class FrameColorListView(APIView):
    def get(self, request):
        list = []
        for item in models.FrameColor.objects.all():
            serializer = serializers.FrameColorSerializer(item)
            list.append(serializer.data)
        return Response(list)


class WallMountListView(APIView):
    def get(self, request):
        list = []
        for item in models.WallMount.objects.all():
            serializer = serializers.WallMountSerializer(item)
            list.append(serializer.data)
        return Response(list)


class AspectRatioListView(APIView):
    def get(self, request):
        list = []
        for item in models.AspectRatio.objects.all():
            serializer = serializers.AspectRatioSerializer(item)
            list.append(serializer.data)
        return Response(list)
