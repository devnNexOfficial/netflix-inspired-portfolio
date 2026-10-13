import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">

        {/* Top Section: Brand and Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <Link to="/" className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(220,38,38,0.9)]">
              FAIZAN ALI<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </Link>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase">
              Accounting. Tax. Advisory. Pakistan and USA.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <Link to="/work" className="hover:text-red-500 transition-colors">Work</Link>
            <Link to="/pakistan-tax" className="hover:text-red-500 transition-colors">Pakistan Tax</Link>
            <Link to="/uae-tax" className="hover:text-red-500 transition-colors">UAE Tax</Link>
            <Link to="/us-tax" className="hover:text-red-500 transition-colors">US Tax</Link>
            <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Middle Section: Contact Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://wa.me/923399091707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors uppercase tracking-wider flex items-center gap-1.5"
            >
              <span className="text-green-500 font-bold">WhatsApp:</span> 0339 9091707 //
            </a>
            <a
              href="mailto:iamfaizan2004@gmail.com"
              className="hover:text-red-500 transition-colors uppercase tracking-wider flex items-center gap-1.5"
            >
              <span className="text-red-500 font-bold">Email:</span> iamfaizan2004@gmail.com //
            </a>
            <a
              href="https://www.linkedin.com/in/itsfaizanhere/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              LinkedIn //
            </a>
          </div>

          <div className="text-white/40 tracking-widest uppercase">
            LOCATION: PAKISTAN
          </div>
        </div>

        {/* Disclaimer from README section 9 */}
        <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl text-[11px] font-light text-white/40 leading-relaxed">
          <span className="text-red-500 font-mono font-bold uppercase tracking-widest text-[10px] mr-2">Disclaimer:</span>
          The information on this website is for general guidance only and is not a substitute for personalized tax or legal advice. Tax rates and deadlines change often. Please confirm current rules with FBR, provincial revenue authorities or the IRS, or contact me for advice specific to your case.
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Faizan Ali. All Rights Reserved.</p>
          <p className="text-red-500/80">SERVING PAKISTAN AND USA</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;