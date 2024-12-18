// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import ScrollToTop from './Components/ScrollToTop';
import AdminPanel from "./Components/AdminPanel";
import AdminAccess from './Components/AdminAccess';
import PrivateRoute from './Components/PrivateRoute';

const App = () => (
  <Router>
  <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminAccess />} />
      <Route
        path="/adminpanel"
        element={
          <PrivateRoute>
            <AdminPanel />
          </PrivateRoute>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
