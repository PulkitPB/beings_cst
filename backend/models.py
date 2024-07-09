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