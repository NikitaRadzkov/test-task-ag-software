import React, { useState, useEffect} from 'react';
import EmptyList from '../../components/EmptyList';
import BlogList from '../../components/BlogList';
import PreviewTitle from '../../components/PreviewTitle';
import SearchBar from '../../components/SearchBar';
import Navigation from '../../components/Navigation';
import axios from 'axios';
import { url } from '../../config/constants';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()),
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogs);
    setSearchKey('');
  };

  useEffect(() => {
    axios.get(`${url}/posts`)
      .then(res => setBlogs(res.data))
  }, [])

  return (
    <>
      <Navigation />
      <PreviewTitle />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </>
  );
};

export default Home;
