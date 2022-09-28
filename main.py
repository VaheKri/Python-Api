from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from database import get_db, set_db
from country import Country
from population import Population

app = FastAPI()


# /monuments/{id}


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


#maxime
@app.get('/populations/{id}', status_code=200)
def get_population(id: int | None = None):
    populations = get_db()['populations']
    data = {}

    if id is None:
        return data

    for index, population in enumerate(populations):
        if id == population['id']:
            data = population

    return JSONResponse(content=jsonable_encoder(data))


#maxime
@app.put('/populations/{id}', status_code=201)
def update_population(id: int, population: Population):
    if id is None:
        return

    db = get_db()
    i = -1

    for index, curr_population in enumerate(db['populations']):
        if id == curr_population['id']:
            i = index

    population = {
        "id": db['populations'][i]['id'],
        "amount": population.amount,
        'life_span': population.life_span,
        'smic': population.smic,
        'majority': population.majority
    }

    db['populations'][i] = population
    set_db(db)