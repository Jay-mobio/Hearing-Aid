from fastapi import APIRouter, Response
from models.therapist import Therapist
from utils.enums import Collections
from database import db
from utils.crud import find_all, create, find_one, update, delete

router = APIRouter()

# MongoDB collection for therapists
collection = db[Collections.THERAPIST.value]

@router.post("/create")
async def create_therapist(response: Response, therapist: Therapist):
    """
    Endpoint to create a new therapist.

    Args:
        response: FastAPI Response object.
        therapist: Data model for the new therapist.

    Returns:
        dict: The inserted therapist or an error message.
    """
    try:
        inserted_therapist = create(collection=collection, model=therapist)
        return {
            "message": f"Therapist '{inserted_therapist['name']}' with ID '{inserted_therapist['_id']}' created successfully.",
            "updated_data":inserted_therapist
        }

    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error"
        }

@router.get("/")
async def get_therapists(response: Response):
    """
    Endpoint to retrieve all therapists.

    Args:
        response: FastAPI Response object.

    Returns:
        list: List of therapists or an error message.
    """
    try:
        therapist_list = find_all(collection=collection)
        return therapist_list

    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error"
        }

@router.get("/{id}")
async def get_therapist_by_id(response: Response, id: str):
    """
    Endpoint to retrieve a therapist by ID.

    Args:
        response: FastAPI Response object.
        id (str): String representation of the therapist's ObjectId.

    Returns:
        dict: The retrieved therapist or an error message.
    """
    try:
        therapist = find_one(collection=collection, id=id)
        return therapist

    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error"
        }

@router.patch("/update/{id}")
async def update_therapist(response: Response, therapist: Therapist, id: str):
    """
    Endpoint to update a therapist by ID.

    Args:
        response: FastAPI Response object.
        therapist: Updated data model for the therapist.
        id (str): String representation of the therapist's ObjectId.

    Returns:
        dict: The updated therapist or an error message.
    """
    try:
        updated_therapist = update(collection=collection, id=id, updated_data=therapist)
        return {
            "message": f"Therapist '{updated_therapist['name']}' with ID '{id}' updated successfully.",
            "updated_data":updated_therapist
        }
    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error"
        }

@router.delete("/delete/{id}")
async def delete_therapist(response: Response, id: str):
    """
    Delete a therapist document from the MongoDB collection.

    Args:
        response: FastAPI Response object.
        id (str): The string representation of the ObjectId of the therapist to be deleted.

    Returns:
        dict: A message indicating the success of the deletion.
    """
    try:
        # Delete the therapist document from the collection
        deleted_therapist = delete(collection=collection, id=id)

        return {
            "message": f"Therapist '{deleted_therapist['name']}' with ID '{id}' deleted successfully."
        }
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error"
        }