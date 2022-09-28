from pydantic import BaseModel

class Population(BaseModel):
    id: int
    amount: int
    life_span: float
    smic: float
    majority: int
