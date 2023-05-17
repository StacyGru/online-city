from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from apps.catalog.views import *

router = routers.DefaultRouter()
# router.register('system_units', ProductListViewSet)

urlpatterns = [
    path('system_units', SystemUnitsListView.as_view()),
    path('computer_kits', ComputerKitsListView.as_view()),
    path('monitors', MonitorsListView.as_view()),
    path('special_offers', SpecialOffersView.as_view()),
]
