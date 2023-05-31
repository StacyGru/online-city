from django.urls import path, include
from rest_framework import routers
from apps.orders.views import *

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('basket_items', BasketItemsView.as_view()),
    path('delete_basket_item/<int:pk>/', BasketItemsView.as_view()),
    path('orders', OrderView.as_view()),
]
