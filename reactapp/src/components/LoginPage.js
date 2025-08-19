import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-background">
      <div className="login-card">
        <div className="login-avatar">
  <img
  src={process.env.PUBLIC_URL + "/crm-image.png"}
  alt="CRM Login"
  className="login-img"
/>

</div>

        <h1 className="login-title">CRM SYSTEM</h1>
        <h2 className="login-subtitle">Welcome to CRM</h2>
        <SignInButton mode="modal">
          <button className="sign-in-btn">Sign In</button>
        </SignInButton>
      </div>
    </div>
  );
}
