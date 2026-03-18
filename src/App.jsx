import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Contact from './pages/Contact';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
