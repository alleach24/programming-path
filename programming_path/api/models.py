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

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    technologies = models.CharField(max_length=500) # maybe look for a list field or something
    collaborators = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Task(models.Model):
    ONCE = "O"
    DAILY = "D"
    WEEKLY = "W"
    MONTHLY = "M"
    YEARLY = "Y"
    FREQUENCY_CHOICES = [
        (ONCE, 'Once'),
        (DAILY, 'Daily'),
        (WEEKLY, 'Weekly'),
        (MONTHLY, 'Monthly'),
        (YEARLY, 'Yearly'),
    ]
    title = models.CharField(max_length=120)
    frequency = models.CharField(max_length = 1, choices=FREQUENCY_CHOICES, default=ONCE)
    description = models.TextField(default="description") # change to link to resource later
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Plan(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    start_time = models.DateField()
    end_time = models.DateField()

    def __str__(self):
        return self.title
