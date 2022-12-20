from rest_framework import serializers
from .models import Project, Task, Plan

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'technologies', 'collaborators', 'status', 'created_at')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id','title','frequency','description','completed')

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ('id','title','description','start_time','end_time')