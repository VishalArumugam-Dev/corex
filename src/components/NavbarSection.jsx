import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const NavbarSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const navigate = useNavigate();
  const { saveScrollPosition } = useNavigation();

  // ✅ IMPORTANT SECTIONS ONLY
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'program', label: 'Program' },
    { id: 'faq', label: 'FAQ' }
  ];

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);

      // ACTIVE SECTION
      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ SCROLL FUNCTION
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMobileMenuOpen(false);
  };

  // ✅ CTA BUTTON
  const handleStartTrial = () => {
    saveScrollPosition(window.scrollY, 'Navbar');
    navigate('/form');
  };

  // ✅ LOGO
  const CoreXLogo = () => (
    <div className="flex items-center space-x-3 cursor-pointer group">

      {/* LOGO BOX */}
      <div className="relative">

        <div className="w-[52px] h-[52px] rounded-[16px] bg-gradient-to-br from-[#151515] to-[#050505] border border-[#C5A100]/20 flex items-center justify-center shadow-lg transition duration-300 group-hover:scale-105">

          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="3.6"
              strokeLinecap="round"
              d="M7 8l10 8M17 8L7 16"
            />
          </svg>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center leading-none">
        <span className="text-[30px] font-extrabold tracking-tight text-white">
          COREX
        </span>

        <span className="mt-1 text-[14px] font-bold uppercase tracking-[0.12em] text-[#FFE085]">
          Fitness
        </span>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#080808]/95 backdrop-blur-md shadow-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >

      <div className="w-full px-5 sm:px-6 lg:px-8">

        {/* NAVBAR */}
        <div className="flex items-center justify-between h-[82px]">

          {/* LOGO */}
          <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            <CoreXLogo />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-3">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2.5 text-[18px] font-semibold text-white"
              >
                {item.label}
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={handleStartTrial}
              className="ml-8 relative overflow-hidden px-7 py-3.5 rounded-2xl font-bold text-[16px] uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(90deg, #C5A100 0%, #FFE085 100%)',
                color: '#191800',
                boxShadow: '0 0 15px rgba(197,161,0,0.4)',
              }}
            >
              <span className="relative z-10 flex items-center">

                Start Free Trial

                <svg
                  className="w-4 h-4 ml-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-[-75%] w-1/2 skew-x-[-20deg] bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(255,255,255,0.6),rgba(255,255,255,0.2))] animate-[navbarCtaShine_6s_ease-in-out_infinite]"
              />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              mobileMenuOpen
                ? 'bg-white/10 text-white'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >

            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="bg-[#080808]/95 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-2">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#C5A100]/15 text-[#FFE085]'
                  : 'text-white/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* MOBILE CTA */}
          <button
            onClick={handleStartTrial}
            className="relative w-full mt-4 overflow-hidden px-6 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(90deg, #C5A100 0%, #FFE085 100%)',
              color: '#191800',
              boxShadow: '0 0 15px rgba(197,161,0,0.4)',
            }}
          >
            <span className="relative z-10">Start Free Trial</span>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-[-75%] w-1/2 skew-x-[-20deg] bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(255,255,255,0.6),rgba(255,255,255,0.2))] animate-[navbarCtaShine_6s_ease-in-out_infinite]"
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes navbarCtaShine {
          0% { transform: translateX(0); }
          60%, 100% { transform: translateX(400%); }
        }
      `}</style>
    </nav>
  );
};

export default NavbarSection;