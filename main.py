from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from database import get_db, set_db
from country import Country

app = FastAPI()


# get
# /populations/{id}
# /monuments/{id}

# update
# /countrys/{name}
# /populations/{id}
# /monuments/{id}

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
