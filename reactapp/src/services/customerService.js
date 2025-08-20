import { API_BASE_URL } from '../config';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Request failed');
  }
  return response.json();
};

export const customerService = {
  getAllCustomers: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/customers`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return handleResponse(response);
  },

  getCustomerById: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/customers/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return handleResponse(response);
  },

  createCustomer: async (customerData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/customers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerData)
    });
    return handleResponse(response);
  },

  updateCustomer: async (id, customerData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/api/customers/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerData)
    });
    return handleResponse(response);
  }
};