import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import About from './about/About';
import Skills from './skills/Skills';
import Project from './projectz/Projects';
import Contact from './contact/Contact';
import './styles/app.css';
import Background from './background/Background';
import Blog from './blog/Blog';

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
       <Route path="/skills" element={<Skills />}  />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
