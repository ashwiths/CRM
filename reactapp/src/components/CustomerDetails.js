import React, { useEffect, useState } from 'react';
import { fetchCustomerById } from '../utils/api';
import './CustomerDetails.css';

export default function CustomerDetails({ customerId, onBack }) {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!customerId) {
      setError('Invalid customer ID');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError('');
    fetchCustomerById(customerId)
      .then(data => {
        setCustomer(data);
        setError('');
      })
      .catch(() => {
        setError('Customer not found');
        setCustomer(null);
      })
      .finally(() => setLoading(false));
  }, [customerId]);

  if (loading) return <div>Loading details...</div>;

  if (error) return (
    <div style={{ margin: '2rem', textAlign: "left" }}>
      <button className="crm-back-btn" onClick={onBack}>← Back to List</button>
      <div style={{ color: 'red', marginTop: '1.2rem', fontWeight:"500" }}>{error}</div>
    </div>
  );

  if (!customer) return null;

  return (
    <div className="customer-details">
      <button className="crm-back-btn" onClick={onBack}>Back</button>
      <h2>Customer Details</h2>
      <div>
        <strong>ID:</strong> {customer.id}<br/>
        <strong>Name:</strong> {customer.firstName} {customer.lastName}<br/>
        <strong>Email:</strong> {customer.email}<br/>
        <strong>Phone:</strong> {customer.phoneNumber}<br/>
        <strong>Type:</strong> {customer.customerType}<br/>
      </div>
    </div>
  );
}
