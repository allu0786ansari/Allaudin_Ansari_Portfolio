from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages  # Import messages framework
from django.contrib.auth import login as auth_login
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse

def index(request):
    return render(request, "authenticate/index.html")

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        contact_number = request.POST.get('contact_number')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        # Check if passwords match
        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return redirect('register')

        # Check if username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return redirect('register')

        try:
            # Create the user
            user = User.objects.create_user(username=username, email=email, password=password1,
                                            first_name=first_name, last_name=last_name)
            user.save()
            messages.success(request, "Registration successful! Please log in.")
            return redirect('signin')
        except Exception as e:
            messages.error(request, f"Error during registration: {e}")
            return redirect('register')

    return render(request, "authenticate/register.html")


def signin(request):
    return render(request, "authenticate/signin.html")

def logout(request):
    return render(request, "authenticate/logout.html")