from django.contrib import admin

# Register your models here.
from .models import Appointment


class AppointmentAdmin(admin.ModelAdmin):
    fields = ['date', 'time', 'description']


admin.site.register(Appointment, AppointmentAdmin)