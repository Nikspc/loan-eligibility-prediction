from fastapi import FastAPI
from backend.models.user_input import UserInput
from backend.utils.predict import make_prediction

app = FastAPI(
    title="Loan Eligibility Prediction System",
    description="Predicts if a customer is eligible for a loan",
    version="1.0"
)

@app.get("/")
def read_root():
    return {"message": "Loan Eligibility API is Live!"}

@app.post("/predict-loan/")
def predict_loan(input_data: UserInput):
    prediction = make_prediction(input_data)
    if prediction is None:
        return {"error": "Could not process the input"}
    return {
        "eligible": bool(prediction),
        "message": "Eligible for loan" if prediction else "Not eligible for loan"
    }