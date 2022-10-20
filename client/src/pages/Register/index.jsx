import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { url } from '../../config/constants';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    fetch(`${url}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        fullname,
        phone,
      }),
    });
  };

  return (
    <div className="container">
      <div className="register-titles">
        <span>Crete new account</span>
        <span>
          Login if you already have an account! <Link to="/login">Login</Link>
        </span>
      </div>
      <div className="register-inputs">
        <input
          type="text"
          placeholder="example.email@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="register-button">
        <button onClick={handleClick}>Register</button>
      </div>
    </div>
  );
};

export default Register;
