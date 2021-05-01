from rest_framework import serializers
from.models import BlogPost , Categories
class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['category'] = CategoriesSerializer(instance.category).data
        return rep
    
class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'
        lookup_field = 'name'