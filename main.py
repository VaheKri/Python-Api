from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from database import get_json

app = FastAPI()


@app.get("/countrys")
def get_country(name: str | None = None):
    data = get_json()["countrys"]

    if name is None:
        return data

    name = name.lower()

    for index, country in enumerate(data):
        if name == country['name'].lower():
            data = data[index]

    return JSONResponse(content=jsonable_encoder(data))
