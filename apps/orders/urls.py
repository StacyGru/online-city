from django.urls import path, include
from rest_framework import routers
from apps.orders.views import *

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('basket', BasketView.as_view()),
    path('basket/<int:pk>/', BasketView.as_view()),
    path('basket_list', BasketListView.as_view()),
    path('order', OrderView.as_view()),
    path('order/<int:pk>/', OrderView.as_view()),
    path('order_list', OrderListView.as_view()),
    path('order_item/<int:pk>/', OrderItemView.as_view()),
]
