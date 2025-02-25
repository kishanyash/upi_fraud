# *UPI Fraud Detection using Machine Learning*

## *Overview*
This project implements a *Machine Learning-based UPI Fraud Detection System* to identify and prevent fraudulent transactions in real-time. It leverages *Logistic Regression* models to classify transactions as *fraudulent or genuine* based on various transaction parameters.

## *Features*
✅ Real-time fraud detection with high accuracy  
✅ Machine Learning-based approach with Logistic Regression  
✅ Smart data balancing using *SMOTE* to handle class imbalance  
✅ Feature scaling for improved model performance  
✅ API-ready for seamless integration with fintech platforms  

## *Tech Stack*
- *Programming Language*: Python 🐍
- *Machine Learning*: Scikit-Learn
- *Data Handling*: Pandas, NumPy
- *Model Training & Tuning*: GridSearchCV, Hyperparameter Optimization
- *Data Balancing*: SMOTE (Synthetic Minority Over-sampling Technique)
- *Deployment (Future Scope)*: FastAPI / Flask for API integration

## *Dataset*
- The dataset is stored in *processed_data.csv*.
- Contains transaction records with features such as *transaction amount, device details, time of transaction, and historical patterns*.
- Target column: *"Is Fraud?" (Binary: 0 for genuine, 1 for fraud)*

## *Installation & Setup*
1. *Clone the repository*
   sh
   git clone https://github.com/yourusername/UPI-Fraud-Detection.git
   cd UPI-Fraud-Detection
   
2. *Create a virtual environment (optional but recommended)*
   sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
3. *Install dependencies*
   sh
   pip install -r requirements.txt
   
4. *Run the model training script*
   sh
   python fraud_detection.py
   

## *Model Performance*
| Model                 | Accuracy | ROC-AUC Score |
|----------------------|----------|--------------|
| Logistic Regression  | 90.46%    | 91.47%         |

## *How It Works*
1. *Data Preprocessing*: Cleans and normalizes transaction data.
2. *Feature Engineering*: Extracts relevant transaction behavior patterns.
3. *Model Training*: Uses ML algorithms with hyperparameter tuning.
4. *Fraud Prediction*: Classifies transactions as fraudulent or genuine.
5. *Deployment (Future Scope)*: Can be integrated via API for real-time fraud detection.

## *Future Enhancements*
🔹 Implement *deep learning models* for enhanced fraud detection.  
🔹 Deploy as a *REST API* for real-time fintech integration.  
🔹 Use *Graph-based anomaly detection* to identify fraud networks.  
🔹 Add *Explainable AI (XAI)* methods like SHAP for transparency.  

## *Contributing*
Contributions are welcome! Feel free to open issues or submit pull requests.  


---
💡 *Developed as part of the NPCI Fintech Hackathon 🚀*
