from django.shortcuts import render
from django.http import HttpResponse
from pydblite.pydblite import Base
from playground.utils import utils


# Create your views here.
def status(request):
    return HttpResponse("Back-end is UP!!!")


def get_all_books(request):
    db = Base('books', save_to_file=False)
    db.open()
    records = db.records
    json = utils.create_json(records)
    return HttpResponse(json, content_type='application/json')


def show_books(request):
    db = Base('books', save_to_file=False)
    db.open()
    records = db.records
    data = []

    for key in records:
        data.append(records[key]['name'])

    context = {'names': data}

    return render(request, 'books.html', context)
