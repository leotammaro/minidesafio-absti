
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Users from './components/Users';
import users from './constants/users';
import UsersContext from './context/UsersContext';

function App() {
  const [usersData, setUsersData] = React.useState(users)

  return (
    <UsersContext.Provider value={{ usersData, setUsersData }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </div>
    </UsersContext.Provider>
  );
}

export default App;
