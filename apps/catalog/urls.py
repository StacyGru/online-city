from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from apps.catalog.views import *

router = routers.DefaultRouter()
# router.register('system_units', ProductListViewSet)

urlpatterns = [
    path('system_unit_list', SystemUnitListView.as_view()),
    path('computer_kit_list', ComputerKitListView.as_view()),
    path('monitor_list', MonitorListView.as_view()),
    path('special_offer_list', SpecialOfferListView.as_view()),
]
