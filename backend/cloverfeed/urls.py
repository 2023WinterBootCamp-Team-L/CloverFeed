from django.urls import path
from cloverfeed import views
from django.conf.urls import include

app_name = 'cloverfeed'

urlpatterns = [
    path('signup/', views.signup),
    path('login/', views.login),
    path('logout/', views.logout),
]