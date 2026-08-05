import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, COLORS } from '../data/siteData';

export const Blog: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5D8C]">
            Insights & Career Articles
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
            Latest Industry Blogs & Tips
          </h2>
          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
            Stay updated with tech trends, interview strategies, and skill roadmaps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={`https://images.unsplash.com/${post.img}?auto=format&fit=crop&w=600&q=80`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-extrabold bg-white/90 backdrop-blur-xs text-[#0F3A5A] shadow-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-[#5A6573]">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.read}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0F3A5A] mt-2 group-hover:text-[#1F5D8C] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5D8C] hover:text-[#0F3A5A] transition-colors pt-2"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
