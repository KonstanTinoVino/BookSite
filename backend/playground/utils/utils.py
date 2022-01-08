import json
from playground.models import Author


def serialize_books(book_set):
    book_list_json = []
    for book in book_set.all():
        json_book = {'id': book.id, 'title': book.title, 'pages': book.pages}
        book_list_json.append(json_book)

    return book_list_json


def create_json():
    authors_list_json = []
    author_list = Author.objects.all()
    for author in author_list:
        books = serialize_books(author.book_set)
        author_json = {'id': author.id, 'name': author.first_name + ' ' + author.last_names, 'books': books}
        authors_list_json.append(author_json)

    json_string = json.dumps(authors_list_json, indent=3)
    return json_string
