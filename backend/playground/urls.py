from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('status/', views.status),
    path('show_books/', views.show_books),
    path('get_books/', views.get_all_books)
]