import React, { useState, useEffect } from 'react';
import { customerService } from '../services/customerService';
import './CustomerList.css';

const CustomerList = ({ onSelect, refreshTrigger }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, [refreshTrigger]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const data = await customerService.getAllCustomers();
      setCustomers(data);
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to fetch customers');
      console.error('Error fetching customers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (customerId) => {
    onSelect(customerId);
  };

  if (loading) return <div className="loading">Loading customers...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="customer-container">
      <div className="customer-header">
        <h2>Customer List</h2>
        <button 
          className="btn-refresh"
          onClick={fetchCustomers}
          title="Refresh customers"
        >
          🔄 Refresh
        </button>
      </div>
      
      <div className="customer-table-container">
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
                <td>
                  <span className={`customer-type ${customer.customerType?.toLowerCase()}`}>
                    {customer.customerType}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn-view"
                    onClick={() => handleViewDetails(customer.id)}
                    title="View customer details"
                  >
                    👁️ View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {customers.length === 0 && (
          <div className="no-customers">
            <p>No customers found. Register a new customer to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;