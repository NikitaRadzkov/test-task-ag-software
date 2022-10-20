import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { url } from '../../config/constants';
import axios from 'axios';
import Navigation from '../../components/Navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    axios.post(`${url}auth/signin`, {
      email,
      password,
    }).then(res => console.log(res));
  };

  return (
    <div className="wrapper">
      <Navigation />
      <div className="login-titles">
        <h2>Login into your account</h2>
        <span>
          Don't have an account yet? <Link to="/register">Create New</Link>
        </span>
      </div>
      <div className="login-inputs">
        <input
          type="text"
          placeholder="example.email@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="login-button">
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
