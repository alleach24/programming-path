from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('home/', views.index),
    # path('signup/', views.sign_up),
    path('login/', views.index),
#     path('logout/', views.log_out),
#     path('whoami/', views.who_am_i),
    path('projects/', views.index),
    path('project/<int:projectID>', views.index),
    path('add-project-idea/', views.index),
]
