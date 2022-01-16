from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('status/', views.status),
    path('populate_db/', views.populate_db),
    path('get_all_data/', views.get_author_data),
    path('get_book_cover/<int:book_id>/', views.get_book_image),
    path('get_book_description/<int:book_id>/', views.get_book_description),
]
