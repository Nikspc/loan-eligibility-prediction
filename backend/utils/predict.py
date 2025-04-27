import joblib
import numpy as np

# Load the model once
model = joblib.load('backend/ml_model/model.pkl')

# Mapping for employment_status encoding
employment_status_map = {
    "Employed": 0,
    "Self-employed": 1,
    "Unemployed": 2
}

def make_prediction(data):
    try:
        employment_status_encoded = employment_status_map.get(data.employment_status, 2)
        features = np.array([[data.age, data.income, employment_status_encoded, data.credit_score, data.existing_loans]])
        prediction = model.predict(features)[0]
        return prediction
    except Exception as e:
        print(f"Prediction Error: {e}")
        return None