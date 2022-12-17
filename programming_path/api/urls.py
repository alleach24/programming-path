from django.urls import path
# from .views import main
from .views import ProjectView, GetProject

urlpatterns = [
    path('projects/', ProjectView.as_view()),
    path('get-project', GetProject.as_view()),
]