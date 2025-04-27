# Loan Eligibility Prediction System

This project uses a **Machine Learning (ML)** model to predict loan eligibility based on user inputs, such as income, credit score, employment status, etc. The backend is built using **FastAPI** to serve the prediction functionality, while the model is trained using **scikit-learn**.

---

## Prerequisites

Before you start, ensure that you have the following installed:

- Python 3.x
- pip (Python package installer)
- Jupyter Notebook (for training the ML model)

---

## Project Structure

```
loan_eligibility_app/
│
├── backend/
│   ├── main.py               # FastAPI application entry point
│   ├── models/
│   │     └── user_input.py   # Pydantic model for validating user input
│   ├── ml_model/
│   │     ├── train_model.ipynb  # Jupyter notebook for training the ML model
│   │     └── model.pkl          # Saved machine learning model (generated after training)
│   ├── utils/
│   │     └── predict.py       # Prediction logic (loads trained model)
│   └── database/
│         └── db_config.py     # (Optional) Database configuration if saving user input
│
├── requirements.txt           # List of required Python packages
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore file
```

---

## Steps to Set Up and Run

### 1. **Clone the Repository**

If you haven't already, clone the repository to your local machine:

```bash
git clone https://github.com/Nikspc/loan-eligibility-prediction.git
cd loan_eligibility_app
```

---

### 2. **Set Up a Virtual Environment**

It's recommended to create a virtual environment to isolate your dependencies:

```bash
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
```

---

### 3. **Install Dependencies**

Install the required dependencies using `pip`:

```bash
pip install -r requirements.txt
```

---

### 4. **Train the Machine Learning Model**

To train the model, we use the `train_model.ipynb` notebook. This will generate a trained model and save it as `model.pkl` for later use in predictions.

#### Steps to Train the Model:

1. Launch **Jupyter Notebook**:

   If you don't have Jupyter Notebook installed, you can install it using:
   ```bash
   pip install notebook
   ```

2. Navigate to the `backend/ml_model` folder and start Jupyter Notebook:

   ```bash
   jupyter notebook
   ```

3. Open the `train_model.ipynb` notebook.

4. Run all the cells in the notebook, which will:
   - Generate synthetic data for training.
   - Train a logistic regression model.
   - Save the trained model as `model.pkl` in the `ml_model` directory.

---

### 5. **Run the FastAPI Server**

After training the model, you can start the FastAPI server to expose the prediction functionality:

1. In the terminal (inside the project folder), run:

   ```bash
   uvicorn backend.main:app --reload
   ```

2. The server should now be running at [http://127.0.0.1:8000](http://127.0.0.1:8000).

3. You can test the loan eligibility prediction API via the auto-generated Swagger UI at:
   [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 6. **Test the Prediction API**

To test the loan eligibility prediction, send a POST request to the `/predict-loan/` endpoint with a JSON payload. For example:

**Request:**
```json
{
  "age": 30,
  "income": 75000,
  "employment_status": "Employed",
  "credit_score": 720,
  "existing_loans": 1
}
```

**Response:**
```json
{
  "eligible": true,
  "message": "Eligible for loan"
}
```

---

### 7. **Stopping the Server**

To stop the FastAPI server, simply press `CTRL + C` in the terminal where the server is running.

**Frontend Setup**
Navigate to the frontend directory:

cd frontend
Install Frontend Dependencies: Install all the necessary frontend packages with:

npm install
Run the React Development Server: Start the React app with:

npm start
The frontend will be running at http://localhost:3000.
---

## Technologies Used
-**Frontend Framework**: ReactJs
- **Backend Framework**: FastAPI
- **Machine Learning**: scikit-learn
- **Model Saving**: joblib
- **Data Validation**: Pydantic
- **Web Server**: Uvicorn

---

## Folder Structure Details

### 1. **`backend/`**
This is the core directory where the FastAPI server and related files live.

- **`main.py`**: The FastAPI application entry point. It defines the `/predict-loan/` API endpoint.
- **`models/user_input.py`**: A Pydantic model to validate and parse the input from the API request.
- **`ml_model/`**: Contains the Jupyter notebook for training the model (`train_model.ipynb`) and the saved model file (`model.pkl`).
- **`utils/predict.py`**: Contains the logic to load the trained model and perform predictions.

### 2. **`requirements.txt`**
This file lists all the necessary Python packages required to run the project. Install them using `pip install -r requirements.txt`.

---


## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.

