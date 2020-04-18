from rest_framework import serializers
from .models import Group, User


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'group_name', 'description')

class UserSerializer(serializers.ModelSerializer):
    group = serializers.ReadOnlyField(source='group.group_name')
    created = serializers.DateTimeField(format="%d-%m-%Y")
    class Meta:
        model = User
        fields = ('id', 'user_name', 'group', 'created')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'user_name','group', 'created')



