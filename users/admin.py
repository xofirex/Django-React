from django.contrib import admin
from .models import *

# Register your models here.

class GroupAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Group._meta.fields]


    class Meta:
        model = Group
admin.site.register(Group, GroupAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = [field.name for field in User._meta.fields]

    class Meta:
        model = User


admin.site.register(User, UserAdmin)