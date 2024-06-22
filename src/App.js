import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogDetailsPage from './pages/BlogDetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
