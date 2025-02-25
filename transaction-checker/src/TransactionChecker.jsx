import { useState } from "react";
import "./TransactionChecker.css"; 
import background from "./assets/main.image.jpg"; // Import image
import Header from "./Header"; 
const TransactionChecker = () => {
  const [transaction, setTransaction] = useState({
    id: "",
    amount: "",
    date: "",
    sender: "",
    receiver: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const checkTransaction = () => {
    console.log("Transaction Verified:", transaction);
  };

  return (
    <div
      className="transaction-checker-container"
      style={{ backgroundImage: `url(${background})` }} // Apply background dynamically
    >
      <div className="transaction-checker-box">
        <Header/>
        <h1 className="transaction-checker-title">Verify Your Transaction</h1>
        <p className="transaction-checker-description">
          Ensure the authenticity of your transaction quickly and securely.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="Transaction ID"
            value={transaction.id}
            onChange={handleChange}
            className="transaction-checker-input"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={transaction.amount}
            onChange={handleChange}
            className="transaction-checker-input"
          />
          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            className="transaction-checker-input"
          />
          <input
            type="text"
            name="sender"
            placeholder="Sender"
            value={transaction.sender}
            onChange={handleChange}
            className="transaction-checker-input"
          />
          <input
            type="text"
            name="receiver"
            placeholder="Receiver"
            value={transaction.receiver}
            onChange={handleChange}
            className="transaction-checker-input"
          />
        </div>
        <button
          onClick={checkTransaction}
          className="transaction-checker-button"
        >
          Verify Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionChecker;
