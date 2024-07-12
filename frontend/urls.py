from django.urls import path
from .views import *
urlpatterns = [
    path('',index),
    # path('home/',index),
    path('home/<str:isLogin>/',index),
    path('login',index),
    path('register',index),
    path('userregister',userregister,name="userregister"),
    path('userlogin',userlogin,name="userlogin"),
    path('logout',userlogout,name="userlogout")
]