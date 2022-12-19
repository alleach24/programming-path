from django.urls import path
# from .views import main
from . import views

urlpatterns = [
    
    path('projects/', views.ProjectView.as_view()),
    path('get-project/', views.GetProject.as_view()),
    path('get-project-list/', views.GetProjectList.as_view()),
    path('save-project/', views.SaveProject.as_view()),
    path('delete-idea/<int:id>', views.deleteIdea, name='deleteIdea'),

    path('tasks/', views.TaskView.as_view()),
    path('get-task/', views.GetTask.as_view()),
    path('get-task-list/', views.GetTaskList.as_view()),
    path('save-task/', views.SaveTask.as_view()),
    path('delete-task/<int:id>', views.deleteTask, name='deleteTask'),
    
]