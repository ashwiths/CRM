import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import CustomerDetails from './components/CustomerDetails';
import AboutPage from './components/AboutPage';
import Dashboard from './components/Dashboard';
import AgentList from './components/AgentList';
import AgentRegistrationForm from './components/AgentRegistrationForm';
import HomePage from './components/HomePage';
import TaskPage from './components/TaskPage';
import AddInteractionForm from './components/AddInteractionForm';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import './App.css';
import { SignedIn, SignedOut } from '@clerk/clerk-react'; // Removed SignInButton import

function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [refreshList, setRefreshList] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDarkMode = () => {
    console.log("Dark mode toggled:", !darkMode);
    setDarkMode(prev => !prev);
  };

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div className={`app-container${darkMode ? " dark-mode" : ""}`}>
      <SignedIn>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          toggleSidebar={toggleSidebar}
          currentPage={currentPage}
        />
        
        <div className="app-main-content">
          <Sidebar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            setSelectedCustomerId={setSelectedCustomerId}
          />
          
          <main className="app-content">
            {currentPage === 'home' ? (
              <HomePage />
            ) : currentPage === 'dashboard' ? (
              <Dashboard />
            ) : currentPage === 'agents' ? (
              <AgentList />
            ) : currentPage === 'agent-registration' ? (
              <AgentRegistrationForm onBack={() => setCurrentPage('agents')} />
            ) : currentPage === 'tasks' ? (
              <TaskPage />
            ) : currentPage === 'add-interaction' ? (
              <AddInteractionForm 
                customerId={selectedCustomerId}
                onBack={() => setCurrentPage('customers')}
                onSuccess={() => {
                  setCurrentPage('customers');
                  setSelectedCustomerId(null);
                }}
              />
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
                      onAddInteraction={() => setCurrentPage('add-interaction')}
                    />
                  </div>
                </div>
              )
            ) : currentPage === 'about' ? (
              <AboutPage />
            ) : null}
          </main>
        </div>
      </SignedIn>

      {/* Signed Out View */}
      <SignedOut>
        <LoginPage />
      </SignedOut>
    </div>
  );
}

export default App; 