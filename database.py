import json


def get_db():
    try:
        db = open('db.json', 'r')
        data = json.load(db)
        db.close()
        return data
    except IOError:
        return None


def set_db(data):
    print(data)
    try:
        db = open('db.json', 'w')
        json.dump(data, db, indent=4)
        return db.close()
    except IOError:
        return None
