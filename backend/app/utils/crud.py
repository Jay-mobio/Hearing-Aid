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

        # Find the document with the given ObjectId
        obj = collection.find_one({"_id": object_id})

        # Convert ObjectId to string in the retrieved document
        obj["_id"] = str(obj["_id"])

        return obj
    except Exception as e:
        # Handle the exception, e.g., log it or return an error response
        print(f"Error: {e}")
        return e
