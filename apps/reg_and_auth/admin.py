from django.contrib import admin
from django.contrib.auth import get_user_model


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'surname', 'phone', 'email', 'role', 'password')
    search_fields = ('id', 'name', 'surname', 'phone', 'email', 'role', 'password')
    filter_fields = ('role',)


admin.site.register(get_user_model(), UserAdmin)
