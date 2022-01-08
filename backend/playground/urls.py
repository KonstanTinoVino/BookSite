from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('status/', views.status),
    path('populate_db/', views.populate_db),
    path('get_all_data/', views.get_author_data)
]