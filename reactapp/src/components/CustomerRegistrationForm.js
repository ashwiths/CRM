import React, { useState } from 'react';
import { customerService } from '../services/customerService';
import './CustomerRegistrationForm.css';

const CustomerRegistrationForm = () => {
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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        customerType: 'REGULAR'
      });
      
      setTimeout(() => {
        window.location.href = '/customers';
      }, 1500);
    } catch (error) {
      setMessage('Error: ' + error.message);
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
      <h2>Register Customer</h2>
      
      {message && (
        <div className={isError ? 'error-message' : 'success-message'}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Customer Type:</label>
          <select
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
          >
            <option value="REGULAR">Regular</option>
            <option value="PREMIUM">Premium</option>
            <option value="VIP">VIP</option>
          </select>
        </div>
        
        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerRegistrationForm;