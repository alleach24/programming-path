from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import generics, status

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
            # messages.success(request, ('Login failed, try again'))
            return redirect('/login')

    else:
        print("post request not received")
        return HttpResponse()


def logout_user(request):
    print('hit the logout method in /members/views.py')
    logout(request)
    return redirect('/')

