import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function HomePage({ darkMode, toggleDarkMode }) {
  return (
    <div className="home-page-centerer">
      <div className="home-card pop-in">
        {/* Dark Mode Toggle icon in top-right corner */}
        <div className="darkmode-toggle" onClick={toggleDarkMode} title="Toggle Dark Mode">
          {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </div>

        <div className="home-lock">
          <span role="img" aria-label="dashboard">📊</span>
        </div>
        <h2 className="home-title">Welcome to Your CRM Dashboard</h2>
        <p className="home-caption">
          Effortlessly manage, grow, and engage with your customers.<br />
          Enjoy modern analytics, interactive tracking, and fast onboarding.
        </p>
        <div className="home-feature-cards">
          <div className="feature-card slide-left">
            <span className="icon">👥</span>
            <h4>Customer Management</h4>
            <p>Store details, segment by type, and edit anytime.</p>
          </div>
          <div className="feature-card slide-up">
            <span className="icon">📝</span>
            <h4>Interaction Logging</h4>
            <p>Track purchases, inquiries, complaints, returns, and more—all in one place.</p>
          </div>
          <div className="feature-card slide-right">
            <span className="icon">📈</span>
            <h4>Analytics Ready</h4>
            <p>See business insights and optimize growth from day one.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
