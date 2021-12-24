from django.shortcuts import render
from django.http import HttpResponse
from pydblite.pydblite import Base


# Create your views here.
def say_hello(request):
    return HttpResponse("Hello World")


def display_db(request):
    db = Base('dummy', save_to_file=False)
    db.open()
    records = db(name="homer")
    print(records[0]['name'])
    return render(request, 'db.html', {'name': records[0]['name'], 'age': records[0]['age'], 'size': records[0]['size']})
