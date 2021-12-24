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
    db = Base('dummy', save_to_file=True)
    # create new base with field names
    db.create('name', 'age', 'size')
    db.insert(name='homer', age=23, size=1.84)
    db.insert(name='marge', age=36, size=1.94)
    db.commit()


if not os.path.isfile('./dummy'):
    one_time_startup()
