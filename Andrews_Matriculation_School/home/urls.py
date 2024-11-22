from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('base/', views.base, name='base'),
    path('home/', views.index, name='index'),
    path('about_us/', views.about_us, name='about_us'),
    path('admission/', views.admission, name='admission'),
    path('academic/', views.academic, name='academic'),
    path('contact/', views.contact, name='contact'),
    
]