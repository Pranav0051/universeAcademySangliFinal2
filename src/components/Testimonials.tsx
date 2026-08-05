import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5D8C]">
            Student Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
            What Our Alumni Say About Us
          </h2>
          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
            Real stories from real students who transformed their careers at Universe Academy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-[#FFF8E8] fill-[#F6C343]/30 absolute top-5 right-5" />

              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-[#5A6573] mt-4 leading-relaxed relative z-10 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-sm shadow-xs shrink-0"
                  style={{ background: item.color }}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0F3A5A]">
                    {item.name}
                  </div>
                  <div className="text-xs font-bold text-[#1F5D8C]">
                    {item.course}
                  </div>
                  <div className="text-[11px] text-emerald-600 font-extrabold flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" /> Placed at {item.placed}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
