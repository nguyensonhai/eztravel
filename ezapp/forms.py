from django import forms

class signUp(forms.Form):
    username= forms.CharField(label='Username', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Type your username'}))
    email = forms.CharField(label='Email', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Type your email'}))
    password = forms.CharField(label='Password', max_length=20, widget=forms.PasswordInput(attrs={'placeholder': 'Type your password'}))
    repassword = forms.CharField(label='Re-type Password', max_length=20, widget=forms.PasswordInput(attrs={'placeholder': 'Re-type your password'}))