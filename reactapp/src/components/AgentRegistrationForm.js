// src/components/AgentRegistrationForm.js
import React, { useState } from 'react';
import './AgentList.css'; // Or separate AgentRegistrationForm.css for styling

export default function AgentRegistrationForm({ onClose, onRegister }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    mobile: '',
    verified: false,
    status: 'Active'
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Call parent with new agent (prop: onRegister)
    if (onRegister) onRegister(form);
    if (onClose) onClose();
  }

  return (
    <div className="agent-form-modal-backdrop">
      <div className="agent-form-modal">
        <h3>Add New Agent</h3>
        <form onSubmit={handleSubmit} className="agent-form">
          <label>Name:
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>Company:
            <input name="company" value={form.company} onChange={handleChange} required />
          </label>
          <label>Role:
            <input name="role" value={form.role} onChange={handleChange} required />
          </label>
          <label>Email:
            <input name="email" value={form.email} onChange={handleChange} required type="email" />
          </label>
          <label>Mobile:
            <input name="mobile" value={form.mobile} onChange={handleChange} required />
          </label>
          <label>
            Verified:
            <input name="verified" type="checkbox" checked={form.verified} onChange={handleChange} />
          </label>
          <label>
            Status:
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Locked">Locked</option>
            </select>
          </label>
          <div className="agent-form-actions">
            <button type="submit" className="add-agent-btn">Add Agent</button>
            <button type="button" onClick={onClose} className="agent-form-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
