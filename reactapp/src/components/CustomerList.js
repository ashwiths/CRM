import React, { useEffect, useState } from 'react';
import './CustomerList.css';
import { BASE_URL } from '../config';  // ✅ Import backend URL

export default function CustomerList({ onSelect }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${BASE_URL}/api/customers`)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then(data => setCustomers(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading customers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="customer-list">
      <h2>Customers</h2>
      {customers.length === 0 ? (
        <div>No customers found.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.firstName} {c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.phoneNumber}</td>
                <td>{c.customerType}</td>
                <td>
                  <button onClick={() => onSelect(c.id)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
