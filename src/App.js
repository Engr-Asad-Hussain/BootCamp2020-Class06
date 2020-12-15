import React from 'react';
import Header from './components/Header';
import AmountSummary from './components/AmountSummary';
import TransactionHistory from './components/TransactionHistory';
import NewTransaction from './components/NewTransaction';
import { ContextProvider } from './context/GlobalContext';
import './App.css';

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <div className="text-center">
          <Header /> 
          <AmountSummary />
        </div>
        <TransactionHistory />
        <NewTransaction />
      </ContextProvider>
    </div>
  );
}

export default App;
