from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages  # Import messages framework
from django.contrib.auth import login as auth_login
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout

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

         # Check if email already exists
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists.")
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
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Check if a user with the provided email exists
        try:
            user = User.objects.get(email=email)
            username = user.username  # Retrieve the username associated with the email
        except User.DoesNotExist:
            messages.error(request, "Bad Credentials!")
            return redirect('signin')

        # Authenticate using the retrieved username
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            fname = user.first_name
            return render(request, "authenticate/index.html", {'fname': fname})
        else:
            messages.error(request, "Bad Credentials!")
            return redirect('signin')
    

    return render(request, "authenticate/signin.html")

def logout_view(request):
    logout(request)
    messages.success(request, "Logged  out successfully!")
    return redirect('index')