import React from 'react';
import { FaBars } from 'react-icons/fa'; // Removed FaMoon and FaSun
import { UserButton, useUser } from '@clerk/clerk-react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode, toggleSidebar, currentPage }) => {
  const { user } = useUser();

  // Convert page ID to title case for display
  const formatPageTitle = (page) => {
    if (page === 'home') return 'Dashboard';
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  return (
    <header className="app-header">
      {/* Left: Menu button */}
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars size={18} />
        </button>
        <div className="current-page">
          <span>{formatPageTitle(currentPage)}</span>
        </div>
      </div>

      {/* Center: CRM Title */}
      <div className="header-center">
        <div className="crm-main-title">
          <h1>CRM SYSTEM</h1>
          <p>Comprehensive Customer Relationship Management</p>
        </div>
      </div>

      {/* Right: User controls */}
      <div className="header-right">
        <span className="user-info">
          Welcome, {user?.firstName} {user?.lastName}
        </span>
        <span className="login-btn">
          <UserButton />
        </span>
        <span
          className="darkmode-toggle"
          onClick={toggleDarkMode}
          title="Toggle Dark Mode"
          role="button"
          tabIndex={0}
        >
          {darkMode ? '☀️' : '🌙'} {/* Replaced FaSun and FaMoon with emojis */}
        </span>
      </div>
    </header>
  );
};

export default Header;