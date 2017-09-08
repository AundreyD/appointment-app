from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, response, permissions
from .serializers import AppointmentSerializer, UserSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Appointment
from django.contrib.auth.models import User


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer