import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';
import CustomerDetails from './components/CustomerDetails';
import './App.css';

function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [refreshList, setRefreshList] = useState(false);

  return (
    <div className="app">
      <h1>CRM System</h1>
      {!selectedCustomerId ? (
        <>
          <CustomerRegistrationForm onCreate={() => setRefreshList(!refreshList)} />
          <hr />
          <CustomerList
            key={refreshList}
            onSelect={setSelectedCustomerId}
          />
        </>
      ) : (
        <CustomerDetails
          customerId={selectedCustomerId}
          onBack={() => setSelectedCustomerId(null)}
        />
      )}
    </div>
  );
}

export default App;
