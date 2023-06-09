from rest_framework import serializers
from .models import Room

# class to serialize Room model to JSON
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'id',
            'code',
            'host',
            'guest_can_pause',
            'votes_to_skip',
            'created_at'
        )

# class to serialize CreateRoom POST request into Python   
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'guest_can_pause',
            'votes_to_skip'
        )