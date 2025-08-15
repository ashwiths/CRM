import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page-centerer">
      <div className="about-card pop-in">
        <div className="about-icon-main">
          <FaInfoCircle size={40} color="#4181e2" />
        </div>
        <h2 className="about-title">About This CRM</h2>
        <p className="about-caption">
          A modern platform to unify your customer management and business growth.
        </p>
        <ul className="about-feature-list">
          <li>📝 Fast Registration & Search</li>
          <li>📋 Centralized Customer Profiles</li>
          <li>🔍 Track Interactions & History</li>
          <li>📈 Smart Analytics & Easy Access</li>
        </ul>
        <div className="about-footer">
          <span style={{ color: "#256def" }}>Empower your team. Grow your business.</span>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
