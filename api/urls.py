from django.urls import path
from .views import RoomView, CreateRoomView

# URLs for api apps
urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view())
]
