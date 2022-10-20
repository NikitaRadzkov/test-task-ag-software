import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Login from './pages/Login';
import PostCreator from './pages/PostCreator';
import Register from './pages/Register';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-creator" element={<PostCreator />} />
      </Routes>
    </div>
  );
};

export default App;
