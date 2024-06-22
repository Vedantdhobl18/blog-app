import React from 'react';
import { Link } from 'react-router-dom';
import '../blog.css';

const BlogCard = ({ blog }) => (
  <div className="card">
    <div>
      <h2 className="card-title">{blog.title}</h2>
      <p className="card-author">Posted by: {blog.author}</p>
      <p className="card-date">{blog.date}</p>
      <p className="card-comments">{blog.comments} Comments</p>
      <img className="card-image" src={blog.image} alt={blog.title} />
      <p className="card-summary">{blog.summary}</p>
      <p className="card-categories">Categories: {blog.categories.join(", ")}</p>
    </div>
    <Link to={`/blog/${blog.id}`} className="card-button">Continue Reading →</Link>
  </div>
);

export default BlogCard;
