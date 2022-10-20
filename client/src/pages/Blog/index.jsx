import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chip from '../../components/Chip';
import EmptyList from '../../components/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { url } from '../../config/constants';
import axios from 'axios'

const Blog = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`${url}posts`)
      .then(res => setPosts(res.data))

    let blog = posts.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.updatedAt}</p>
            <h1>{blog.post_name}</h1>
            <div className="blog-subCategory">
            <Chip label={blog.category} />
            </div>
          </header>
          <img src={blog.post_image} alt="cover" />
          <p className="blog-desc">{blog.post_description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
