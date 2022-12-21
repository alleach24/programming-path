from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('home/', views.index),
    path('login/', views.index),
    path('register/', views.index),

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
