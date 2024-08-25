# serializers.py
from .models import *
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = customUser
        fields = ('email', 'phone_number')

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = faculty
        fields = ('name','phone_number','email','image')

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = notes
        fields=('name','subject','semester','fileLink')

class PYQsSerializer(serializers.ModelSerializer):
    class Meta:
        model = pyqs
        fields=('name','subject','semester','fileLink')

class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = videos
        fields=('name','subject','semester','fileLink')