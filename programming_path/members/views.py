from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import generics, status
from django.contrib.auth.forms import UserCreationForm
from rest_framework.decorators import api_view
from .models import Member
from django.http import JsonResponse

def login_user(request):
    print('hit this method')
    print('request method')
    print(request.method)
    if request.method == "POST":
        print("post request received")
        print(request)
        print(request.POST)
        print(request.POST['username'])
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            print("found the user!")
            login(request, user)
            return redirect('/home')
        else:
            print("did not find the user")
            return redirect('/login') #find a way to send a 'failed login' message or something

    else:
        print("post request not received")
        return HttpResponse()


def logout_user(request):
    print('hit the logout method in /members/views.py')
    logout(request)
    return redirect('/')

@api_view(['POST'])
def register_user(request):
    print('hit the register user method')
    try: 
        print('trying')
        Member.objects.create_user(username=request.data['username'], password=request.data['password'], email=request.data['email'])
        JsonResponse({'success': True})
        print('success?')
        return redirect('/login') #add way to send success message
    except Exception as e:
        print('failed')
        print(str(e))
        JsonResponse({'success': False})
    return redirect('/register') #add way to send error message


@api_view(['GET'])
def who_am_i(request):
    pass