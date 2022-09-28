from pydantic import BaseModel


class Country(BaseModel):
    id: int
    name: str
    capital: str
    president: str
    national_day: str
    currency: str
    flag: str
    area: int
