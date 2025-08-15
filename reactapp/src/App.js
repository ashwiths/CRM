import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import CustomerDetails from './components/CustomerDetails';
import AboutPage from './components/AboutPage';
import Dashboard from './components/Dashboard';
import AgentList from './components/AgentList';
import HomePage from './components/HomePage';
import TaskPage from './components/TaskPage'; // <--- Import TaskPage here!
import './App.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
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
      <SignedIn>
        <header className="app-header">
          {/* Left Group: CRM title + login + dark mode */}
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

          {/* Right: Navigation */}
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
            {/* --- Tasks Button between Agents and Customers --- */}
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
        <div className="login-center-container">
          <div className="glass-card">
            <div className="login-img-animated">
              <img
                src={process.env.PUBLIC_URL + "/profile.jpg"}
                alt="Login"
                className="login-img"
              />
            </div>
            <h1 className="login-title">CRM SYSTEM</h1>
            <h2>Welcome to CRM</h2>
            <SignInButton mode="modal">
              <button className="sign-in-btn">Sign In</button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

export default App;
