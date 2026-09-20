import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { COURSES, COLORS } from '../data/siteData';

interface ContactProps {
  prefilledCourse?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledCourse = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: prefilledCourse || 'Full Stack Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5D8C]">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3A5A] tracking-tight">
            Book Free Career Counselling Session
          </h2>
          <p className="text-sm md:text-base text-[#5A6573] leading-relaxed">
            Have questions about course fees, batch timings, or syllabus? Fill out the form 
            or talk to our expert counsellors right away.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 hover:border-[#1F5D8C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] flex items-center justify-center shrink-0 text-[#0F3A5A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A6573]">
                  Academy Location
                </h3>
                <p className="text-sm font-extrabold text-[#0F3A5A] mt-1">
                  Universe Academy Building,2nd Floor, Khot Empire, near Asian radio house, opposite site, Market Yard, Nishant Colony, Sangli Miraj Kupwad, Maharashtra 416416
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 hover:border-[#1F5D8C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] flex items-center justify-center shrink-0 text-[#0F3A5A]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A6573]">
                  Phone & WhatsApp
                </h3>
                <p className="text-sm font-extrabold text-[#0F3A5A] mt-1">
                  +91 9665492713 / +91 9823234905
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 hover:border-[#1F5D8C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] flex items-center justify-center shrink-0 text-[#0F3A5A]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A6573]">
                  Email Address
                </h3>
                <p className="text-sm font-extrabold text-[#0F3A5A] mt-1">
                  admissions@universeacademy.com
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 hover:border-[#1F5D8C]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E8] flex items-center justify-center shrink-0 text-[#0F3A5A]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A6573]">
                  Working Hours
                </h3>
                <p className="text-sm font-extrabold text-[#0F3A5A] mt-1">
                  Mon – Sat: 8:00 AM – 8:00 PM (Sun Open for Admissions)
                </p>
              </div>
            </div>

            {/* Social Connect Buttons */}
            <div className="pt-2 grid grid-cols-4 gap-2">
              {[
                { name: 'WhatsApp', color: '#25D366', link: 'https://wa.me/919665492713' },
                { name: 'Facebook', color: '#1877F2', link: 'https://www.facebook.com/share/1CLqiCGGmt/' },
                { name: 'Instagram', color: '#E1306C', link: 'https://www.instagram.com/it_universe_academy_sangli?stkn=MXV4d3dvY29taHcyZA==' },
                { name: 'LinkedIn', color: '#0A66C2', link: '#' }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl border border-slate-200 bg-white text-center text-xs font-bold text-[#5A6573] hover:text-white transition-colors flex items-center justify-center gap-1 shadow-xs"
                  style={{ '--hover-bg': s.color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = s.color;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = s.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#5A6573';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

          </div>

          {/* Right Enquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F3A5A]">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-[#5A6573] max-w-md mx-auto">
                  Thank you for reaching out to Universe Academy. Our senior counsellor will call you shortly on <strong>{formData.phone}</strong> to guide you further.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-extrabold bg-[#0F3A5A] text-white"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <MessageSquare className="w-5 h-5 text-[#1F5D8C]" />
                  <h3 className="text-lg font-extrabold text-[#0F3A5A]">
                    Quick Admission Enquiry Form
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9665492713"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                      Course Interested In *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                    >
                      {COURSES.map((c, idx) => (
                        <option key={idx} value={c.title}>
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                    Your Message / Specific Query (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about batch timings, fees, scholarship..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-extrabold text-[#0F3A5A] shadow-md transition-all hover:shadow-lg cursor-pointer disabled:opacity-70"
                  style={{ background: COLORS.gold }}
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Request...' : 'Submit & Request Callback'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
