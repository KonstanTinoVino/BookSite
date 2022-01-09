from django.db import models
from django.contrib.auth.models import User


class Author(models.Model):
    first_name = models.TextField()
    last_names = models.TextField()
    biography = models.TextField(blank=True, null=True)
    added_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_names)


class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.DO_NOTHING)
    added_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.TextField()
    pages = models.IntegerField()
    description = models.TextField(blank=True, null=True)
    started_reading = models.DateTimeField(blank=True, null=True)
    finished_reading = models.DateTimeField(blank=True, null=True)
    cover_photo = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.title

