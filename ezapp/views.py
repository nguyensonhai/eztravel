from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib.auth.forms import UserCreationForm
from .forms import signUp
# Create your views here.

def index(request):
    return render(request, 'index.html')

def main(request):
    form = signUp()
    return render(request, 'main.html', {'form': form})

def signup(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = signUp(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            username = form.cleaned_data.get('username')
            email = form.cleaned_data.get('email')            
            password = form.cleaned_data.get('password')
            repassword = form.cleaned_data.get('repassword')
            if(password == repassword):
                user = User.objects.create_user(username, password, email)
                user.save()
                return redirect('/main/')
        return redirect('/main/')
    else:
        form = signUp()
        return render(request, 'main.html', {'form': form})


def loading(request):
    return render(request, 'loading.html')

def s(request):
    form = UserCreationForm()
    return render(request, 's.html', )
