from django.contrib import admin
from django.urls import include, path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('register/', views.register, name='register'),
    path('signin/', views.signin, name='signin'),
    path('logout/', views.logout_view, name='logout'),
]