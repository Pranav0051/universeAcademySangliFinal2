import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Sparkles, GraduationCap } from 'lucide-react';
import { COLORS } from '../data/siteData';
import universeLogo from '../images/UNIVERSE ACADEMY LOGO.png';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Journey With Us', href: '#placements' },
   // { name: 'Faculty', href: '#faculty' },
    { name: 'Batches', href: '#batches' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Notice Bar */}
      <div 
        className="text-center py-1.5 px-4 text-xs font-bold flex items-center justify-center gap-2 text-[#0F3A5A]"
        style={{ background: COLORS.gold }}
      >
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 fill-[#0F3A5A]" />
          <span>New Batch Starting Soon! Get up to 50% OFF — Limited Seats Left!</span>
        </span>
        <button 
          onClick={onOpenEnquiry}
          className="ml-2 underline font-extrabold hover:text-black transition-colors cursor-pointer hidden sm:inline-block"
        >
          Enquire Now
        </button>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3' 
            : 'bg-transparent py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group text-decoration-none">
           
           
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
  <img
    src={universeLogo}
    alt="Universe Academy"
    className="w-full h-full object-contain"
  />
</div>       
           
            <div className="flex flex-col">
              <span className={`font-black text-xl md:text-2xl tracking-tight leading-tight transition-colors ${
                isScrolled ? 'text-[#0F3A5A]' : 'text-white'
              }`}>
                Universe
              </span>
              <span className="text-[10px] font-black text-[#F6C343] tracking-widest uppercase leading-none">
                ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-1 relative group ${
                  isScrolled 
                    ? 'text-[#102A43] hover:text-[#0F3A5A]' 
                    : 'text-white/90 hover:text-[#F6C343]'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6C343] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919665492713"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                isScrolled 
                  ? 'text-[#0F3A5A] border-slate-200 hover:bg-slate-50' 
                  : 'text-white border-white/30 hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#F6C343]" />
              <span>+91 98765 43210</span>
            </a>
            
            <button
              onClick={onOpenEnquiry}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-[#0F3A5A] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              style={{ background: COLORS.gold }}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#0F3A5A] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-[#102A43] hover:text-[#0F3A5A] py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919665492713"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border text-[#0F3A5A] border-slate-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us: +91 98765 43210</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-[#0F3A5A] shadow-sm"
                style={{ background: COLORS.gold }}
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
