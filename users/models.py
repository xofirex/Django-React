from django.db import models

# Create your models here.
class Group(models.Model):
    group_name = models.CharField(max_length=64, blank=False, null=False, default=None, unique=True)
    description = models.TextField(blank=True, null=True, default=None)

    def __str__(self):
        return f'{self.group_name}'

    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'


class User(models.Model):
    user_name = models.CharField(max_length=64, blank=False, null=True, default=None, unique=True)
    group = models.ForeignKey(Group, blank=False, null=False, default=None, on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return f'{self.user_name}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

