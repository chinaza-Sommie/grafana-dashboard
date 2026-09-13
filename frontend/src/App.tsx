import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import type { User } from './api';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';



function App() {
  // const[user, setUser] = useState<User | null>(null);
  const[loginUser, setLoginUser] = useState<User | null>(() => {
    const savedLogin = localStorage.getItem('loginUser');
    if(savedLogin !== null){
      return JSON.parse(savedLogin);
    }

    return null;

  });
  // console.log(loginUser);

  useEffect(() => {
        localStorage.setItem('loginUser', JSON.stringify(loginUser));
  }, [loginUser]);

  return (
    <Routes>
      <Route path='/' element={<Login onSetLoginUser={setLoginUser} />} />
      <Route path='/register' element={<Register />}  />
      <Route path='/dashboard' element={<Dashboard loginUser={loginUser} />} />
    </Routes>
  );
}

export default App;