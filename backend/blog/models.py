from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class Categories(models.Model):
    name=models.CharField(max_length=50)
    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.ForeignKey(Categories,on_delete=models.CASCADE)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            if queryset is 0:
                slug = original_slug
            else:
               slug = original_slug + '-' + str(queryset - 1)

        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
