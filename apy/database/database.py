import json


def get_db():
    """
    Retourne tout le json
    @return: Les données du json, None dans le cas d'une erreur
    """
    try:
        db = open('./database/db.json', 'r')
        data = json.load(db)
        db.close()
        return data
    except IOError:
        return None


def set_db(data):
    """
    Remplace l'entièreté du json avec les nouvelles
    @param data: Nouvelles données du json
    @return: None
    """
    try:
        db = open('./database/db.json', 'w')
        json.dump(data, db, indent=4)
        return db.close()
    except IOError:
        return None
