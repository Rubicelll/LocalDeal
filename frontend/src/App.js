import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom'
import styles from './App.module.css';

// pages
import Login from './pages/user/Login';

// Components
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) setToken(saved);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
          {/* public routes */}
          <Route path="/login" element={<Login onLogin={setToken} />} />
          <Route path="/*" element={<PrivateRoute token={token}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
