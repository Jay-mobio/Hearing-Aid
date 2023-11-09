from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.assessment_crud import router as assement_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def home():
    return {"Welcome to hearing aid"}

app.include_router(assement_router, prefix="/assessment", tags=["assessment"])