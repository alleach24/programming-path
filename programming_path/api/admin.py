from django.contrib import admin
from .models import Task, Project, Plan

# Register your models here.

# admin.site.register(AppUser)

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title','frequency','description','completed')

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title','description','technologies','collaborators','status')

class PlanAdmin(admin.ModelAdmin):
    list_display = ('id', 'title','description','start_time','end_time')

admin.site.register(Task, TaskAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Plan, PlanAdmin)