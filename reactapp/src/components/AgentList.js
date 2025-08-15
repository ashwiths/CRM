import React, { useState } from 'react';
import './AgentList.css';

function AgentRegistrationForm({ onClose, onRegister }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    mobile: '',
    status: 'Active'
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(form);
    onClose();
  }

  return (
    <div className="agent-form-modal-backdrop">
      <div className="agent-form-modal">
        <h3>Add New Agent</h3>
        <form onSubmit={handleSubmit} className="agent-form">
          <label>Name:
            <input name="name" value={form.name} onChange={handleInput} required />
          </label>
          <label>Company:
            <input name="company" value={form.company} onChange={handleInput} required />
          </label>
          <label>Role:
            <input name="role" value={form.role} onChange={handleInput} required />
          </label>
          <label>Email:
            <input name="email" value={form.email} onChange={handleInput} required type="email"/>
          </label>
          <label>Mobile:
            <input name="mobile" value={form.mobile} onChange={handleInput} required />
          </label>
          <label>
            Status:
            <select name="status" value={form.status} onChange={handleInput}>
              <option value="Active">Active</option>
              <option value="Locked">Locked</option>
            </select>
          </label>
          <div className="agent-form-actions">
            <button type="submit" className="add-agent-btn">Add Agent</button>
            <button type="button" className="agent-form-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const initialAgents = [
  {
    name: "Adam Trantow",
    company: "Mohr, Langworth and Hills",
    role: "Sales Agent",
    email: "Adam.Trantow@test.com",
    mobile: "(942) 208-5834 x1417",
    status: "Active"
  },
  {
    name: "Billy Stoltenberg",
    company: "Medhurst, Moore and Franey",
    role: "Sales Leader",
    email: "Billy.Stoltenberg@test.com",
    mobile: "(499) 633-7585",
    status: "Locked"
  },
  {
    name: "Betty Hammes",
    company: "Waelchi - VonRueden",
    role: "Sales Agent",
    email: "Betty.Hammes@test.com",
    mobile: "(427) 981-0673",
    status: "Active"
  }
];

export default function AgentList() {
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [agents, setAgents] = useState(initialAgents);

  function handleAddAgent(agent) {
    setAgents([...agents, agent]);
  }

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="agentlist-container">
      <div className="agentlist-header">
        <h2>Agents</h2>
        <button className="add-agent-btn" onClick={() => setShowForm(true)}>
          + NEW AGENT
        </button>
      </div>
      <div className="agentlist-search">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="agentlist-table-wrap">
        <table className="agentlist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Role</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredAgents.map((agent, i) => (
              <tr key={i}>
                <td>
                  <div className="agent-avatar">
                    {agent.name
                      .split(' ')
                      .map(w => w[0])
                      .join('')
                      .substring(0, 2)
                      .toUpperCase()}
                  </div>
                  {agent.name}
                </td>
                <td>{agent.company}</td>
                <td>{agent.role}</td>
                <td>{agent.email}</td>
                <td>{agent.mobile}</td>
                <td>
                  <span className={`status-badge ${agent.status === "Active" ? "active" : "locked"}`}>
                    {agent.status}
                  </span>
                </td>
                <td>
                  <span className="agent-actions" title="More">⋮</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <AgentRegistrationForm
          onClose={() => setShowForm(false)}
          onRegister={handleAddAgent}
        />
      )}
    </div>
  );
}
