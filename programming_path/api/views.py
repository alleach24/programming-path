from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from .serializers import ProjectSerializer
from .models import Project
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseRedirect

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
        # print(len(project_list))
        for i in range(0,len(project_list)):
            data_list.append(ProjectSerializer(project_list[i]).data)
        # print(data_list)
        return Response(data_list, status=status.HTTP_200_OK)


class AddProject(APIView):
    serializer_class = ProjectSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            technologies = serializer.data.get('technologies')
            collaborators = serializer.data.get('collaborators')
            project_status = serializer.data.get('status')

            project = Project(title=title, description=description, technologies=technologies, collaborators=collaborators, status=project_status)
            project.save()
            return Response(ProjectSerializer(project).data, status=status.HTTP_201_CREATED)
            
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

def deleteIdea(request, id):
    print('test')
    idea = Project.objects.get(id=id)
    print(idea)
    idea.delete()
    return HttpResponse()
