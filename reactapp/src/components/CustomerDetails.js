import React, { useState, useEffect } from 'react';
import { customerService } from '../services/customerService';
import './CustomerDetails.css';

const CustomerDetails = ({ customerId, onBack, onAddInteraction }) => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        setLoading(true);
        const data = await customerService.getCustomerById(customerId);
        setCustomer(data);
        setError('');
      } catch (err) {
        setError(err.message || 'Failed to fetch customer details');
        console.error('Error fetching customer details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId]);

  if (loading) return <div className="loading">Loading customer details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!customer) return <div className="error">Customer not found</div>;

  return (
    <div className="customer-details">
      <div className="details-header">
        <button onClick={onBack} className="btn-back">
          ← Back to List
        </button>
        <h2>Customer Details</h2>
        <button onClick={onAddInteraction} className="btn-add-interaction">
          ➕ Add Interaction
        </button>
      </div>

      <div className="details-content">
        <div className="customer-card">
          <div className="customer-info">
            <div className="info-section">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>ID:</label>
                  <span>{customer.id}</span>
                </div>
                <div className="info-item">
                  <label>First Name:</label>
                  <span>{customer.firstName}</span>
                </div>
                <div className="info-item">
                  <label>Last Name:</label>
                  <span>{customer.lastName}</span>
                </div>
                <div className="info-item">
                  <label>Customer Type:</label>
                  <span className={`customer-type ${customer.customerType?.toLowerCase()}`}>
                    {customer.customerType}
                  </span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Contact Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Email:</label>
                  <span>{customer.email}</span>
                </div>
                <div className="info-item">
                  <label>Phone:</label>
                  <span>{customer.phone}</span>
                </div>
              </div>
            </div>

            {customer.createdAt && (
              <div className="info-section">
                <h3>Account Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Registered:</label>
                    <span>{new Date(customer.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="interactions-section">
          <h3>Customer Interactions</h3>
          <p className="no-interactions">No interactions recorded yet.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;