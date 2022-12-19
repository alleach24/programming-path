from django.contrib import admin
from .models import Task
from .models import Project

# Register your models here.

# admin.site.register(AppUser)

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title','frequency','description','completed')

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title','description','technologies','collaborators','status')

admin.site.register(Task, TaskAdmin)
admin.site.register(Project, ProjectAdmin)