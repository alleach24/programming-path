from django.urls import path
from . import views

urlpatterns = [
    path('',views.visitor),
    path('home/', views.index),
    path('projects/', views.index),
    path('tasks/', views.index),
    path('mypath/', views.index),
    path('resources/', views.index)
]
