from django.urls import path
from .views import BlogPostListView ,BlogPostDetailView,CategoriesListView,BlogPostFeaturedView

urlpatterns = [
    path('',BlogPostListView.as_view() ),
    path('featured', BlogPostFeaturedView.as_view()),
    path('categories',CategoriesListView.as_view() ),
    path('<slug>', BlogPostDetailView.as_view()),
    
]