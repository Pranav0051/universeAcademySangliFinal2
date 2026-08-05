import React from 'react';
import { Clock, Laptop, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Course } from '../types';
import { COLORS } from '../data/siteData';

interface CourseCardProps {
  course: Course;
  onOpenEnquiry: (courseTitle: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onOpenEnquiry }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Course Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={`https://images.unsplash.com/${course.img}?auto=format&fit=crop&w=600&q=80`}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        
        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-extrabold bg-white/90 backdrop-blur-xs shadow-xs text-[#0F3A5A]">
          <span>{course.icon}</span>
          <span>{course.duration}</span>
        </div>

        {course.popular && (
          <div 
            className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-extrabold text-[#0F3A5A] shadow-xs"
            style={{ background: COLORS.gold }}
          >
            <Sparkles className="w-3 h-3 fill-[#0F3A5A]" />
            <span>Popular</span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="text-[11px] font-bold text-slate-200 flex items-center gap-2">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Laptop className="w-3 h-3" /> {course.mode}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-extrabold text-[#0F3A5A] leading-snug group-hover:text-[#1F5D8C] transition-colors">
            {course.title}
          </h3>

          <div className="mt-3 pt-3 border-t border-slate-100">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#5A6573] flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-[#1F5D8C]" />
              <span>Career Roles:</span>
            </div>
            <p className="text-xs font-semibold text-[#102A43] mt-1 leading-relaxed">
              {course.careers}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenEnquiry(course.title)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0F3A5A] transition-all duration-300 hover:shadow-md cursor-pointer"
            style={{ background: COLORS.gold }}
          >
            <span>Enquire & Get Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
