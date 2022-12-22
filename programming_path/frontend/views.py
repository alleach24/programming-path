from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='/login')
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def visitor(request, *args, **kwargs):
    return render(request, 'frontend/visitor.html')