import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Logout() {
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    // Optionally redirect after logging out
  }

  return <button onClick={handleLogout}>Log Out</button>;
}
