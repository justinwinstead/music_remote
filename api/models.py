from django.db import models
import string
import random

# creates unique 6 character ascii string to be used as Room code
def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))

        if Room.objects.filter(code=code).count() == 0:
            break
    
    return code

# model that allows users to connect and control music
#  code: a string of no more than 8 characters that users will use to connect to the Room
#  host: a string of no more than 50 characters that identifies the host of the Room
#  guest_can_pause: boolean value indicating whether guests in the Room can pause the music
#  votes_to_skip: integer value that dictates how many users want to skip the current song
#  created_at: a datetime value that is autogenerated when the room is created
class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
