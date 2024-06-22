import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails';
import { blogs } from '../data';

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    <div>
      <h1>Blog Details</h1>
      {blog ? <BlogDetails blog={blog} /> : <p>Blog not found.</p>}
    </div>
  );
};

export default BlogDetailsPage;
