from fastapi import FastAPI, HTTPException, Query, Path
from pydantic import BaseModel
from typing import List, Optional
from datetime import date
import uuid

app = FastAPI()

# Sample data
books = [
    {
        "id": "1",
        "title": "Book1",
        "author": "John",
        "genre": "Fiction",
        "availability": True,
    },
    {
        "id": "2",
        "title": "Book2",
        "author": "Kevin",
        "genre": "Non-Fiction",
        "availability": False,
    },
    {
        "id": "3",
        "title": "Book3",
        "author": "Ryan",
        "genre": "Fiction",
        "availability": True,
    },
]


# Models
class Book(BaseModel):
    id: str
    title: str
    author: str
    genre: str
    availability: bool


class ReservationRequest(BaseModel):
    userId: str
    bookId: str


class Reservation(BaseModel):
    id: str
    userId: str
    bookId: str


## sammple db
reservations = []


# Routes
@app.get("/books/search", response_model=List[Book])
def search_books(
    query: Optional[str] = Query(None),
):
    result = [book for book in books if query.lower() in book["title"].lower()]

    return result


@app.get("/books/{bookId}", response_model=Book)
def get_book(bookId: str = Path(..., title="The ID of the book to retrieve")):
    book = next((book for book in books if book["id"] == bookId), None)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    return book


@app.post("/reservation", response_model=Reservation, status_code=201)  # 201 Created
def create_reservation(reservation: ReservationRequest):
    reservation = Reservation(id=str(uuid.uuid4()), **reservation.dict())
    reservations.append(reservation.dict())
    return reservation
