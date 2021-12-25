from django.shortcuts import render
from django.http import HttpResponse
from pydblite.pydblite import Base
from django.template.loader import render_to_string


# Create your views here.
def status(request):
    return HttpResponse("Back-end is UP!!!")


def show_books(request):
    db = Base('books', save_to_file=False)
    db.open()

    records = db.records
    data = []

    for key in records:
        data.append(records[key]['name'])

    context = {'names': data}

    return render(request, 'books.html', context)
