import json


def get_json():
    try:
        db = open('db.json')
        return json.load(db)
    except IOError:
        return None
