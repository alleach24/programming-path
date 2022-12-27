from django.urls import path
# from .views import main
from . import views

urlpatterns = [
    
    path('get-project/', views.GetProject.as_view()),
    path('get-project-list/', views.GetProjectList.as_view()),
    path('save-project/', views.SaveProject.as_view()),
    path('delete-idea/<int:id>', views.deleteIdea, name='deleteIdea'),

    path('tasks/', views.TaskView.as_view()),
    path('get-task/', views.GetTask.as_view()),
    path('get-task-list/', views.GetTaskList.as_view()),
    path('save-task/', views.SaveTask.as_view()),
    path('delete-task/<int:id>', views.deleteTask, name='deleteTask'),

    path('get-plan-list/', views.GetPlanList.as_view()),
    path('get-plan/', views.GetPlan.as_view()),
    path('save-plan/', views.SavePlan.as_view()),
    path('delete-plan/<int:id>', views.deletePlan, name='deletePlan'),
    
]