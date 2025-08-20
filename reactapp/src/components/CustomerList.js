import React, { useState, useEffect } from 'react';
import { customerService } from '../services/customerService';
import './CustomerList.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await customerService.getAllCustomers();
      setCustomers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleViewDetails = (customerId) => {
    window.location.href = `/customers/${customerId}`;
  };

  if (loading) return <div className="loading">Loading customers...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="customer-container">
      <div className="customer-header">
        <h2>Customers</h2>
        <button 
          className="btn-primary"
          onClick={() => window.location.href = '/customers/new'}
        >
          Add New Customer
        </button>
      </div>
      
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.customerType}</td>
              <td>
                <button 
                  className="btn-view"
                  onClick={() => handleViewDetails(customer.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;