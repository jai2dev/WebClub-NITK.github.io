from django.shortcuts import render
from .models import blogs,tag,taginblog, webClubMembers,  writerDetails
from .serializers import writerDetailSerializer
from django.db import IntegrityError
from django.http import JsonResponse
from django.http import HttpResponseRedirect,HttpResponse

# import rest framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import json
import datetime
import ast


# Handles authentication
# authentication mechanism is not entirely correct and secure, needs modification (token has the digital signature and the information but the system is yet not checking it, and hence any random token is allowed on the system as of now)
class userDetails(APIView):
    
    def post(self, request, format=None):
        json_data = json.loads(str(request.body, encoding='utf-8'))

        user_email = json_data["email"]
        user_token = json_data["token"]
     
        obj = webClubMembers.objects.filter(email = user_email)
        # if valid web club member
        if len(obj)>0:
            # entering system for the first time
            writer = writerDetails.objects.filter(token = user_token)
            if(len(writer) <= 0):
                # save the details in writerDetails table
                serializer = writerDetailSerializer(data=json_data)
                if serializer.is_valid():
                    serializer.save()
                
            return Response(status=status.HTTP_201_CREATED)
            
        return Response("not authorized web club member ", status=status.HTTP_401_UNAUTHORIZED)

def homepage(request):

    return HttpResponse('<h1>bharat singh</h1>')

def searchBlogWithTag(request): #this is of no use as sorting blogs is done on react side
    tagName=request.GET['tagName']
    print(tagName)
    blogwithtag=taginblog.objects.filter(tag__name=tagName).values('blog')
    searchedBlogs=[]
    for k in blogwithtag:
        print(k['blog'])
        searchedBlogs+=[blogs.objects.values('id','heading').get(id=k['blog'])]
    print(blogwithtag)
    print(searchedBlogs)
    return JsonResponse({'searchedBlogs':searchedBlogs})

def loadBlogs(request): #this will load all blogs on /blogs path 
    blog_obj=blogs.objects.values('heading','id','sample_text','date','user_name').order_by('-id')
    data=[]
    for k in blog_obj:
        temp=dict()
        temp['blog']=k
        tag_list=[]
        for k in taginblog.objects.filter(blog_id=k['id']):
            tag_list+=[tag.objects.get(id=k.tag_id).name]
        temp['tags']=tag_list
        data+=[temp]
    return JsonResponse({'blogs': data})
    
def loadBlog(request,id): #loads specific blog with blog id
    try:
        blog=blogs.objects.get(id=id)
    except blogs.DoesNotExist:    
        return HttpResponse(0)
    temp=dict()
    temp['id']=blog.id
    temp['heading']=blog.heading
    temp['content']=blog.content
    temp['sample_text']=blog.sample_text
    temp['date']=blog.date
    temp['user_email']=blog.user_email
    temp['writer']=blog.user_name
    return JsonResponse(temp)


def postBlog(request):
    
    a=request.body
    temp=json.loads(a)
    
    obj=blogs()
    obj.heading=temp['heading']
    obj.user_email=temp['user_email']
    obj.user_name=temp['user_name']
    obj.content=temp['content']
    obj.date=datetime.date.today()
    obj.sample_text=temp['sample_text']
    print(temp['tag_list'])
    obj.save()
    for k in temp['tag_list']:
        try:
            tag_obj=tag.objects.get(name=k)
        except tag.DoesNotExist:
            tag_obj=tag()
            tag_obj.name=k
            tag_obj.save()
        try:
            taginblog_obj=taginblog()
            taginblog_obj.blog=obj
            taginblog_obj.tag=tag_obj
            taginblog_obj.save()
        except IntegrityError:
            print("already there")
            
        
    print(temp['heading'])
    return HttpResponse('Success')

