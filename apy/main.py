from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
from database.database import get_db, set_db
from schemas.country import Country
from schemas.population import Population
from schemas.monument import Monument

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/countrys/', status_code=201)
def create_country(country: Country):
    """
    Étienne
    Ajoute un nouveau pays
    @param country: Données à insérer
    @return: null
    """
    db = get_db()
    last_id = db['last_id']
    name = country.name.lower()

    for index, curr_country in enumerate(db['countrys']):
        if name == curr_country['name'].lower():
            raise HTTPException(304)

    country = {
        'id': last_id + 1,
        'name': country.name,
        'capital': country.capital,
        'president': country.president,
        'national_day': country.national_day,
        'currency': country.currency,
        'area': country.area
    }

    population = {
        'id': last_id + 1,
        "amount": 0,
        "life_span": 0.0,
        "smic": 0.0,
        "majority": 0
    }

    db['last_id'] = last_id + 1
    db['countrys'].append(country)
    db['populations'].append(population)
    set_db(db)


@app.put('/countrys/{name}', status_code=201)
def update_country(country: Country, name: str | None = None):
    """
    Antony
    Mets à jour un pays
    @param country: Données à insérer
    @param name: Nom du pays à mettre à jour
    @return: null
    """

    if name is None:
        return

    db = get_db()
    countrys = db['countrys']
    name = name.lower()
    i = -1

    for index, curr_country in enumerate(countrys):
        print(curr_country)
        if name == curr_country['name'].lower():
            i = index

    if i == -1:
        raise HTTPException(404)

    country = {
        'id': countrys[i]['id'],
        'name': countrys[i]['name'],
        'capital': country.capital,
        'president': country.president,
        'national_day': country.national_day,
        'currency': country.currency,
        'area': country.area,
    }

    db['countrys'][i] = country
    set_db(db)


@app.put('/populations/{population_id}', status_code=201)
def update_population(population_id: int, population: Population):
    """
    Maxime
    Mets à jour une population
    @param population_id: Identifiant unique du pays
    @param population: Données à insérer
    @return: null
    """

    if population_id is None:
        return

    db = get_db()
    i = -1

    for index, curr_population in enumerate(db['populations']):
        if population_id == curr_population['id']:
            i = index

    if i == -1:
        raise HTTPException(404)

    population = {
        'id': population_id,
        'amount': population.amount,
        'life_span': population.life_span,
        'smic': population.smic,
        'majority': population.majority
    }

    db['populations'][i] = population
    set_db(db)


# TODO GET BY ID & NAME
@app.put('/monuments/{monument_id}', status_code=201)
def update_monument(monument_id: int, monument: Monument):
    """
    Vahé
    Mets à jour ou créé un monument
    @param monument_id: Identifiant unique du pays
    @param monument: Données à insérer
    @return: null
    """
    if monument_id is None:
        return

    db = get_db()
    i = -1

    for index, curr_monument in enumerate(db['monuments']):
        if monument_id == curr_monument['id']:
            i = index

    monument = {
        'id': monument_id,
        'name': monument.name,
        'height': monument.height,
        'city': monument.city,
        'creation_date': monument.creation_date,
        'visitable': monument.visitable
    }

    if i == -1:
        db['monuments'].append(monument)
    else:
        db['monuments'][i] = monument

    set_db(db)


@app.get('/countrys/', status_code=200)
def get_countrys():
    """
    Étienne
    Récupère tous les pays
    @return: un tableau avec tous les pays existants
    """

    countrys = get_db()['countrys']
    return JSONResponse(content=jsonable_encoder(countrys))


@app.get('/populations/', status_code=200)
def get_populations():
    """
    Étienne
    Récupère toutes les populations
    @return: un tableau avec toutes les populations existantes
    """

    populations = get_db()['populations']
    return JSONResponse(content=jsonable_encoder(populations))


@app.get('/monuments/', status_code=200)
def get_monuments():
    """
    Antony
    Récupère tous les monuments
    @return: un tableau avec tous les monuments existants
    """

    monuments = get_db()['monuments']
    return JSONResponse(content=jsonable_encoder(monuments))


@app.get('/countrys/{name}', status_code=200)
def get_country(name: str | None = None):
    """
    Maxime & Étienne
    Récupère les informations d'un pays à l'aide de son nom
    @param name: Nom du pays
    @return: Les informations du pays souhaité s'il existe
    """

    if name is None:
        return {}

    countrys = get_db()['countrys']
    name = name.lower()
    data = {}

    for index, country in enumerate(countrys):
        if name == country['name'].lower():
            data = countrys[index]

    return JSONResponse(content=jsonable_encoder(data))


@app.get('/populations/{population_id}', status_code=200)
def get_population(population_id: int | None = None):
    """
    Maxime
    Récupère les informations d'une population avec son identifiant
    @param population_id: Identifiant unique du pays
    @return: si il existe, les informations de la population du pays
    """

    if population_id is None:
        return {}

    populations = get_db()['populations']
    data = {}

    for index, population in enumerate(populations):
        if population_id == population['id']:
            data = population

    return JSONResponse(content=jsonable_encoder(data))


@app.get('/monuments/{monument_id}', status_code=200)
def get_monument(monument_id: int):
    """
    Vahé
    Récupère les informations d'un ou plusieurs monument(s) avec son identifiant
    @param monument_id: Identifiant unique du pays
    @return: s'il existe, un ou plusieurs monuments d'un pays
    """

    if monument_id is None:
        return {}

    monuments = get_db()['monuments']
    data = []

    for index, monument in enumerate(monuments):
        if monument_id == monument['id']:
            data.append(monuments[index])

    return JSONResponse(content=jsonable_encoder(data))


@app.delete('/countrys/{name}', status_code=204)
def delete_country(name: str | None = None):
    """
    Étienne
    Supprime un pays à l'aide de son nom
    @param name: Nom du pays à supprimer
    @return: null
    """

    if name is None:
        return

    name = name.lower()
    db = get_db()
    country_id = -1

    for index, country in enumerate(db['countrys']):
        if name == country['name'].lower():
            del db['countrys'][index]
            country_id = country['id']

    if country_id == -1:
        raise HTTPException(404)

    for index, monument in enumerate(db['monuments']):
        if country_id == monument['id']:
            del db['monuments'][index]

    for index, population in enumerate(db['populations']):
        if country_id == population['id']:
            del db['populations'][index]

    set_db(db)
