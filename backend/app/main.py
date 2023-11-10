from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.assessment import router as assement_router
from routes.therapist import router as therapist_router


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
app.include_router(therapist_router, prefix="/therapist", tags=["therapist"])