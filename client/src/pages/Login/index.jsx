import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { url } from '../../config/constants';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
  }

  return (
    <div className='container'>
      <div className='login-titles'>
        <span>Login into your account</span>
        <span>Don't have an account yet? <Link to='/register'>Create New</Link></span>
      </div>
      <div className='login-inputs'>
        <input 
          type="text" 
          placeholder='example.email@mail.com' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='login-button'><button onClick={handleClick}>Login</button></div>
    </div>
  )
};

export default Login;