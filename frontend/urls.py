from django.urls import path
from .views import *
urlpatterns = [
    path('',index),
    path('home/',index),
    path('home/<isLogin>',index),
    path('login',userlogin,name="userlogin"),
    path('userregister',userregister,name="userregister")
]