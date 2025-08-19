import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import CustomerDetails from './components/CustomerDetails';
import AboutPage from './components/AboutPage';
import Dashboard from './components/Dashboard';
import AgentList from './components/AgentList';
import HomePage from './components/HomePage';
import TaskPage from './components/TaskPage';
import LoginPage from './components/LoginPage';   // ✅ Added Import
import './App.css';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { FaMoon, FaSun, FaInfoCircle } from "react-icons/fa";

function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [refreshList, setRefreshList] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("Dark mode toggled:", !darkMode);
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`app-container${darkMode ? " dark-mode" : ""}`}>
      {/* Signed In View */}
      <SignedIn>
        <header className="app-header">
          {/* Branding + Dark Mode + User */}
          <div className="branding">
            <h1 className="glitter-title">-CRM System-</h1>
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
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </span>
          </div>

          {/* Navigation Tabs */}
          <nav className="nav-tabs">
            <button
              className={currentPage === 'home' ? 'nav-tab active' : 'nav-tab'}
              onClick={() => { setCurrentPage('home'); setSelectedCustomerId(null); }}
            >Home</button>

            <button
              className={currentPage === 'dashboard' ? 'nav-tab active' : 'nav-tab'}
              onClick={() => { setCurrentPage('dashboard'); setSelectedCustomerId(null); }}
            >Dashboard</button>

            <button
              className={currentPage === 'agents' ? 'nav-tab active' : 'nav-tab'}
              onClick={() => { setCurrentPage('agents'); setSelectedCustomerId(null); }}
            >Agents</button>

            <button
              className={currentPage === 'tasks' ? 'nav-tab active' : 'nav-tab'}
              onClick={() => { setCurrentPage('tasks'); setSelectedCustomerId(null); }}
            >Tasks</button>

            <button
              className={currentPage === 'customers' ? 'nav-tab active' : 'nav-tab'}
              onClick={() => { setCurrentPage('customers'); setSelectedCustomerId(null); }}
            >Customers</button>

            <button
              className={currentPage === 'about' ? 'nav-tab active' : 'nav-tab'}
              onClick={() => { setCurrentPage('about'); setSelectedCustomerId(null); }}
            >
              <FaInfoCircle style={{ marginRight: "6px", verticalAlign: "middle" }} /> About
            </button>
          </nav>
        </header>

        {/* Page Content */}
        <main>
          {currentPage === 'home' ? (
            <HomePage />
          ) : currentPage === 'dashboard' ? (
            <Dashboard />
          ) : currentPage === 'agents' ? (
            <AgentList />
          ) : currentPage === 'tasks' ? (
            <TaskPage />
          ) : currentPage === 'customers' ? (
            !selectedCustomerId ? (
              <div className="crm-side-by-side">
                <div className="crm-left">
                  <CustomerRegistrationForm onCreate={() => setRefreshList(!refreshList)} />
                </div>
                <div className="crm-right">
                  <CustomerList key={refreshList} onSelect={setSelectedCustomerId} />
                </div>
              </div>
            ) : (
              <div className="content">
                <div className="form-container" style={{ width: '100%' }}>
                  <CustomerDetails
                    customerId={selectedCustomerId}
                    onBack={() => setSelectedCustomerId(null)}
                  />
                </div>
              </div>
            )
          ) : currentPage === 'about' ? (
            <AboutPage />
          ) : null}
        </main>
      </SignedIn>

      {/* Signed Out View */}
      <SignedOut>
        <LoginPage />   {/* ✅ Using your custom LoginPage */}
      </SignedOut>
    </div>
  );
}

export default App;
