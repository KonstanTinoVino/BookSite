from django.contrib.auth.models import User
from django.http import HttpResponse

from playground.utils import utils
from .models import Book, Author


# Create your views here.
def status(request):
    return HttpResponse("Back-end is UP!!!")


def get_author_data(request):
    data = utils.create_json()
    return HttpResponse(data, content_type='application/json', headers={"Access-Control-Allow-Origin": "*"})


def get_book_description(request, book_id):
    if Book.objects.filter(id=book_id).exists():
        book = Book.objects.get(id=book_id)
        return HttpResponse(book.description, content_type='text/plain',headers={"Access-Control-Allow-Origin": "*"})
    else:
        return HttpResponse('No Such Book Found', status=404)


def get_book_image(request, book_id):
    if Book.objects.filter(id=book_id).exists():
        book = Book.objects.get(id=book_id)
        return HttpResponse(book.cover_photo, content_type='image/jpg', headers={"Access-Control-Allow-Origin": "*"})
    else:
        return HttpResponse('No Such Image Found', status=404)


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
