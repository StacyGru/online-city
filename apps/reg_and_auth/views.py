from django.contrib.auth import get_user_model
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from . import serializers, models
from rest_framework.views import APIView
import jwt
from .serializers import MyTokenObtainPairSerializer


class UserView(APIView):
    queryset = get_user_model().objects.all()
    serializer_class = serializers.UserSerializer

    # регистрация клиента
    def post(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
