import React from 'react';
import './styles.css';
import { useState } from 'react';
import { url } from '../../config/constants';
import axios from 'axios'
import Navigation from '../../components/Navigation';

const PostCreator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleClick = () => {
    axios.post(`${url}posts`, {
      post_name: title,
      post_description: description,
      post_iamge: image,
    });
  };

  return (
    <div className="wrapper">
      <Navigation />
      <div className="post-title">
        <h2>Crete new post</h2>
      </div>
      <div className="post-inputs">
        <input type="text" placeholder="Post title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Image link" value={image} onChange={(e) => setImage(e.target.value)} />
        <textarea
          placeholder="Post Descriptions"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="post-button">
        <button onClick={handleClick}>Create new post</button>
      </div>
    </div>
  );
};

export default PostCreator;
