from django.urls import path
from rest_framework import routers
from apps.catalog.views import *

router = routers.DefaultRouter()

urlpatterns = [
    path('products/<str:pk>/', ProductListView.as_view()),
    path('product/<int:pk>/', ProductView.as_view()),
    path('amount_of_ram_list', AmountOfRAMListView.as_view()),
    path('processor_series_list', ProcessorSeriesListView.as_view()),
    path('video_card_list', VideoCardListView.as_view()),
    path('manufacturer_list', ManufacturerListView.as_view()),
    path('screen_resolution_list', ScreenResolutionListView.as_view()),
    path('matrix_type_list', MatrixTypeListView.as_view()),
    path('frame_color_list', FrameColorListView.as_view()),
    path('wall_mount_list', WallMountListView.as_view()),
    path('aspect_ratio_list', AspectRatioListView.as_view()),
]
