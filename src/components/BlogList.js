import React from 'react';
import BlogCard from './BlogCard';
import '../blog.css';

const BlogList = ({ blogs }) => (
  <div className="list-container">
    {blogs.map(blog => (
      <BlogCard key={blog.id} blog={blog} />
    ))}
  </div>
);

export default BlogList;
