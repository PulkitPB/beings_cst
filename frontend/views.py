from django.shortcuts import render, redirect
from backend.models import customUser
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from backend.models import customUser
from django.contrib.auth.decorators import login_required

# Create your views here.
@csrf_exempt
def base(request):
    return redirect("/home/false")
@csrf_exempt
def index(request,*args, **kwargs):
    print(request.COOKIES.get('sessionid'))
    if kwargs and kwargs['isLogin']=='true' and not request.COOKIES.get('sessionid'):
        return redirect('/home/false/')
    if kwargs and kwargs['isLogin']=='false' and request.COOKIES.get('sessionid'):
        return redirect('/home/true')
    return render(request, 'frontend/index.html')
@csrf_exempt
def userlogout(request):
    logout(request)
    return redirect('/home/false/')

@csrf_exempt
def userlogin(request):
    if request.method=='POST':
        phone_number=request.POST.get('phone_number')
        password=request.POST.get('password')
        if not customUser.objects.filter(phone_number=phone_number).exists():
            messages.error(request,"Invalid Credentials!")
            return redirect("/login")
        user=authenticate(username=phone_number,password=password)
        if user is None or not user.email:
            messages.error(request,"Invalid Credentials!")
            return redirect("/login")
        else:
            login(request,user)
            return redirect("/home/true")

@csrf_exempt
def userregister(request):
    if request.method=='POST':
        email=request.POST.get('email')
        phone_number=request.POST.get('phone_number')
        password=request.POST.get('password')

        user=customUser.objects.filter(phone_number=phone_number)
        if user.exists():
            messages.error(request,"This phone number is already registered!")
            # return redirect('/register')
            return render(request, 'frontend/index.html')
        
        user=customUser.objects.filter(email=email)
        if user.exists():
            messages.error(request,"This email is already registered!")
            return redirect('/register')
        
        customUser.objects.create_user(phone_number=phone_number,password=password,email=email)
        print(email,password)
        messages.info(request,"User registered successfully!")
        user=authenticate(username=phone_number,password=password)
        login(request,user)
        return redirect('/home/true')
    