import React from 'react';
import { Briefcase, Building2, CheckCircle, TrendingUp, Sparkles, Award } from 'lucide-react';
import { PLACED_STUDENTS, RECRUITERS, PLACEMENT_STEPS, COLORS } from '../data/siteData';

interface PlacementsProps {
  onOpenEnquiry: () => void;
}

export const Placements: React.FC<PlacementsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="placements" className="py-16 md:py-24 bg-[#F8FAFC]">    
        {/* 8-Step Placement Roadmap */}
        <div className="mt-16 bg-[#0F3A5A] rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F6C343]">
              Proven 8-Step Career Formula
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              How Yours Journey With Us
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {PLACEMENT_STEPS.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#F6C343] flex items-center justify-center font-extrabold text-sm mx-auto group-hover:bg-[#F6C343] group-hover:text-[#0F3A5A] transition-colors">
                  {idx + 1}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-2 leading-tight">
                  {step}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 rounded-xl text-xs font-extrabold text-[#0F3A5A] shadow-md transition-transform hover:scale-105 cursor-pointer"
              style={{ background: COLORS.gold }}
            >
              Start Your Career Journey Today
            </button>
          </div>
        </div>

    </section>
  );
};
