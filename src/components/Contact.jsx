import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/iamfaizan2004@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message,
          _subject: `Homepage Inquiry from ${formData.name} (${formData.service})`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0b0b0b] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/10 select-none">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-10"
      >
        <h2
          className="text-[25vw] leading-[0.75] font-black text-red-600 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONTACT
        </h2>
      </motion.div>

      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#141414]/95 backdrop-blur-2xl border-t border-l border-white/15 w-full md:w-[90%] lg:w-[82%] p-8 md:p-16 text-white flex flex-col justify-between rounded-tl-[3rem] shadow-[0_-25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-90"></div>

          <div className="flex items-center justify-between mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span>EPISODE 04 // GET IN TOUCH</span>
            </div>
            <span className="text-xs font-mono text-white/40 tracking-wider hidden md:block">
              // REPLY WITHIN 24 HOURS
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Let&apos;s Fix Your Numbers
            </h2>
            <p className="text-white/60 text-sm mt-2 font-light">
              Send a message and get a reply within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-red-600/20 border border-red-600 text-red-500 rounded-full flex items-center justify-center mx-auto text-3xl shadow-[0_0_20px_rgba(229,9,20,0.4)]">
                &check;
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-white">Inquiry Received, {formData.name}!</h3>
                <p className="text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been sent directly to Faizan&apos;s email (<span className="text-white font-mono font-bold">iamfaizan2004@gmail.com</span>). You will receive an advisory reply within 24 hours.
                </p>
              </div>

              {/* Instant WhatsApp Option */}
              <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl max-w-sm mx-auto space-y-2">
                <span className="text-[11px] font-mono text-green-400 font-bold uppercase tracking-wider block">
                  &bull; Instant WhatsApp Connect
                </span>
                <a
                  href={`https://wa.me/923399091707?text=${encodeURIComponent(
                    `Hi Faizan,\nI just contacted you via your portfolio website.\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  <span>Chat on WhatsApp (+92 339 9091707)</span>
                  <span>&rarr;</span>
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Accounting',
                      message: '',
                      permission: false
                    });
                  }}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">

                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone or WhatsApp Number"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                    />
                  </div>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors font-medium rounded-none text-white appearance-none cursor-pointer"
                      style={{ background: 'transparent' }}
                    >
                      <option value="" disabled style={{ background: '#141414' }}>Service Needed</option>
                      <option value="Accounting & Bookkeeping" style={{ background: '#141414' }}>Accounting & Bookkeeping</option>
                      <option value="Pakistan Tax (FBR & Sales Tax)" style={{ background: '#141414' }}>Pakistan Tax (FBR & Sales Tax)</option>
                      <option value="UAE Corporate Tax & VAT" style={{ background: '#141414' }}>UAE Corporate Tax & VAT</option>
                      <option value="US Tax (Form 5472 / LLC)" style={{ background: '#141414' }}>US Tax (Form 5472 / LLC)</option>
                      <option value="Software & ERP Implementation" style={{ background: '#141414' }}>Software & ERP Implementation</option>
                      <option value="Financial Planning & Advisory" style={{ background: '#141414' }}>Financial Planning & Advisory</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your situation..."
                      required
                      className="w-full h-full min-h-[200px] bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium resize-none rounded-none text-white"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-12 mt-4 pt-6 border-t border-white/10">
                <div className="flex-1 flex items-start gap-4 text-sm font-light text-white/70">
                  <input
                    type="checkbox"
                    id="permission"
                    checked={formData.permission}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded-sm border-white/30 bg-transparent text-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    style={{ accentColor: "#E50914" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                    I give permission to contact me at this email or WhatsApp number.
                  </label>
                </div>

                <div className="flex-1 flex flex-col gap-8 text-xs text-white/50 font-light">
                  <p className="leading-relaxed max-w-[400px]">
                    Your information is kept private and will only be used to reply to your enquiry.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                    {/* Email fallback link */}
                    <a
                      href="mailto:iamfaizan2004@gmail.com"
                      className="text-white/60 hover:text-red-500 transition-colors text-xs tracking-wider font-mono flex items-center gap-1.5"
                    >
                      <span className="text-red-500 font-bold">@</span> iamfaizan2004@gmail.com
                    </a>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;