from django.contrib import admin
from .models import blogs,tag,taginblog,writerDetails,webClubMembers
# Register your models here.
admin.site.register(blogs)
admin.site.register(tag)
admin.site.register(taginblog)
admin.site.register(writerDetails)
admin.site.register(webClubMembers)
