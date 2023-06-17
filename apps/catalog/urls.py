from django.urls import path
from rest_framework import routers
from apps.catalog.views import *

router = routers.DefaultRouter()

urlpatterns = [
    path('products/<str:pk>/', ProductListView.as_view()),
]
