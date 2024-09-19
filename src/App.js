import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import AppMain from './AppMain';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Signup />
      <Login />
      <Logout />
      <AppMain />
      {/* Add your routes or other components here */}
    </AuthProvider>
  );
}

export default App;
