from django.urls import path
from .views import RoomView

# URLs for api apps
urlpatterns = [
    path('room', RoomView.as_view()),
]
