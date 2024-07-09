from django.shortcuts import render, redirect
from backend.models import customUser
from django.views.decorators.csrf import csrf_exempt
import email_normalize
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth import authenticate, login

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

@csrf_exempt
def userlogin(request):
    if request.method=='POST':
        phone_number=request.POST.get('phone_number')
        password=request.POST.get('password')
        if not customUser.objects.filter(phone_number=phone_number).exists():
            messages.error(request,"Invalid Credentials!")
            return redirect("/login")
        user=authenticate(username=phone_number,password=password)
        if user is None:
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
        return redirect('/home/true')
    