import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { UPCOMING_BATCHES, COLORS } from '../data/siteData';

interface BatchesProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const Batches: React.FC<BatchesProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="batches" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5D8C]">
            Seats Filling Fast
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
            Upcoming Batch Schedule
          </h2>
          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
            Flexible morning, afternoon, and evening batch timings for working professionals and students.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_BATCHES.map((batch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-extrabold text-white"
                    style={{ background: batch.color }}
                  >
                    {batch.duration}
                  </span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                    Only {batch.seats} seats left
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0F3A5A] mt-4">
                  {batch.course}
                </h3>

                <div className="mt-4 space-y-2 text-xs font-semibold text-[#5A6573]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1F5D8C]" />
                    <span>Starts: <strong className="text-[#0F3A5A]">{batch.start}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1F5D8C]" />
                    <span>Timing: <strong className="text-[#0F3A5A]">{batch.timing}</strong></span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry(batch.course)}
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-[#0F3A5A] shadow-xs hover:shadow-md transition-all cursor-pointer"
                style={{ background: COLORS.gold }}
              >
                <span>Reserve Seat Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
