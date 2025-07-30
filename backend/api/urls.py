from django.urls import path
from . import views

urlpatterns = [
    path('features/', views.feature_list),
    path('features/<int:pk>/upvote/', views.upvote_feature),
]
