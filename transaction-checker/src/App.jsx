import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Landing"; 
import TransactionChecker from "./TransactionChecker";
import About from "./assets/About";
import FraudChecker from "./FraudChecker"; // Import the FraudChecker component

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/transaction-checker">Transaction Checker</Link> | 
                <Link to="/fraud-checker">My Fraud Checker</Link> | 
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/transaction-checker" element={<TransactionChecker />} />
                <Route path="/fraud-checker" element={<FraudChecker />} /> 
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
