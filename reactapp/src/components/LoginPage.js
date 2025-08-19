import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-background">
      <div className="login-card">
        {/* Avatar Circle */}
        <div className="login-avatar">
          <img
            src="/crm-image.png"
            alt="CRM Login"
            className="login-img"
          />
        </div>

        {/* Titles */}
        <h1 className="login-title">CRM SYSTEM</h1>
        <h2 className="login-subtitle">Welcome to CRM</h2>

        {/* Clerk Sign In Button */}
        <SignInButton mode="modal">
          <button className="sign-in-btn">Sign In</button>
        </SignInButton>
      </div>
    </div>
  );
}
