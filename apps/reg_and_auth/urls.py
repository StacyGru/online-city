from django.urls import path
from rest_framework import routers
from apps.reg_and_auth.views import *
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView
)

router = routers.DefaultRouter()

urlpatterns = [
    path('user', UserView.as_view()),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify')
]
