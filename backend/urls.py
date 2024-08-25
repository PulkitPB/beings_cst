from django.urls import path
from .views import *
urlpatterns = [
    path('user/', UserDetailView.as_view()),
    path('faculty/',FacultyDetailView.as_view()),
    path('notes/',NotesView.as_view()),
    path('pyqs/',PYQsView.as_view()),
    path('videos/',VideosView.as_view()),
]
