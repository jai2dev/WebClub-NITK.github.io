from django.shortcuts import render
from .models import blogs,tag,taginblog
from django.db import IntegrityError
from django.http import JsonResponse
from django.http import HttpResponseRedirect,HttpResponse
import json
import datetime
# Create your views here.
def homepage(request):

    return HttpResponse('<h1>bharat singh</h1>')

def searchBlogWithTag(request):
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
def delete_all_blogs():
    temp=blogs.objects.all()
    print('deleting blogs')
    for k in temp:
        k.delete()
def loadBlogs(request):
    blog_obj=blogs.objects.values('heading','id','sample_text','date','user_name')
    data=[]
    for k in blog_obj:
        temp=dict()
        temp['blog']=k
        # print(k['sample_text'])
        tag_list=[]
        for k in taginblog.objects.filter(blog_id=k['id']):
            tag_list+=[tag.objects.get(id=k.tag_id).name]
        print(tag_list)
        temp['tags']=tag_list
        
        data+=[temp]
    # print(data)
    return JsonResponse({'blogs': data})
    
def loadBlog(request,id):

    print(id)
    
    try:
        blog=blogs.objects.get(id=id)
    except blogs.DoesNotExist:    
        return HttpResponse(0)
    print(blog)
    print(type(blog))
    temp=dict()
    temp['id']=blog.id
    temp['heading']=blog.heading
    temp['content']=blog.content
    temp['date']=blog.date
    temp['user_email']=blog.user_email
    temp['writer']=blog.user_name
    return JsonResponse(temp)


def postBlog(request):
    
    data=request.body
    # print(json.load(request.body))
    # print(request.body.heading)
    temp=json.loads(data.decode('utf-8'))
    # print(temp)
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