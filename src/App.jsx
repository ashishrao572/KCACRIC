import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import TrainingPrograms from "./TrainingPrograms";
import Join from "./Join";
import Contact from './Contact';
import './App.css';
import Footer from './Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen w-full">
        <header className="App-header fixed top-0 left-0 right-0 w-full">
          {/* Logo */}
          <div className="logo">
            <img src="/resrc/kcacric.png" alt="kcacric Logo" />
            <span>Dream Big! Play Cricket!</span>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>

          {/* Navigation Menu */}
          <nav className={`App-nav ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><span>Home</span></NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><span>About</span></NavLink>
            <NavLink to="/programs" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><span>Programs</span></NavLink>
            <NavLink to="/join" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><span>Join</span></NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><span>Contact</span></NavLink>
          </nav>
        </header>

        <main
          className="App-main"
          style={{
            paddingTop: "5px", // should match header height
            paddingBottom: "0px", // should match footer height
          }}
        >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/programs" element={<TrainingPrograms/>}/>
            <Route path="/Join" element={<Join/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>

        <Footer className="fixed left-0 right-0 w-full" />
      </div>
    </Router>
  );
}

export default App;