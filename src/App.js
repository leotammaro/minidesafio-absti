
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <h2>Mini desafio React ABS-TI</h2>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
