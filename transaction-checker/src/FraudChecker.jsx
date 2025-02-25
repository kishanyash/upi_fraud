import React, { useState } from "react";
import axios from "axios";
import "./assets/FraudChecker.css"; // Import CSS for styling
import Header from "./Header"; 
function FraudChecker() {
    const [transactionAmount, setTransactionAmount] = useState("");
    const [prediction, setPrediction] = useState("");

    const checkFraud = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", {
                TransactionAmount: parseFloat(transactionAmount),
                SenderID: "User123",
                ReceiverID: "Merchant789",
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="fraud-container">
             <Header />
            <h1 className="title">UPI Fraud Checker</h1>
            <input
                type="number"
                className="input-field"
                placeholder="Enter Transaction Amount"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <button className="check-btn" onClick={checkFraud}>
                Check Fraud
            </button>
            {prediction && <p className="prediction">Prediction: {prediction}</p>}
        </div>
    );
}

export default FraudChecker;
