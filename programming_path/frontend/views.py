from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


# @api_view(['POST'])
# def sign_up(request):
#     pass


# @api_view(['POST'])
# def log_in(request):
#     pass


# @api_view(['POST'])
# def log_out(request):
#     pass


# @api_view(['POST'])
# def who_am_i(request):
#     pass