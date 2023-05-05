from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from apps.catalog.views import *

router = routers.DefaultRouter()
# router.register('system_units', ProductListViewSet)

urlpatterns = [
    path('system_unit', SystemUnitListView.as_view()),
    # path('system_unit', SystemUnitFiltersView.as_view())
]
