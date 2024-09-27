import React from 'react';
import NoPage from './NoPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute(props) {
  const { currentUser } = useAuth();
  console.log(`currentUser: ${currentUser}`)

  return (
    <Routes>
      <Route path="/" element={currentUser ? [props.loggedIn] : <Navigate replace to={"/login"} />} />
      <Route path="/login" element={[props.login]} />
      <Route path="login/signup" element={[props.signup]} />
      <Route path="*" element={<NoPage />} />
    </Routes>
   
  );
}