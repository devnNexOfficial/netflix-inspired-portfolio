import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'WORK', path: '/work' },
  { name: 'PAKISTAN TAX', path: '/pakistan-tax' },
  { name: 'UAE TAX', path: '/uae-tax' },
  { name: 'US TAX', path: '/us-tax' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-red-600/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3.5'
          : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)] select-none"
        >
          <span>FAIZAN ALI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block group-hover:scale-150 transition-transform"></span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-white/50 border border-white/10 px-2 py-0.5 rounded bg-black/60">
            TAX &bull; ADVISORY
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-white/80 select-none">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative py-1 transition-all duration-300 font-bold hover:text-red-500 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-red-600 rounded-full shadow-[0_0_12px_#E50914] animate-pulse"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95 border border-red-500"
          >
            <span>Book Now</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
          </Link>

          {/* Hamburger Button for Mobile/Tablet */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-neutral-900/80 border border-white/15 text-white hover:text-red-500 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-red-600/40 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4 text-sm font-mono tracking-wider">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-red-600/20 text-red-500 border border-red-600/40 font-bold'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{item.name}</span>
                <span className="text-xs text-white/30">&rarr;</span>
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center py-3 rounded bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(229,9,20,0.5)]"
              >
                Book Free Consultation
              </Link>
              <div className="flex justify-between items-center text-[11px] font-mono text-white/40 pt-2 px-1">
                <span>PAKISTAN &bull; USA TAX</span>
                <span>FBR &bull; IRS</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
