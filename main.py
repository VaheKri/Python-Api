from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from database import get_db, set_db
from country import Country
from monument import Monument

app = FastAPI()


# get
# /populations/{id}
# /monuments/{id}

# update
# /countrys/{name}
# /populations/{id}
# /monuments/{id}

# Antony
@app.get('/monuments', status_code=200)
def get_monuments():
    monuments = get_db()["monuments"]
    return JSONResponse(content=jsonable_encoder(monuments))

# Antony
@app.put('/countrys/{name}', status_code=201)
def update_country(country: Country, name: str | None = None):
    db = get_db()
    countrys = db["countrys"]
    if name is None:
        return

    name = name.lower()

    i = -1

    for index, curr_country in enumerate(countrys):
        print(curr_country)
        if name == curr_country['name'].lower():
            i = index

    country = {
        "id": countrys[i]["id"],
        "name": countrys[i]["name"],
        "capital": country.capital,
        "president": country.president,
        "national_day": country.national_day,
        "currency": country.currency,
        "flag": country.flag,
        "area": country.area,
    }

    db["countrys"][i] = country
    set_db(db)

# Vahé
@app.put('/monuments/{id}', status_code=201)
def update_monument(id: int, monument: Monument):
    if id is None:
        return

    db = get_db()
    i = -1

    for index, curr_monument in enumerate(db['monuments']):
        if id == curr_monument['id']:
            i = index

    monument = {
        "id": id,
        "name": monument.name,
        'height': monument.height,
        'city': monument.city,
        'creation_date': monument.creation_date,
        'visitable': monument.visitable
    }

    db['monuments'][i] = monument
    set_db(db)


# Vahé
@app.get('/monuments/{id}', status_code=200)
def get_monument(id: int):
    if id is None:
        return

    monuments = get_db()['monuments']
    data = {}

    for index, monument in enumerate(monuments):
        if id == monument['id']:
            data = monuments[index]

    return JSONResponse(content=jsonable_encoder(data))

# Étienne
@app.post('/countrys', status_code=201)
def create_country(country: Country):
    data = get_db()

    country = {
        "id": country.id,
        "name": country.name,
        "capital": country.capital,
        "president": country.president,
        "national_day": country.national_day,
        "currency": country.currency,
        "flag": country.flag,
        "area": country.area
    }

    data['countrys'].append(country)
    set_db(data)
    return


# Étienne
@app.get('/countrys', status_code=200)
def get_countrys():
    countrys = get_db()['countrys']
    return JSONResponse(content=jsonable_encoder(countrys))


# Maxime & Étienne
@app.get('/countrys/{name}', status_code=200)
def get_country(name: str | None = None):
    countrys = get_db()['countrys']
    data = {}

    if name is None:
        return data

    name = name.lower()

    for index, country in enumerate(countrys):
        if name == country['name'].lower():
            data = countrys[index]

    return JSONResponse(content=jsonable_encoder(data))


# Étienne
@app.delete('/countrys/{name}', status_code=204)
def delete_country(name: str | None = None):
    data = get_db()

    if name is None:
        return

    name = name.lower()

    for index, country in enumerate(data['countrys']):
        if name == country['name'].lower():
            del data['countrys'][index]
            set_db(data)
    return
