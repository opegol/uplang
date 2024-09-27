import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  //const emailRef = useRef();
  //const passwordRef = useRef();
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      //await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login"); 
    } catch (err){
      setError('Failed to create an account');
      console.error(err)
    }
    setLoading(false);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/*<input type="email" ref={emailRef} required placeholder="Email" />*/}
        {/*<input type="password" ref={passwordRef} required placeholder="Password" />*/}
        <input type="email" value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" value={password} required onChange={(e)=>{setPassword(e.target.value)}} />
        <button disabled={loading} type="submit">Sign up</button>
      </form>
    </div>
  );
}

