from django.urls import path
from .views import index

# URLs for frontend app
urlpatterns = [
    path('', index)
]