from django.db import models

class Feature(models.Model):
    title = models.CharField(max_length=255)
    upvotes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
