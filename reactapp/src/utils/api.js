const API_BASE = 'http://localhost:8080/api';

export async function fetchCustomers() {
  const response = await fetch(`${API_BASE}/customers`);
  if (!response.ok) throw new Error('Failed to fetch customers');
  return response.json();
}

export async function createCustomer(customer) {
  const response = await fetch(`${API_BASE}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer),
  });
  if (!response.ok) throw response;
  return response.json();
}

export async function fetchCustomerById(id) {
  const response = await fetch(`${API_BASE}/customers/${id}`);
  console.log(response)
  if (!response.ok) throw new Error('Customer not found');
  return response.json();
}

export async function fetchInteractionsByCustomerId(customerId) {
  const response = await fetch(`${API_BASE}/customers/${customerId}/interactions`);
  if (!response.ok) throw new Error('Failed to fetch interactions');
  return response.json();
}

export async function createInteraction(interaction) {
  const response = await fetch(`${API_BASE}/interactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(interaction),
  });
  if (!response.ok) throw response;
  return response.json();
}
