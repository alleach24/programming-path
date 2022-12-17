from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Create your models here.

# class AppUser(AbstractUser):
#     email = models.EmailField(
#         verbose_name='email address',
#         max_length=255,
#         unique=True,
#     )
#     # is_active = models.BooleanField(default=True)
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []
#     # pass

class Task(models.Model):
    title = models.CharField(max_length=100)
    frequency = models.CharField(max_length=50)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    technologies = models.CharField(max_length=500) # maybe look for a list field or something
    collaborators = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title