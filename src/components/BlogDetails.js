import React from 'react';
import '../blog.css';

const BlogDetails = ({ blog }) => (
  <div className="container">
    <h1 className="container-title">{blog.title}</h1>
    <div className="container-content">{blog.content}</div>
  </div>
);

export default BlogDetails;
