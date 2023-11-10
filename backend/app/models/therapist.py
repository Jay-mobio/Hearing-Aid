from pydantic import BaseModel
from typing import List


class Therapist(BaseModel):
    name: str
    email: str
    phone: str
    specialization: str
    experience_years: int
    street: str
    city: str
    state: str
    zip_code: str
    contact: str
    languages: List[str]