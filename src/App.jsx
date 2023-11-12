import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/index';
import AboutMe from './pages/Aboutme/index'
import Projects from './pages/Projects/index'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const { lang } = useParams();

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path={`/:lang/accueil`} element={<Home />} />
            <Route path={`/:lang/home`} element={<Home />} />
            <Route path={`/:lang/a-propos`} element={<AboutMe />} />
            <Route path={`/:lang/about-me`} element={<AboutMe />} />
            <Route path={`/:lang/projets`} element={<Projects />} />
            <Route path={`/:lang/projects`} element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
