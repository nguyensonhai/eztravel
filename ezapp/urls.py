from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('main/', views.main, name='main'),
    path('loading/', views.loading, name='loading'),
    path('signup/', views.signup, name='signup'),
]
