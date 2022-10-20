import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className='nav-header'>
    <div className='nav-links'>
      <Link className='nav-link' to='/'><span>Home</span></Link>
      <Link className='nav-link' to='/post-creator'><span>Create Post</span></Link>
    </div>
    <div className='nav-links'>
      <Link className='nav-link' to='/sign-in'><span>Sign In</span></Link>
      <Link className='nav-link' to='/sign-up'><span className='nav-link-signup'>Sign Up</span></Link>
    </div>
  </header>
);

export default Navigation;