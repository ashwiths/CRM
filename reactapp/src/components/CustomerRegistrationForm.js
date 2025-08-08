import React, { useState } from 'react';
import { createCustomer } from '../utils/api';
import { CUSTOMER_TYPES } from '../utils/constants';
import './CustomerRegistrationForm.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  customerType: '',
};

export default function CustomerRegistrationForm({ onCreate }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.firstName || form.firstName.length < 2 || form.firstName.length > 50) {
      errs.firstName = 'First name required (2-50 chars)';
    }
    if (!form.lastName || form.lastName.length < 2 || form.lastName.length > 50) {
      errs.lastName = 'Last name required (2-50 chars)';
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Valid email is required';
    }
    if (!form.customerType) errs.customerType = 'Select customer type';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;
    setApiError('');
    setSuccess('');
    try {
      await createCustomer(form);
      setSuccess('Customer registered!');
      setForm(initialState);
      if (onCreate) onCreate();
    } catch (err) {
      if (err.status === 409) setApiError('Email already exists');
      else setApiError('Failed to register');
    }
  };

  return (
    <div className="customer-registration-form">
      <h2>Register Customer</h2>
      {success && <div className="success">{success}</div>}
      {apiError && <div className="error">{apiError}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          Customer Type:
          <select name="customerType" value={form.customerType} onChange={handleChange}>
            <option value="">Select type</option>
            {CUSTOMER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.customerType && <span className="error">{errors.customerType}</span>}
        </label>
        <button type="submit">Register</button>
        <button type="button" onClick={() => setForm(initialState)}>Reset</button>
      </form>
    </div>
  );
}
