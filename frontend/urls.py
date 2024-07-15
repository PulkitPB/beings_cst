from django.urls import path
from .views import *
urlpatterns = [
    path('',base),
    path('home/<str:isLogin>/',index),
    path('faculty/<str:isLogin>/',index),
    path('notes/<str:isLogin>/',index),
    path('ebooks/<str:isLogin>/',index),
    path('videos/<str:isLogin>/',index),
    path('login',index),
    path('register',index),
    path('userregister',userregister,name="userregister"),
    path('userlogin',userlogin,name="userlogin"),
    path('logout',userlogout,name="userlogout")
]