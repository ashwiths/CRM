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
    <div style={{ margin: '2rem' }}>
      <button onClick={onBack}>Back to List</button>
      <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>
    </div>
  );

  if (!customer) return null;

  return (
    <div className="customer-details">
      <button onClick={onBack} style={{ marginBottom: "1.5rem" }}>Back to List</button>
      <h2>Customer Details</h2>
      <div>
        <strong>ID:</strong> {customer.id}<br/>
        <strong>Name:</strong> {customer.firstName} {customer.lastName}<br/>
        <strong>Email:</strong> {customer.email}<br/>
        <strong>Phone:</strong> {customer.phoneNumber}<br/>
        <strong>Type:</strong> {customer.customerType}<br/>
        <strong>Registration Date:</strong> {customer.registrationDate}
      </div>
    </div>
  );
}
