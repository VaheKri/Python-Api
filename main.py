from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
message = 'default message'


@app.get("/")
def read_root():
    return {"Hello": "World!"}


@app.get("/message")
def get_message():
    return {"message": message}


@app.patch("/message")
def set_message(text: str = message):
    global message
    message = text
    return {"message": text}


@app.delete("/message")
def clear_message():
    global message
    message = ''
    return {"message": message}
