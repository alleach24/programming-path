from django.shortcuts import render
from rest_framework import generics, status, viewsets
from rest_framework.views import APIView
from .serializers import ProjectSerializer, TaskSerializer, PlanSerializer
from .models import Project, Task, Plan
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

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
        project_list = Project.objects.filter(user=request.user)
        data_list = []
        for i in range(0,len(project_list)):
            data_list.append(ProjectSerializer(project_list[i]).data)
        return Response(data_list, status=status.HTTP_200_OK)


class SaveProject(APIView):
    serializer_class = ProjectSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        print(request.user)        

        if serializer.is_valid():
            print(serializer.errors)
            print("serializer is valid")
            id = request.data['id']
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            technologies = serializer.data.get('technologies')
            collaborators = serializer.data.get('collaborators')
            project_status = serializer.data.get('status')
            user = request.user

            if id != None:
                print(id)
                project = Project.objects.filter(id=id)
                if len(project) > 0:
                    project[0].title = title
                    project[0].description = description
                    project[0].technologies = technologies
                    project[0].collaborators = collaborators
                    project[0].status = project_status
                    project[0].user = user
                    project[0].save()
                    return Response(ProjectSerializer(project[0]).data, status=status.HTTP_200_OK)
            
            else:
                print("no id provided")
                project = Project(title=title, description=description, technologies=technologies, collaborators=collaborators, status=project_status, user=user)
                project.save()
                return Response(ProjectSerializer(project).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            print("serializer not valid")   
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)



def deleteIdea(request, id):
    idea = Project.objects.get(id=id)
    idea.delete()
    return HttpResponse()


def deleteTask(request,id):
    task = Task.objects.get(id=id)
    task.delete()
    return HttpResponse()

def deletePlan(request,id):
    plan = Plan.objects.get(id=id)
    plan.delete()
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
            task_list = Task.objects.filter(frequency=frequency, user=request.user)
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
        print(request.user)
        
        if serializer.is_valid():
            print(serializer.errors)
            print("serializer is valid")
            id = request.data['id']
            title = serializer.data.get('title')
            frequency = serializer.data.get('frequency')
            description = serializer.data.get('description')
            completed = serializer.data.get('completed')
            user = request.user

            if id != None:
                print(id)
                task = Task.objects.filter(id=id)
                if len(task) > 0:
                    task[0].title = title
                    task[0].frequency = frequency
                    task[0].description = description
                    task[0].completed = completed
                    task[0].user = user
                    task[0].save()
                    return Response(TaskSerializer(task[0]).data, status=status.HTTP_200_OK)
            
            else:
                print("no id provided")
                task = Task(title=title, frequency=frequency, description=description, completed=completed, user=user)
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






class GetPlanList(APIView):
    serializer_class = PlanSerializer

    def get(self, request, formate=None):
        plan_list = Plan.objects.filter(user=request.user)
        data_list = []
        for i in range(0,len(plan_list)):
            data_list.append(PlanSerializer(plan_list[i]).data)
        return Response(data_list, status=status.HTTP_200_OK)


class GetPlan(APIView):
    serializer_class = PlanSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        user = request.user
        if id != None:
            plan = Plan.objects.filter(id=id, user=user)
            if len(plan) > 0:
                data = PlanSerializer(plan[0]).data
                return Response(data, status=status.HTTP_200_OK)
            else:
                print('trying to redirect')
                return HttpResponseRedirect('/home')
            # return Response({'Bad Request': 'Invalid Plan ID or User'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Reqeust: Plan ID parameter not included'}, status=status.HTTP_404_NOT_FOUND)


class SavePlan(APIView):
    serializer_class = PlanSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        print(request)
        print(request.user)
        
        if serializer.is_valid():
            print(serializer.errors)
            print("serializer is valid")
            id = request.data['id']
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            start_time = serializer.data.get('start_time')
            end_time = serializer.data.get('end_time')
            user = request.user

            if id != None:
                print(id)
                plan = Plan.objects.filter(id=id)
                if len(plan) > 0:
                    plan[0].title = title
                    plan[0].description = description
                    plan[0].start_time = start_time
                    plan[0].end_time = end_time
                    plan[0].user = user
                    plan[0].save()
                    return Response(PlanSerializer(plan[0]).data, status=status.HTTP_200_OK)
            
            else:
                print("no id provided")
                plan = Plan(title=title, description=description, start_time=start_time, end_time=end_time, user=user)
                plan.save()
                return Response(PlanSerializer(plan).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            print("serializer not valid")   
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)