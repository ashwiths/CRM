import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <h2>Welcome to Your CRM Dashboard</h2>
        <p className="welcome-subtitle">
          Effortlessly manage, grow, and engage with your customers.
        </p>
        <p className="welcome-description">
          Enjoy modern analytics, interactive tracking, and fast onboarding.
        </p>
      </div>

      <div className="divider"></div>

      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">💬</div>
          <div className="feature-content">
            <h3>Interaction Logging</h3>
            <p>Track purchases, inquiries, complaints, returns, and more—all in one centralized place.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">📈</div>
          <div className="feature-content">
            <h3>Analytics Ready</h3>
            <p>See business insights, generate reports, and make data-driven decisions with comprehensive analytics.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🔍</div>
          <div className="feature-content">
            <h3>Advanced Search</h3>
            <p>Quickly find customers, interactions, or orders with our powerful search and filter capabilities.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">👥</div>
          <div className="feature-content">
            <h3>Customer Management</h3>
            <p>Store detailed customer profiles, segment by type, and manage relationships effectively.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🛡️</div>
          <div className="feature-content">
            <h3>Secure Access</h3>
            <p>Role-based authentication ensures data security with different access levels for team members.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">⚡</div>
          <div className="feature-content">
            <h3>Fast & Responsive</h3>
            <p>Modern React interface provides seamless experience across all devices and screen sizes.</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Active Customers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1.2K+</div>
          <div className="stat-label">Interactions Logged</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99.9%</div>
          <div className="stat-label">System Uptime</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </div>

      <div className="cta-section">
        <h3>Ready to Get Started?</h3>
        <p>Begin managing your customer relationships more effectively today.</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Explore Features</button>
          <button className="cta-btn secondary">View Documentation</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;