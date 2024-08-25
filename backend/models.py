from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class customUser(AbstractUser):
    username = None
    phone_number = models.CharField(max_length=10, unique=True)
    email = models.EmailField( null=True)


    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []
    objects = UserManager() #-----------------------------> create object
    def __str__(self):
        return self.phone_number
    
class faculty(models.Model):
    name=models.CharField(max_length=100)
    phone_number=models.CharField(max_length=10)
    email=models.EmailField( max_length=254)
    image=models.CharField(max_length=1000)

class notes(models.Model):
    name=models.CharField(max_length=100)
    subject=models.CharField(max_length=100)
    semester=models.IntegerField()
    fileLink=models.CharField(max_length=1000)

class pyqs(models.Model):
    name=models.CharField(max_length=100)
    subject=models.CharField(max_length=100)
    semester=models.IntegerField()
    fileLink=models.CharField(max_length=1000)

class videos(models.Model):
    name=models.CharField(max_length=100)
    subject=models.CharField(max_length=100)
    semester=models.IntegerField()
    fileLink=models.CharField(max_length=1000)