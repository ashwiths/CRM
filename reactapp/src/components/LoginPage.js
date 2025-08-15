import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-bg">
      <div className="login-center">
        <div className="login-glass">
          <div className="login-logo-wrap">
            <span className="login-logo" role="img" aria-label="dashboard">📊</span>
          </div>
          <h1 className="login-title">CRM SYSTEM</h1>
          <h2 className="login-subtitle">Welcome to CRM</h2>
          <p className="login-desc">
            Connect and manage your customers in a modern, secure way.<br />
            Fast onboarding, real-time analytics and more.
          </p>
          <SignInButton mode="modal">
            <button className="login-btn">
              <span role="img" aria-label="key" className="login-key">🔑</span> Sign In
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}
