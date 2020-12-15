import React from 'react';
import PresentLayer from './presentLayer';
import { TransactionProvider }  from './amountContext';

function App() {
  
  return (
    <TransactionProvider>
      <PresentLayer />
    </TransactionProvider>
  );
}

export default App;
