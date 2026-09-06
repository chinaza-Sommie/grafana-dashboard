import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function App() {
  const [greeting, setGreeting] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className=''>
      {/* <Login /> */}
      {/* <Register /> */}
      <Dashboard/>
    </div>
  );
}

export default App;