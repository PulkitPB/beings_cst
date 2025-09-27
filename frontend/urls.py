from django.urls import path
from .views import *
urlpatterns = [
    path('',base),
    path('home/<str:isLogin>/',index),
    path('faculty/<str:isLogin>/',index),
    path('notes/<str:isLogin>/',index),
    path('pyqs/<str:isLogin>/',index),
    path('videos/<str:isLogin>/',index),
    path('login/',index),
    path('register/',index),
    path('userregister',userregister,name="userregister"),
    path('userlogin',userlogin,name="userlogin"),
    path('logout',userlogout,name="userlogout"),
    path('complete-profile',complete_profile, name="complete-profile"),
    path('google_login',google_login,name="google_login"),
]