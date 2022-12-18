from django.urls import path
# from .views import main
from . import views

urlpatterns = [
    path('projects/', views.ProjectView.as_view()),
    path('get-project/', views.GetProject.as_view()),
    path('get-project-list/', views.GetProjectList.as_view()),
    path('add-project/', views.AddProject.as_view()),
]