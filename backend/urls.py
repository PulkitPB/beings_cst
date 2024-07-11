from django.urls import path
from .views import *
urlpatterns = [
    path('', UserDetailView.as_view()),
]
