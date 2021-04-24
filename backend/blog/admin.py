from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost,Categories

class BlogPostAdmin(SummernoteModelAdmin):
    summernote_fields = ('content', )




admin.site.register(Categories)
admin.site.register(BlogPost,BlogPostAdmin)


