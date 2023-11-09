from fastapi import APIRouter, Response
from models.assessment_model import Assessments
from utils.enums import Collections
from database import db
from utils.crud import find_all, create, find_one

router = APIRouter()

# Get the MongoDB collection for assessments
collection = db[Collections.ASSESSMENTS.value]

@router.post("/create")
async def create_assessments(response:Response,assessments: Assessments):
    """
    Create a new assessment and insert it into the MongoDB collection.

    Args:
        assessments (Assessments): The data model for the new assessment.

    Returns:
        dict: The inserted assessment with ObjectId converted to string.
    """
    try:
        inserted_assessments = create(collection=collection, model=assessments)
        return inserted_assessments

    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error", 
        }

@router.get("/")
async def get_assessments(response:Response,):
    """
    Retrieve all assessments from the MongoDB collection.

    Returns:
        list: A list of assessments with ObjectId converted to string.
    """
    try:
        assessments_list = find_all(collection=collection)
        return assessments_list

    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error",
        }

@router.get("/{id}")
async def get_assessment(response:Response,id: str):
    """
    Retrieve a single assessment from the MongoDB collection based on its ObjectId.

    Args:
        id (str): The string representation of the ObjectId.

    Returns:
        dict: The retrieved assessment with ObjectId converted to string.
    """
    try:
        assessments_list = find_one(collection=collection, id=id)
        return assessments_list

    except Exception as e:
        print(f"Error: {e}")
        response.status_code = 500
        return {
            "message": "Internal Server Error",
        }