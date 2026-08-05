import React from 'react';
import { Award, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COLORS } from '../data/siteData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section 
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 text-white"
      style={{
        background: 'linear-gradient(135deg, #0F3A5A 0%, #0A2740 40%, #123654 70%, #1F5D8C 100%)'
      }}
    >
      {/* Background Radial Grid Overlay & Blurs */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full bg-[#F6C343]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-[#1F5D8C]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6C343]/15 border border-[#F6C343]/30">
              <span className="w-2 h-2 rounded-full bg-[#F6C343] inline-block" />
              <span className="text-xs font-semibold text-[#F6C343] tracking-wide">
                India's Premier IT Training Institute
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Build Skills That <br className="hidden sm:inline" />
              <span className="text-[#F6C343]">Companies Hire For</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/75 max-w-xl font-normal leading-relaxed">
              Universe Academy provides practical, industry-focused IT training designed to help students 
              become job-ready through live projects, expert mentorship, certifications, and dedicated placement assistance.
            </p>

            {/* Feature Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                '100% Practical Training',
                '1-on-1 Placement Cell'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F6C343] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#courses"
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-extrabold text-[#0F3A5A] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                style={{ background: COLORS.gold }}
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenEnquiry}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-transparent border border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Book Free Counselling</span>
              </button>
            </div>
            
          </div>

          {/* Right Visual Banner Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 bg-white/5 p-3 backdrop-blur-xs">
                <div className="relative h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="Students learning in Universe Academy Lab"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3A5A]/80 via-transparent to-transparent" />

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 rounded-md bg-[#F6C343] text-[#0F3A5A] text-[11px] font-extrabold uppercase tracking-wide">
                      Interactive Training Lab
                    </span>
                    <h3 className="text-base font-bold text-white mt-1.5">
                      100% Practical Learning with Corporate Mentors
                    </h3>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
