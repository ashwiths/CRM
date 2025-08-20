import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="login-content">
        <div className="login-card">
          {/* Header Section */}
          <div className="login-header">
            <div className="login-logo">
              <div className="logo-icon">💼</div>
              <div className="logo-text-container">
                <h1 className="logo-main-text">CRM</h1>
                <p className="logo-sub-text">SYSTEM</p>
              </div>
            </div>
            <p className="login-tagline">
              Comprehensive Customer Relationship Management
            </p>
          </div>

          {/* Main Content Section */}
          <div className="login-main-content">
            <div className="welcome-section">
              <h2 className="welcome-title">Welcome Back</h2>
              <p className="welcome-message">
                Sign in to access your customer relationships and business insights
              </p>
            </div>

            <div className="features-section">
              <h3 className="features-title">Everything You Need</h3>
              <div className="features-grid">
                <div className="feature">
                  <span className="feature-icon">👥</span>
                  <span className="feature-text">Customer Management</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📊</span>
                  <span className="feature-text">Advanced Analytics</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔐</span>
                  <span className="feature-text">Secure Access</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span className="feature-text">Fast & Reliable</span>
                </div>
              </div>
            </div>

            <div className="signin-section">
              <SignInButton mode="modal">
                <button className="signin-button">
                  <span className="button-icon">🔑</span>
                  <span className="button-text">Sign In to Dashboard</span>
                  <span className="button-arrow">→</span>
                </button>
              </SignInButton>
            </div>
          </div>

          {/* Footer Section */}
          <div className="login-footer">
            <div className="stats-container">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;