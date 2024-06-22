import React from 'react';
import BlogList from '../components/BlogList';
import { blogs } from '../data';

const HomePage = () => (
  <div>
    <h1>Blog List</h1>
    <BlogList blogs={blogs} />
  </div>
);

export default HomePage;
