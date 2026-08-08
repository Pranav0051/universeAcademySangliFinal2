import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Placements } from './components/Placements';
import { Faculty } from './components/Faculty';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Batches } from './components/Batches';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { X, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { COURSES, COLORS } from './data/siteData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const [modalForm, setModalForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Full Stack Development',
    message: ''
  });

  const handleOpenEnquiry = (courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourse(courseTitle);
      setModalForm((prev) => ({ ...prev, course: courseTitle }));
    }
    setModalSubmitted(false);
    setModalOpen(true);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(modalForm)
      });
      setModalSubmitted(true);
    } catch (err) {
      console.error('Error submitting modal enquiry:', err);
      setModalSubmitted(true);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#102A43] font-sans selection:bg-[#F6C343] selection:text-[#0F3A5A]">
      {/* Header Bar */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Sections */}
      <main>
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
        <Courses onOpenEnquiry={(title) => handleOpenEnquiry(title)} />
        <WhyChooseUs />
<Placements onOpenEnquiry={() => handleOpenEnquiry()}>
  Journey
</Placements>      
        <Testimonials />
        <Gallery />
        <Batches onOpenEnquiry={(title) => handleOpenEnquiry(title)} />
        <Blog />
        <FAQ />
        <Contact prefilledCourse={selectedCourse} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Quick Enquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0F3A5A]">
                  Enquiry Submitted!
                </h3>
                <p className="text-xs text-[#5A6573] max-w-xs mx-auto">
                  Our academic advisor will call you shortly on <strong>{modalForm.phone}</strong> with syllabus & fee details.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-[#0F3A5A]"
                  style={{ background: COLORS.gold }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <MessageSquare className="w-5 h-5 text-[#1F5D8C]" />
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F3A5A]">
                      Book Free Counselling Session
                    </h3>
                    <p className="text-[11px] text-[#5A6573]">Get up to 30% scholarship on early enrollment</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={modalForm.phone}
                      onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
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
                      placeholder="Your email"
                      value={modalForm.email}
                      onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                    Select Course *
                  </label>
                  <select
                    value={modalForm.course}
                    onChange={(e) => setModalForm({ ...modalForm, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                  >
                    {COURSES.map((c, idx) => (
                      <option key={idx} value={c.title}>
                        {c.title} ({c.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#102A43] mb-1">
                    Questions or Preferred Batch Slot
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Morning / Evening / Weekend batch?"
                    value={modalForm.message}
                    onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0F3A5A] bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={modalLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold text-[#0F3A5A] shadow-md transition-all hover:shadow-lg cursor-pointer disabled:opacity-70"
                  style={{ background: COLORS.gold }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{modalLoading ? 'Submitting...' : 'Request Free Callback'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
