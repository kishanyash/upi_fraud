import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS  # Enable CORS for frontend integration

app = Flask(__name__)
CORS(app)  # Allow API access from React frontend

# Load ML model & scaler
with open("best_Logistic_Regression.pkl", "rb") as model_file:
    model = pickle.load(model_file)


@app.route("/")  
def home():
    return "UPI Fraud Detection API is Running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        input_data = pd.DataFrame([data])

        # Define required columns
        required_columns = [
            "TransactionAmount", "SenderID", "ReceiverID", "DeviceID",
            "TransactionTime", "TransactionType", "Location", "PreviousFraudReports"
        ]

        # Check if all required columns are in input data
        if not all(col in input_data.columns for col in required_columns):
            return jsonify({"error": f"Missing columns. Required: {required_columns}"}), 400

        # Convert TransactionAmount & PreviousFraudReports to numeric
        input_data["TransactionAmount"] = pd.to_numeric(input_data["TransactionAmount"], errors="coerce")
        input_data["PreviousFraudReports"] = pd.to_numeric(input_data["PreviousFraudReports"], errors="coerce")

        # Handle NaN values (if any)
        if input_data.isnull().values.any():
            return jsonify({"error": "Invalid data: contains NaN values"}), 400

        # Scale the data
        scaled_data = scaler.transform(input_data)

        # Make prediction
        prediction = model.predict(scaled_data)

        response = {
            "prediction": "Fraudulent Transaction" if prediction[0] == 1 else "Legitimate Transaction"
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
