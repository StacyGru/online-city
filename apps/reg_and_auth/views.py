from django.contrib.auth import get_user_model
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from . import serializers, models
from rest_framework.views import APIView
import jwt
from .serializers import MyTokenObtainPairSerializer


class RegistrationView(APIView):
    queryset = get_user_model().objects.all()
    serializer_class = serializers.UserSerializer

    def get(self, request):
        users = []
        for user in get_user_model().objects.all():
            serializer = serializers.UserSerializer(user)
            users.append(serializer.data)
        return Response(users)

    def post(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        print(token)

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = get_user_model().objects.filter(id=payload['id']).first()

        serializer = serializers.UserSerializer(user)

        return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
