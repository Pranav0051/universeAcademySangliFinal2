import React, { useState } from 'react';
import { Search, Sparkles, BookOpen } from 'lucide-react';
import { COURSES, COLORS } from '../data/siteData';
import { CourseCard } from './CourseCard';

interface CoursesProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Software', 'Digital', 'Cyber & Cloud', 'Design & CAD'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.careers.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8E8] border border-[#F6C343]/50 text-xs font-extrabold text-[#0F3A5A]">
            <Sparkles className="w-3.5 h-3.5 fill-[#0F3A5A]" />
            <span>Job-Oriented Curriculum</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
            Explore Professional Career Programs
          </h2>

          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
            Choose from industry-certified courses crafted by IT leaders, featuring 
            100% practical lab sessions and guaranteed placement support.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'text-[#0F3A5A] shadow-xs'
                    : 'text-[#5A6573] hover:text-[#0F3A5A] hover:bg-slate-100'
                }`}
                style={{ background: selectedCategory === cat ? COLORS.gold : 'transparent' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search course or career..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
            />
          </div>

        </div>

        {/* Courses Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} onOpenEnquiry={onOpenEnquiry} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-[#0F3A5A]">No courses found</h3>
              <p className="text-xs text-[#5A6573] mt-1">Try resetting your search filter.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 px-4 py-1.5 rounded-lg text-xs font-bold bg-[#0F3A5A] text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Custom Course Request Banner */}
        <div className="mt-12 bg-[#0F3A5A] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-extrabold text-[#F6C343] tracking-wider uppercase">
              Need Personalized Guidance?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Unsure which course best fits your career goals?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Talk to our expert career counsellors for free profile analysis, 
              batch timings, and scholarship eligibility.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-3 rounded-xl text-xs font-extrabold text-[#0F3A5A] shadow-md transition-transform hover:scale-105 cursor-pointer shrink-0"
            style={{ background: COLORS.gold }}
          >
            Get Free Career Counselling
          </button>
        </div>

      </div>
    </section>
  );
};
