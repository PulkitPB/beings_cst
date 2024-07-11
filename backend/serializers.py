# serializers.py
from .models import customUser
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = customUser
        fields = ('email', 'phone_number')
