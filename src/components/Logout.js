import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login"); 
  }

  return (
    <div className='logout'>
        <button onClick={handleLogout}>Log Out</button>;
    </div> 
    );
}
