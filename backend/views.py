from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class FacultyDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        faculties = faculty.objects.all()
        serializer = FacultySerializer(faculties,many=True)
        return Response(serializer.data)

class NotesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        Notes = notes.objects.all()
        serializer = NotesSerializer(Notes,many=True)
        return Response(serializer.data)
    
class PYQsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        PYQs = pyqs.objects.all()
        serializer = PYQsSerializer(PYQs,many=True)
        return Response(serializer.data)
    
class VideosView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        Videos = videos.objects.all()
        serializer = VideosSerializer(Videos,many=True)
        return Response(serializer.data)