from django.db import models
from django.utils import timezone

now = timezone.now()


class Appointment(models.Model):
    date = models.DateField(default=now, editable=True)
    time = models.TimeField(default=now, editable=True)
    description = models.CharField(max_length=50)

    def __str__(self):
        return "Description: " + self.description

    class Meta:
        ordering = ['date', 'time']