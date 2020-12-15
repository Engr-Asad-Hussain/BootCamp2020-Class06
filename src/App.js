import React from 'react';
import Header from './components/Header';
import ClassXA from './components/ClassX-A';
import ClassXB from './components/ClassX-B';
import { ContextProvider } from './GlobalState/Context';
import './App.css';

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <Header />
        <ClassXA />
        <ClassXB />
      </ContextProvider>
    </div>
  );
}

export default App;


/*
    <Header />
    <ClassXA />
    <ClassXB />
  These all the children for <ContextProvider>
*/