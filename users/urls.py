from rest_framework import routers
from .api import UserViewSet, GroupViewSet, UsersViewSet

app_name = 'users'
router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/groups', GroupViewSet, 'groups')
router.register('api/user_add', UsersViewSet, 'user')

urlpatterns = router.urls