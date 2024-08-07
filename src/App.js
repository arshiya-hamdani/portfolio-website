import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
