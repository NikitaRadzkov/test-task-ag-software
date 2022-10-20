import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../config/constants';
import axios from 'axios';
import Chip from '../Chip';
import './styles.css';

const BlogItem = ({ blog }) => {
  const [username, setUsername] = useState('')
  const {id, user_id, post_name, post_description, post_image, category, updatedAt} = blog;

  useEffect(() => {
    axios.get(`${url}users/${user_id}`)
      .then(json => setUsername(json.data.fullname))
  }, []);


  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={post_image} alt="cover" />
      <Chip label={category} />
      <h3>{post_name}</h3>
      <p className="blogItem-desc">{post_description}</p>
      <footer>
        <div className="blogItem-author">
          <div>
            <h6>{username}</h6>
            <p>{updatedAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
