import React from 'react';
import { GraduationCap, ArrowUp } from 'lucide-react';
import { COLORS } from '../data/siteData';

export const Footer: React.FC = () => {
  const quickLinks = ['Home', 'Courses', 'Placements', 'About Us', 'Gallery', 'Blogs', 'Contact'];
  const topCourses = [
    'Full Stack Development',
    'Digital Marketing & SEO',
    'Python & AI / Machine Learning',
    'Cyber Security & Ethical Hacking',
    'Data Analytics',
    'UI/UX & Product Design'
  ];
  const studentZone = [
    'Admission Process',
    'Batch Schedule',
    'Fee Structure',
    'Certification',
    'Career Counselling',
    'Placement Support'
  ];

  return (
    <footer className="bg-[#0F3A5A] text-white pt-16 pb-12 border-t-4 border-[#F6C343]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#F6C343]" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white block">
                  Universe <span className="text-[#F6C343]">Academy</span>
                </span>
                <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase block">
                  Premier IT & Professional Training
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Empowering students with industry-ready practical skills, live client projects, 
              and guaranteed placement support since 2009. Your career growth is our primary commitment.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {['FB', 'IG', 'LI', 'YT'].map((soc, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F6C343] hover:text-[#0F3A5A] text-white flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#F6C343] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-300 hover:text-[#F6C343] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Courses */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#F6C343] mb-4">
              Top Courses
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {topCourses.map((item, idx) => (
                <li key={idx}>
                  <a href="#courses" className="text-slate-300 hover:text-[#F6C343] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Student Zone */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#F6C343] mb-4">
              Student Zone
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {studentZone.map((item, idx) => (
                <li key={idx}>
                  <a href="#contact" className="text-slate-300 hover:text-[#F6C343] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-semibold">
          <div>
            © 2026 Universe Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F6C343] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F6C343] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#F6C343] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
