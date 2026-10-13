import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PakistanTaxPage from './pages/PakistanTaxPage';
import UAETaxPage from './pages/UAETaxPage';
import USTaxPage from './pages/USTaxPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="bg-[#050505] min-h-screen text-white relative cursor-none selection:bg-red-600 selection:text-white flex flex-col justify-between">
        {/* Cinematic Netflix Preloader */}
        {loading && <NetflixPreloader onComplete={() => setLoading(false)} />}

        {/* Global Mouse Hover Effects */}
        <CustomCursor />

        {/* Persistent Global Glassmorphic Navbar */}
        <Navbar />

        {/* Routed Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<ServicesPage />} />
            <Route path="/services" element={<Navigate to="/work" replace />} />
            <Route path="/pakistan-tax" element={<PakistanTaxPage />} />
            <Route path="/uae-tax" element={<UAETaxPage />} />
            <Route path="/us-tax" element={<USTaxPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Persistent Global Footer */}
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;