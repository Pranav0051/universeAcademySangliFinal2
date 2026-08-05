import React from 'react';
import { GALLERY_ITEMS } from '../data/siteData';

export const Gallery: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5D8C]">
            Campus Life & Events
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
            Life at Universe Academy
          </h2>
          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
            Explore our state-of-the-art computer labs, interactive classroom sessions, 
            seminars, and campus placement drives.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group h-64 md:h-72 ${item.span}`}
            >
              <img
                src={`https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=800&q=80`}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3A5A]/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#F6C343] text-[#0F3A5A] uppercase tracking-wider">
                  Campus Feature
                </span>
                <h3 className="text-base font-extrabold text-white mt-1">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
