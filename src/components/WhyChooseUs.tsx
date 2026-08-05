import React from 'react';
import { FEATURES } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5D8C]">
            The Universe Academy Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
The Advantage That Separates Our Students          </h2>
          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
<div className="mt-12  bg-[#0F3A5A] rounded-2xl p-6 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#1F5D8C]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">            We bridge the gap between academic education and corporate demands through 
            project-based learning, mentorship, and comprehensive career assistance.
            </div>
          </p>
        </div>



        <div className="mt-12 bg-[#0F3A5A] rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#1F5D8C]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-xs group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-[#0F3A5A] mt-4 group-hover:text-[#1F5D8C] transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs md:text-sm text-[#5A6573] mt-2 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
