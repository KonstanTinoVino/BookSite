from django.shortcuts import render
from django.http import HttpResponse
from pydblite.pydblite import Base
from playground.utils import utils
from .models import Book, Author
from django.contrib.auth.models import User


# Create your views here.
def status(request):
    return HttpResponse("Back-end is UP!!!")


def get_author_data(request):
    data = utils.create_json()
    return HttpResponse(data, content_type='application/json', headers={"Access-Control-Allow-Origin": "*"})


def populate_db(request):
    user = User.objects.first()
    JS = Author(first_name="John", last_names='Steinbeck', added_by=user)
    JS.save()
    MT = Author(first_name="Mark", last_names='Twain', added_by=user)
    MT.save()
    TGOW = Book(title='The Grapes Of Wrath', author=JS, pages=473, added_by=user)
    TGOW.save()
    HF = Book(title='Huckleberry Fin', author=MT, pages=300, added_by=user)
    HF.save()

