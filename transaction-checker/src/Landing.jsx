import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Header from "./Header";
import TransactionChecker from "./TransactionChecker";
import background from "./assets/pic1.jpg"; // Import background image

const LandingPage = () => {
  return (
    <div className="landing-page">
    <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Secure & Reliable Transaction Checker</h1>
          <p>Verify your transactions instantly and securely.</p>
          <Link to="/transaction-checker" className="cta-button">
            Check Transaction
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-boxes">
          <div className="feature">
            <h3>Fast & Secure</h3>
            <p>Our system ensures real-time verification with top security.</p>
          </div>
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>Simple and intuitive interface for quick transaction verification.</p>
          </div>
          <div className="feature">
            <h3>Reliable</h3>
            <p>Trusted by thousands of users worldwide.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Secure Transactions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
