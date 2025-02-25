import React from "react";
import "./About.css";
import Header from "../Header";
const About = () => {
  return (
    <div className="about-container">
        <Header/>
      <h1>About Transaction Checker</h1>
      <p>
        Transaction Checker is a simple tool that helps you verify and track your 
        financial transactions effortlessly. Our goal is to provide a secure and 
        user-friendly experience to ensure transparency in your transactions.
      </p>
      <p>
        Whether you're managing personal finances or tracking business expenses, 
        Transaction Checker simplifies the process for you.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team">
        <div className="team-member">
          <h3>Sajjad Chaus</h3>
          <p>Team Lead & AI Developer</p>
        </div>
        <div className="team-member">
          <h3>Pratik Gupta</h3>
          <p>Backend Developer</p>
        </div>
        <div className="team-member">
          <h3>Kishan Yadav</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;