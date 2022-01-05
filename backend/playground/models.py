from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Author(models.Model):
    first_name = models.TextField()
    last_names = models.TextField()
    added_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_names)


class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.DO_NOTHING)
    added_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.TextField()
    pages = models.IntegerField()
    started_reading = models.DateTimeField(blank=True, null=True)
    finished_reading = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title

