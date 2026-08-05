import React from 'react';
import { Award, Star } from 'lucide-react';
import { FACULTY } from '../data/siteData';

export const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-20 md:py-24 bg-[#0F3A5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6C343]/15 border border-[#F6C343]/25">
            <span className="text-xs font-semibold text-[#F6C343]">
              Expert Faculty
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Learn from Industry Professionals
          </h2>

          <p className="text-sm md:text-base text-white/60 leading-relaxed">
            Our trainers bring decades of real-world experience from top companies directly into the classroom.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map((member, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#F6C343]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-white text-xl shadow-md border-2"
                  style={{ background: `${member.color}30`, borderColor: `${member.color}60` }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-lg font-extrabold text-white mt-4">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#F6C343] mt-1">
                  {member.role}
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F6C343]/15 text-[#F6C343] text-[11px] font-semibold mt-3">
                  <Award className="w-3.5 h-3.5 text-[#F6C343]" />
                  <span>{member.exp}</span>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-white/80">
                  <div>
                    <span className="font-bold text-white">Specialization:</span>
                    <p className="text-white/60 mt-0.5">{member.specialization}</p>
                  </div>
                  <div>
                    <span className="font-bold text-white">Courses Taught:</span>
                    <p className="text-white/60 mt-0.5">{member.courses}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1 text-amber-400 text-xs font-bold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white/60 ml-1.5">(5.0 Student Rating)</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
