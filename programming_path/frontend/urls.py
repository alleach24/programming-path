from django.urls import path
from . import views

urlpatterns = [
    path('',views.visitor),
    path('login/', views.visitor),
    path('register/', views.visitor),

    # path('visitor/', views.visitor),
    # path('visitor/login/', views.visitor),
    # path('visitor/register/', views.visitor),

    path('home/', views.index),

    path('projects/', views.index),
    path('project/<int:projectID>', views.index),
    path('project/edit/<int:projectID>', views.index),
    path('project/edit/new', views.index),


    path('tasks/', views.index),
    path('task/<int:taskID>', views.index),
    path('task/edit/<int:taskID>', views.index),
    path('task/edit/new', views.index),

    path('mypath/', views.index),
    path('plan/<int:taskID>', views.index),
    path('plan/edit/<int:taskID>', views.index),
    path('plan/edit/new', views.index),
    
]
