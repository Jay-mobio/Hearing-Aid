from fastapi import HTTPException
from bson import ObjectId

def find_all(collection):
    """
    Retrieve all documents from the given collection and convert ObjectId to string.

    Args:
        collection: The MongoDB collection.

    Returns:
        list: A list of documents with ObjectId converted to string.
    """
    try:
        # Retrieve all documents from the collection
        objs = collection.find()
        obj_list = list(objs)

        # Convert ObjectId to string in each document
        for obj in obj_list:
            obj["_id"] = str(obj["_id"])

        return obj_list
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        return e

def create(collection, model):
    """
    Insert a new document into the given collection.

    Args:
        collection: The MongoDB collection.
        model: The data model for the new document.

    Returns:
        dict: The inserted document with ObjectId converted to string.
    """
    try:
        # Insert the new document into the collection
        data = collection.insert_one(model.dict())

        # Find the inserted document using its ObjectId
        inserted_data = collection.find_one({"_id": data.inserted_id})

        # Convert ObjectId to string in the inserted document
        inserted_data['_id'] = str(inserted_data['_id'])

        return inserted_data
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        return e

def check_existence(collection, object_id):
    """
    Check if a document with the given ObjectId exists in the collection.

    Args:
        collection: The MongoDB collection.
        object_id: The ObjectId to check for existence.

    Returns:
        dict: The existing document with ObjectId converted to string.
    """
    existing_obj = collection.find_one({"_id": object_id})
    if not existing_obj:
        raise HTTPException(status_code=404, detail="Document not found")

    # Convert ObjectId to string in the existing document
    existing_obj["_id"] = str(existing_obj["_id"])

    return existing_obj

def find_one(collection, id):
    """
    Retrieve a single document from the given collection based on its ObjectId.

    Args:
        collection: The MongoDB collection.
        id (str): The string representation of the ObjectId.

    Returns:
        dict: The retrieved document with ObjectId converted to string.
    """
    try:
        # Convert the provided string to ObjectId
        object_id = ObjectId(id)

        # Check if the document with the given ObjectId exists
        existing_obj = check_existence(collection, object_id)

        return existing_obj
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        return e

def update(collection, id, updated_data):
    """
    Update a document in the given collection based on its ObjectId.

    Args:
        collection: The MongoDB collection.
        id (str): The string representation of the ObjectId.
        updated_data: The data model with the updated information.

    Returns:
        dict: The updated document with ObjectId converted to string.
    """
    try:
        # Convert the provided string to ObjectId
        object_id = ObjectId(id)

        # Check if the document with the given ObjectId exists
        check_existence(collection, object_id)

        # Update the document with the provided data
        collection.update_one({"_id": object_id}, {"$set": updated_data.dict()}, upsert=False)

        # Find and return the updated document
        updated_obj = collection.find_one({"_id": object_id})

        # Convert ObjectId to string in the updated document
        updated_obj["_id"] = str(updated_obj["_id"])

        return updated_obj
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        return e

def delete(collection, id):
    """
    Delete a document from the given collection based on its ObjectId.

    Args:
        collection: The MongoDB collection.
        id (str): The string representation of the ObjectId.

    Returns:
        dict: The deleted document with ObjectId converted to string.
    """
    try:
        # Convert the provided string to ObjectId
        object_id = ObjectId(id)

        # Check if the document with the given ObjectId exists before deletion
        existing_obj = check_existence(collection, object_id)

        # Delete the document from the collection
        collection.delete_one({"_id": object_id})

        # Convert ObjectId to string in the deleted document
        existing_obj["_id"] = str(existing_obj["_id"])

        return existing_obj
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        return e
