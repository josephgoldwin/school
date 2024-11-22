from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def base(request):
    return render(request, 'base.html')

def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def about_us(request):
    return render(request, 'about_us.html')

def admission(request):
    return render(request, 'admission.html')

def academic(request):
    return render(request, 'academic.html')

def contact(request):
    return render(request, 'contact.html')