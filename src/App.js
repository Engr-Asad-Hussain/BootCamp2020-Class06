import Header from './components/Header';
import ClassXA from './components/ClassX-A';
import { ContextProvider } from './context/Context';
import './App.css';

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <Header />
        <ClassXA />
      </ContextProvider>
    </div>
  );
}

export default App;
