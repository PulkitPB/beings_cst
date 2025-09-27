from django.shortcuts import render, redirect
from backend.models import customUser
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from google.oauth2 import id_token
from google.auth.transport import requests
from django.http import JsonResponse
import json

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
    
@csrf_exempt
def complete_profile(request):
    google_user = request.session.get('google_user')
    if not google_user:
        return redirect('/login')

    if request.method == 'POST':
        phone_number = request.POST.get('phone_number')

        # Check if phone already exists
        if customUser.objects.filter(phone_number=phone_number).exists():
            messages.error(request, "Phone number already in use.")
            return redirect('/complete-profile')

        user = customUser.objects.create_user(
            phone_number=phone_number,
            email=google_user['email'],
            # password=customUser.objects.make_random_password()
            password=google_user['sub']
        )
        user.save()
        login(request, user)
        del request.session['google_user']  # cleanup session
        return redirect('/home/true')

    return render(request, 'frontend/complete_profile.html')

@csrf_exempt
def google_login(request):
    # print('Hello',request)
    if request.method == 'POST':
        data = json.loads(request.body)
        token = data.get('token')

        try:
            CLIENT_ID = '453766993731-l9ti6oagidienrmq3of5k6sluefaec7e.apps.googleusercontent.com'
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)

            email = idinfo.get('email')
            name = idinfo.get('name')
            sub = idinfo.get('sub')
            try:
                user = customUser.objects.get(email=email)
                login(request, user)
                return JsonResponse({'redirect': '/home/true'})
            except customUser.DoesNotExist:
                # Save Google info in session and redirect to phone number page
                request.session['google_user'] = {
                    'email': email,
                    'name': name,
                    'sub': sub,
                }
                return JsonResponse({'redirect': '/complete-profile'})

        except ValueError:
            return JsonResponse({'error': 'Invalid Google token'}, status=400)

    return JsonResponse({'error': 'Only POST allowed'}, status=405)