import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Sections/Hero/Hero';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import Navbar from './Sections/Navbar/Navbar';
import CourseMaterial from './Sections/CourseMaterial/CourseMaterial';  // Import the new component

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Keep Navbar on all pages */}
      <Routes>
        {/* Home Page (All existing components) */}
        <Route path="/" element={<><Hero /><Projects /></>} />

        {/* Course Materials Page (Separate Page for PDFs) */}
        <Route path="/course-materials" element={<><CourseMaterial /></>} />
        <Route path="/contact-me" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
