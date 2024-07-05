from django.shortcuts import render, redirect
from backend.models import customUser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request,isLogin=False):
    return render(request, 'frontend/index.html',context={"isLogin":isLogin})

def userlogin(request):
    pass

@csrf_exempt
def userregister(request):
    if request.method=='POST':
        email=request.POST.get('email')
        phone_number=request.POST.get('phone_number')
        password=request.POST.get('password')

        newuser=customUser(email=email, phone_number=phone_number, password=password)
        newuser.save()
        return redirect('/home/true')
    