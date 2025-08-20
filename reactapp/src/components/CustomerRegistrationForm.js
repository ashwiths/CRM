import React, { useState } from 'react';
import { customerService } from '../services/customerService';
import './CustomerRegistrationForm.css';

const CustomerRegistrationForm = ({ onCreate, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    customerType: 'REGULAR'
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await customerService.createCustomer(formData);
      setMessage('Customer registered successfully!');
      setIsError(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        customerType: 'REGULAR'
      });
      
      // Notify parent component to refresh customer list
      if (onCreate) {
        onCreate();
      }
      
    } catch (error) {
      setMessage('Error: ' + (error.message || 'Failed to register customer'));
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      customerType: 'REGULAR'
    });
    setMessage('');
  };

  return (
    <div className="registration-container">
      <h2>Register New Customer</h2>
      
      {message && (
        <div className={`message ${isError ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label>Customer Type *</label>
          <select
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="REGULAR">Regular</option>
            <option value="PREMIUM">Premium</option>
            <option value="VIP">VIP</option>
          </select>
        </div>
        
        <div className="form-buttons">
          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary"
          >
            {loading ? 'Registering...' : 'Register Customer'}
          </button>
          <button 
            type="button" 
            onClick={handleReset}
            disabled={loading}
            className="btn-secondary"
          >
            Reset
          </button>
          {onCancel && (
            <button 
              type="button" 
              onClick={onCancel}
              disabled={loading}
              className="btn-cancel"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomerRegistrationForm;