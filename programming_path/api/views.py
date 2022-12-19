from django.shortcuts import render
from rest_framework import generics, status, viewsets
from rest_framework.views import APIView
from .serializers import ProjectSerializer, TaskSerializer
from .models import Project, Task
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

class ProjectView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class GetProject(APIView):
    serializer_class = ProjectSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            project = Project.objects.filter(id=id)
            if len(project) > 0:
                data = ProjectSerializer(project[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Bad Request': 'Invalid Project ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Reqeust: Project parameter not included'}, status=status.HTTP_404_NOT_FOUND)


class GetProjectList(APIView):
    serializer_class = ProjectSerializer

    def get(self, request, formate=None):
        project_list = Project.objects.all()
        data_list = []
        for i in range(0,len(project_list)):
            data_list.append(ProjectSerializer(project_list[i]).data)
        return Response(data_list, status=status.HTTP_200_OK)


class SaveProject(APIView):
    serializer_class = ProjectSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        

        if serializer.is_valid():
            print(serializer.errors)
            print("serializer is valid")
            id = request.data['id']
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            technologies = serializer.data.get('technologies')
            collaborators = serializer.data.get('collaborators')
            project_status = serializer.data.get('status')

            if id != None:
                print(id)
                project = Project.objects.filter(id=id)
                if len(project) > 0:
                    project[0].title = title
                    project[0].description = description
                    project[0].technologies = technologies
                    project[0].collaborators = collaborators
                    project[0].status = project_status
                    project[0].save()
                    return Response(ProjectSerializer(project[0]).data, status=status.HTTP_200_OK)
            
            else:
                print("no id provided")
                project = Project(title=title, description=description, technologies=technologies, collaborators=collaborators, status=project_status)
                project.save()
                return Response(ProjectSerializer(project).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            print("serializer not valid")   
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)



def deleteIdea(request, id):
    print('test')
    idea = Project.objects.get(id=id)
    print(idea)
    idea.delete()
    return HttpResponse()



class TaskView(generics.ListAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class GetTaskList(APIView):
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'frequency'

    def get(self, request, formate=None):
        frequency = request.GET.get(self.lookup_url_kwarg)
        if frequency != None:
            task_list = Task.objects.filter(frequency=frequency)
            if len(task_list) > 0:
                data_list = []
                for i in range(0,len(task_list)):
                    data_list.append(TaskSerializer(task_list[i]).data)
                return Response(data_list, status=status.HTTP_200_OK)
            return Response({'Good Reqeust: No tasks found'}, status=status.HTTP_200_OK)
        return Response({'Bad Reqeust: Task frequency parameter not included'}, status=status.HTTP_404_NOT_FOUND)


class SaveTask(APIView):
    serializer_class = TaskSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            print(serializer.errors)
            print("serializer is valid")
            id = request.data['id']
            title = serializer.data.get('title')
            frequency = serializer.data.get('frequency')
            description = serializer.data.get('description')
            completed = serializer.data.get('completed')

            if id != None:
                print(id)
                task = Task.objects.filter(id=id)
                if len(task) > 0:
                    task[0].title = title
                    task[0].frequency = frequency
                    task[0].description = description
                    task[0].completed = completed
                    task[0].save()
                    return Response(TaskSerializer(task[0]).data, status=status.HTTP_200_OK)
            
            else:
                print("no id provided")
                task = Task(title=title, frequency=frequency, description=description, completed=completed)
                task.save()
                return Response(TaskSerializer(task).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            print("serializer not valid")   
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class GetTask(APIView):
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            task = Task.objects.filter(id=id)
            if len(task) > 0:
                data = TaskSerializer(task[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Bad Request': 'Invalid Task ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Reqeust: ID parameter not included'}, status=status.HTTP_404_NOT_FOUND)