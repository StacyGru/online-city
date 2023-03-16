from django.contrib import admin
from . import models


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'surname', 'phone', 'email', 'role', 'login', 'password')
    search_fields = ('id', 'name', 'surname', 'phone', 'email', 'role', 'login', 'password')
    filter_fields = ('name', 'surname', 'phone', 'email', 'role', 'login', 'password')


admin.site.register(models.User, UserAdmin)
