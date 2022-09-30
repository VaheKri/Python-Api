from pydantic import BaseModel


class Monument(BaseModel):
    id: int
    name: str
    height: int
    city: str
    creation_date: str
    visitable: bool
