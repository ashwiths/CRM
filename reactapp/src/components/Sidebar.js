import React from 'react';
import { FaHome, FaChartBar, FaUsers, FaTasks, FaUserFriends, FaInfoCircle, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ currentPage, setCurrentPage, showSidebar, setShowSidebar, setSelectedCustomerId }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { id: 'agents', label: 'Agents', icon: <FaUserFriends /> },
    { id: 'tasks', label: 'Tasks', icon: <FaTasks /> },
    { id: 'customers', label: 'Customers', icon: <FaUsers /> },
    { id: 'about', label: 'About', icon: <FaInfoCircle /> },
  ];

  const handleMenuItemClick = (pageId) => {
    setCurrentPage(pageId);
    setSelectedCustomerId(null);
    setShowSidebar(false);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {showSidebar && <div className="sidebar-overlay" onClick={() => setShowSidebar(false)} />}
      
      <aside className={`sidebar ${showSidebar ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-crm-title">
            <h1 className="crm-animated-text">CRM</h1>
            <p className="crm-subtitle">Customer Relationship Management</p>
          </div>
          <button className="sidebar-close" onClick={() => setShowSidebar(false)}>
            <FaTimes />
          </button>
        </div>
        
        <div className="navigation-title">
          <span>Navigation</span>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`sidebar-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;