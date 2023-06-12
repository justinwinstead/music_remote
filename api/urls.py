from django.urls import path
from .views import RoomView, CreateRoomView, GetRoomView

# URLs for api apps
urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoomView.as_view()),
]
