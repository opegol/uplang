import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';

import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import AppMain from './AppMain';
import './App.css';

const loggedInComponents = [<Logout />, <AppMain />];
const loginComponent = [<Login />];
const signupComponent = [<Signup />];

function App() {
  return (
    <div className='main'>
     <Header />
     <AuthProvider>
       <PrivateRoute loggedIn={loggedInComponents} login={loginComponent} signup={signupComponent}/>
     </AuthProvider>
    </div>
  );
}


export default App;
