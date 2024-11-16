// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
