from django.contrib.auth.admin import UserAdmin
from django.contrib import admin

# Register your models here.
from .models import AuthUser

admin.site.register(AuthUser)
