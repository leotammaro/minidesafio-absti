
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
