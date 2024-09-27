import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  //const emailRef = useRef('');
  //const passwordRef = useRef('');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      //await login(emailRef.current.value, passwordRef.current.value);
      await login(email, password);
      navigate("/"); 
    } catch (err) {
      setError('Failed to sign in');
      console.error(err);
    }
    setLoading(false);
    
  }

  return (
    <div>
    <div className='login'>
      <h2>Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/*<input type="email" ref={emailRef} value={emailRef} required placeholder="Email" />*/}
        {/* <input type="password" ref={passwordRef} value={passwordRef} required placeholder="Password" /> */}
        <input type="email" value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" value={password} required onChange={(e)=>{setPassword(e.target.value)}} />
        <button disabled={loading} type="submit">Log In</button>
      </form>
    </div>
    <div>
    <h4>------------  or  -----------</h4>
    <div>
      <Link to="signup">Sign up</Link>
    </div>
    </div>

    </div>
  );
}
