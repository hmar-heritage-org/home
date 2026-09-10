import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import LogoIcon from './LogoIcon';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Philosophy', to: '/philosophy' },
  { label: 'Standards', to: '/standards' },
  { label: 'People', to: '/people' },
  { label: 'Resources', to: '/resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHmarsActive = location.pathname.startsWith('/hmars');
  const isGrantmakersActive = location.pathname.startsWith('/grantmakers');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone/95 backdrop-blur-md shadow-md shadow-stone-900/5 border-b border-stone-200'
          : 'bg-bone/90 backdrop-blur-md border-b border-stone-200/60'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-[#064e3b] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide border-b border-emerald-800/60 shadow-inner">
        <span>This website is under active development and content may frequently change.</span>
      </div>

      <nav className="container-page flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-3 group outline-none focus:outline-none">
          <div className="w-10 h-10 rounded-lg bg-[#064e3b] flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-xs">
            <LogoIcon className="w-7 h-7 text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold text-stone-900 text-sm leading-tight">
              Hmar Heritage
            </div>
            <div className="text-xs text-stone-500 leading-tight">
              Foundation
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to ||
              (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 ${
                  active
                    ? 'text-[#064e3b] bg-emerald-50/90 font-semibold border border-emerald-800/15 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 border border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/grantmakers"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 ${
              isGrantmakersActive
                ? 'text-[#064e3b] bg-emerald-50/90 font-semibold border border-emerald-800/15 shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 border border-transparent'
            }`}
          >
            Grantmakers
          </Link>

          <Link
            to="/hmars"
            className={`ml-1 text-sm py-1.5 px-3.5 rounded-lg font-semibold transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 ${
              isHmarsActive
                ? 'bg-emerald-50/90 text-[#064e3b] border border-emerald-800/25 shadow-xs'
                : 'text-stone-800 bg-stone-100/80 hover:bg-stone-200/70 border border-stone-300/80'
            }`}
          >
            The Hmars
          </Link>

          <Link to="/join" className="btn-primary ml-2 text-sm py-2 px-4 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30">
            Join Us
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 outline-none focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-bone border-t border-stone-200 animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to ||
                (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all outline-none focus:outline-none ${
                    active
                      ? 'text-[#064e3b] bg-emerald-50/90 font-semibold border border-emerald-800/15'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/grantmakers"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all outline-none focus:outline-none ${
                isGrantmakersActive
                  ? 'text-[#064e3b] bg-emerald-50/90 font-semibold border border-emerald-800/15'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              Grantmakers
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Link
                to="/hmars"
                className={`text-sm py-2.5 px-4 rounded-lg font-semibold transition-all text-center outline-none focus:outline-none ${
                  isHmarsActive
                    ? 'bg-emerald-50/90 text-[#064e3b] border border-emerald-800/25'
                    : 'text-stone-800 bg-stone-100/80 hover:bg-stone-200/70 border border-stone-300/80'
                }`}
              >
                The Hmars
              </Link>
              <Link to="/join" className="btn-primary justify-center outline-none focus:outline-none">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
