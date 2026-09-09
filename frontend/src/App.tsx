import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import type { User } from './api';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';



function App() {
  const[user, setUser] = useState<User | null>(null);
  const[loginUser, setLoginUser] = useState<User | null>(null);
  // console.log(loginUser);

  return (
    <Routes>
      <Route path='/' element={<Login loginUser={loginUser} onSetLoginUser={setLoginUser} />} />
      <Route path='/r' element={<Register onSetUser={setUser} />}  />
      <Route path='/dashboard' element={<Dashboard loginUser={loginUser} />} />
    </Routes>
  );
}

export default App;