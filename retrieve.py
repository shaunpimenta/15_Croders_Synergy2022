# Import database module.
# from firebase_admin import db
from firebase_admin import credentials,firestore
import firebase_admin
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALs"] = "firebase-private-key.json"
# import firebase
cred = credentials.Certificate('firebase-private-key.json')
firebase_admin.initialize_app(cred)
db = firestore.Client('crescendo-47764')

users=db.collections("Users")
usersStream = users.stream()
print(usersStream)