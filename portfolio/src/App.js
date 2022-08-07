
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AOS from "aos";

import Navbar from './components/Navbar';
import Home from './components/Home';
// import Footer from './components/Footer';

import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <main>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/resume" element={<Resume />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}

          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
