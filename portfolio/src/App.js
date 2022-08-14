
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AOS from "aos";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './components/Resume';
import Contact from './pages/Contact';
// import Footer from './components/Footer';

import './styles/App.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#623555"
      },
      secondary: {
        main: "rgb(252, 224, 158)"
      }
    },
    typography: {
      fontSize: 25,
      fontWeight: "bold",
      fontFamily: [
        'EB Garamond', "serif",
        'Inspiration', "cursive"
      ].join(','),
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <main>
            <Navbar />
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          </main>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
