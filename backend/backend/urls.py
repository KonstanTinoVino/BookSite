"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from pydblite.pydblite import Base
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('playground/', include('playground.urls')),
]


def one_time_startup():
    db = Base('books', save_to_file=True)
    # create new base with field names
    db.create('id', 'name', 'author', 'start_read', 'end_read', 'rating', 'comment')
    db.insert(id=1, name='The Master and Margarita', author='Mikhail Bulgakov',
              start_read='20/12/2020', end_read='10/01/2021', rating=3)
    db.insert(id=2, name='In Dubious Battle', author='John Steinbeck',
              start_read='10/01/2021', end_read='02/02/2021', rating=4)
    db.insert(id=3, name='Saga: Compendium One', author='Brian K. Vaughan, Fiona Staples',
              start_read='15/12/2020', end_read='03/02/2021', rating=5)
    db.commit()


if not os.path.isfile('./books'):
    one_time_startup()
