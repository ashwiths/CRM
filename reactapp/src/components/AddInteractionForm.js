import React, { useState } from 'react';
import { INTERACTION_TYPES, INTERACTION_STATUSES } from '../utils/constants';
import { createInteraction } from '../utils/api';

export default function AddInteractionForm({ customerId, onCreate }) {
  const [form, setForm] = useState({
    interactionType: '',
    description: '',
    status: '',
  });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');

  const validate = () => {
    const e = {};
    if (!form.interactionType) e.interactionType = 'Required';
    if (!form.description || form.description.length > 500) e.description = 'Required (max 500 chars)';
    if (!form.status) e.status = 'Required';
    return e;
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setMsg('');
    try {
      await createInteraction({
        customerId,
        ...form,
      });
      setMsg('Interaction added');
      setForm({ interactionType: '', description: '', status: '' });
      if (onCreate) onCreate();
    } catch (err) {
      setMsg('Failed to add');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {msg && <div>{msg}</div>}

      <label>
        Type:
        <select name="interactionType" value={form.interactionType} onChange={handleChange}>
          <option value="">Select type</option>
          {INTERACTION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.interactionType && <span className="error">{errors.interactionType}</span>}
      </label>
      <label>
        Description:
        <textarea name="description" value={form.description} onChange={handleChange} />
        {errors.description && <span className="error">{errors.description}</span>}
      </label>
      <label>
        Status:
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="">Select status</option>
          {INTERACTION_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.status && <span className="error">{errors.status}</span>}
      </label>
      <button type="submit">Add Interaction</button>
    </form>
  );
}
