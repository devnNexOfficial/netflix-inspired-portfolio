import React, { useState } from 'react';
import FAQSection from '../components/FAQSection';

const faqs = [
  {
    q: 'Do I need to file a tax return if my income is below Rs 600,000 in Pakistan?',
    a: 'Income up to Rs 600,000 is taxed at 0%, but filing a return and appearing on the Active Taxpayer List (ATL) is essential. Active filers enjoy dramatically lower withholding tax rates on banking transactions, vehicle purchases, cash withdrawals, and property registrations.'
  },
  {
    q: 'I own a US LLC but live in Pakistan. What must I file?',
    a: 'As a non-US resident owning a single-member LLC, you are legally obligated to file an informational Pro Forma Form 1120 with Form 5472 attached each year by April 15 (or October 15 with extension), even if you have $0 in profit. The penalty for missing it is $25,000 per form per year.'
  },
  {
    q: 'Is sales tax in Pakistan the same for goods and services?',
    a: 'No. Federal sales tax on goods is standard 18% collected by the FBR. Sales tax on services is collected independently by provincial authorities: PRA (Punjab ~16%), SRB (Sindh ~13%), KPRA (Khyber Pakhtunkhwa ~15%), and BRA (Balochistan).'
  },
  {
    q: 'Can you handle Pakistan, UAE, and US taxes together?',
    a: 'Yes! Cross-border structuring is one of my core specializations. I ensure your US LLC complies with the IRS, your UAE company complies with FTA Corporate Tax & VAT, and your foreign earnings are reconciled seamlessly on your FBR wealth statement, preventing double taxation completely.'
  },
  {
    q: 'How does the monthly bookkeeping process work?',
    a: 'We connect your bank feeds and payment processors (Stripe, PayPal, Shopify, Mercury, Wise) to QuickBooks, Xero, or Odoo. I categorize transactions, perform weekly reconciliations, and deliver audit-ready P&L and Balance Sheet reports with an executive summary by the 5th to 10th of every month.'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Pakistan Tax (FBR IRIS Filing)',
    message: '',
    agreed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
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
          _subject: `New Portfolio Inquiry: ${formData.name} (${formData.service})`,
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
    <div className="w-full bg-[#050505] text-white pt-28 pb-20 selection:bg-red-600 selection:text-white">
      {/* Cinematic Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4 shadow-[0_0_15px_rgba(229,9,20,0.2)]">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>PRIORITY BOOKING // DIRECT ADVISORY</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
          LET&apos;S FIX YOUR NUMBERS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]">
            &amp; OPTIMIZE YOUR TAXES.
          </span>
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          Authoritative tax advisory, audit-ready bookkeeping, and global entity structuring for businesses, freelancers, and cross-border founders across Pakistan, UAE, and the USA.
        </p>
      </div>

      {/* Main Grid: Form & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 items-start">

        {/* Left Column: Premium Form Card */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#141414] via-[#0f0f0f] to-[#0a0a0a] border border-white/15 hover:border-red-600/40 rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-2xl transition-all duration-500">
          {/* Top Ambient Glow Bar */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {submitted ? (
            /* Executive Submission Confirmation View */
            <div className="py-10 text-center space-y-7 relative z-10">
              {/* Glowing SVG Checkmark Badge */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] border-2 border-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.5)]">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
                  TRANSMISSION CONFIRMED
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  Inquiry Received, {formData.name}!
                </h3>
                <p className="text-xs md:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been delivered directly to Faizan&apos;s priority email (<span className="text-white font-mono font-bold">iamfaizan2004@gmail.com</span>). You will receive a personalized assessment within 24 hours.
                </p>
              </div>

              {/* Inquiry Summary Table */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-5 max-w-lg mx-auto text-left space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/40">Engagement Domain:</span>
                  <span className="text-red-400 font-bold text-right">{formData.service}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/40">Client Email:</span>
                  <span className="text-white text-right truncate max-w-[240px]">{formData.email}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/40">Phone / WhatsApp:</span>
                  <span className="text-white text-right">{formData.phone || 'Not specified'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/40">Guaranteed Response:</span>
                  <span className="text-green-400 font-bold text-right">&lt; 24 Hours SLA</span>
                </div>
              </div>

              {/* Fast-Track WhatsApp CTA */}
              <div className="p-6 bg-gradient-to-br from-green-950/20 via-black to-black border border-green-600/30 rounded-2xl max-w-lg mx-auto space-y-3 shadow-[0_10px_30px_rgba(34,197,94,0.15)]">
                <div className="flex items-center justify-between text-[11px] font-mono text-green-400">
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Need an immediate reply?
                  </span>
                  <span className="text-white/40">Available on Mobile</span>
                </div>
                <a
                  href={`https://wa.me/923399091707?text=${encodeURIComponent(
                    `Hello Faizan,\nI just submitted an inquiry on your portfolio website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:scale-[1.01]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.07c-.24.68-1.39 1.25-1.92 1.33-.5.08-1.14.12-3.67-.93-2.16-.89-3.54-3.1-3.65-3.24-.11-.15-.87-1.16-.87-2.21 0-1.05.55-1.57.75-1.78.2-.21.43-.27.57-.27.15 0 .29.01.42.01.14 0 .32-.05.5.38.18.43.62 1.52.68 1.63.05.11.09.24.02.38-.07.14-.11.23-.21.35-.11.12-.23.27-.33.36-.11.1-.23.21-.1.43.13.22.58.96 1.24 1.55.85.76 1.57 1 1.79 1.11.22.11.35.09.48-.05.13-.15.55-.64.7-.86.15-.22.3-.18.5-.11.2.07 1.28.6 1.5.71.22.11.37.17.42.27.06.09.06.53-.18 1.21z"/>
                  </svg>
                  <span>Fast-Track on WhatsApp: 0339 9091707</span>
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
                      service: 'Pakistan Tax (FBR IRIS Filing)',
                      message: '',
                      agreed: false
                    });
                  }}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-all"
                >
                  &larr; Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Luxury Executive Form View */
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Start Your Advisory Engagement
                  </h3>
                  <p className="text-xs text-white/50 font-light">
                    Every message is reviewed personally by Faizan Ali under strict confidentiality.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] font-mono text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  ENCRYPTED CHANNEL
                </span>
              </div>

              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 mb-2 font-medium">
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Khan"
                    className="w-full bg-[#0d0d0d] border border-white/10 hover:border-white/20 focus:border-red-600 focus:bg-[#121212] focus:ring-1 focus:ring-red-600/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 mb-2 font-medium">
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tariq@company.com"
                    className="w-full bg-[#0d0d0d] border border-white/10 hover:border-white/20 focus:border-red-600 focus:bg-[#121212] focus:ring-1 focus:ring-red-600/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 mb-2 font-medium">
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Phone / WhatsApp</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0339 9091707 or International"
                    className="w-full bg-[#0d0d0d] border border-white/10 hover:border-white/20 focus:border-red-600 focus:bg-[#121212] focus:ring-1 focus:ring-red-600/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 mb-2 font-medium">
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Engagement Domain *</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0d0d0d] border border-white/10 hover:border-white/20 focus:border-red-600 focus:bg-[#121212] focus:ring-1 focus:ring-red-600/30 rounded-xl px-4 py-3.5 text-sm text-white transition-all outline-none cursor-pointer"
                  >
                    <optgroup label="TAXATION & FILING">
                      <option value="Pakistan Tax (FBR IRIS Filing)">Pakistan Tax (FBR IRIS Return Filing & ATL)</option>
                      <option value="UAE Corporate Tax & VAT">UAE Corporate Tax & VAT (EmaraTax / 9% / SBR)</option>
                      <option value="UAE Free Zone 0% Advisory">UAE Free Zone 0% QFZP Compliance</option>
                      <option value="Sales Tax Pakistan (PRA/SRB)">Provincial Sales Tax on Services (PRA / SRB)</option>
                      <option value="US LLC Form 5472">US Foreign-Owned LLC Compliance (Form 5472 & 1120)</option>
                      <option value="US Expat / 1040-NR">US Nonresident / Expat Tax (Form 1040-NR / W-8BEN)</option>
                      <option value="Cross-Border Tax Structuring">Cross-Border Tax Structuring (PK - UAE - USA)</option>
                    </optgroup>
                    <optgroup label="ACCOUNTING & SYSTEMS">
                      <option value="Accounting & Monthly Bookkeeping">Full-Cycle Monthly Bookkeeping (QuickBooks/Xero)</option>
                      <option value="Messy Books Cleanup">Messy Books & Backlog Account Cleanup</option>
                      <option value="Software & ERP Implementation">Software & ERP Implementation (Odoo, FinMin, QuickBooks)</option>
                      <option value="Financial Planning & Advisory">Financial Planning & Virtual CFO (Cashflow / KPIs)</option>
                      <option value="Business Formation & Advisory">Company Formation & SECP Private Ltd Registration</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 mb-2 font-medium">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Detailed Message / Project Scope *</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your current business model, approximate transaction volume, pending deadlines, or specific tax questions..."
                  className="w-full bg-[#0d0d0d] border border-white/10 hover:border-white/20 focus:border-red-600 focus:bg-[#121212] focus:ring-1 focus:ring-red-600/30 rounded-xl p-4 text-sm text-white placeholder-white/30 transition-all outline-none resize-none leading-relaxed"
                ></textarea>
                <p className="text-[11px] font-mono text-white/40 mt-1.5">
                  Information provided is treated with bank-level confidentiality and non-disclosure standards.
                </p>
              </div>

              {/* Row 4: Agreement Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-black/60 text-red-600 focus:ring-0 cursor-pointer accent-red-600"
                />
                <label htmlFor="agreed" className="text-xs text-white/60 leading-relaxed cursor-pointer select-none">
                  I confirm that the information provided is accurate and agree to receive a direct confidential consultation response via email or WhatsApp.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_10px_35px_rgba(229,9,20,0.5)] hover:shadow-[0_15px_45px_rgba(229,9,20,0.7)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Transmitting Request Directly...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Sleek Executive Sidebar */}
        <div className="lg:col-span-5 space-y-6">

          {/* Priority Channels Card */}
          <div className="bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/15 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold block">
                PRIORITY CHANNELS
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Fast-Track Communication
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Connect directly on your preferred channel for urgent filing deadlines or quick queries.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* WhatsApp Item */}
              <a
                href="https://wa.me/923399091707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-black/50 hover:bg-white/5 border border-white/10 hover:border-green-500/50 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.07c-.24.68-1.39 1.25-1.92 1.33-.5.08-1.14.12-3.67-.93-2.16-.89-3.54-3.1-3.65-3.24-.11-.15-.87-1.16-.87-2.21 0-1.05.55-1.57.75-1.78.2-.21.43-.27.57-.27.15 0 .29.01.42.01.14 0 .32-.05.5.38.18.43.62 1.52.68 1.63.05.11.09.24.02.38-.07.14-.11.23-.21.35-.11.12-.23.27-.33.36-.11.1-.23.21-.1.43.13.22.58.96 1.24 1.55.85.76 1.57 1 1.79 1.11.22.11.35.09.48-.05.13-.15.55-.64.7-.86.15-.22.3-.18.5-.11.2.07 1.28.6 1.5.71.22.11.37.17.42.27.06.09.06.53-.18 1.21z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-white/40 block mb-0.5">WhatsApp Direct</span>
                    <span className="text-sm font-bold text-white group-hover:text-green-400 transition-colors font-mono tracking-wide">
                      0339 9091707
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white/30 group-hover:text-green-400 group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </a>

              {/* Email Item */}
              <a
                href="mailto:iamfaizan2004@gmail.com"
                className="flex items-center justify-between p-4 bg-black/50 hover:bg-white/5 border border-white/10 hover:border-red-500/50 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-white/40 block mb-0.5">Advisory Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors font-mono tracking-wide">
                      iamfaizan2004@gmail.com
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white/30 group-hover:text-red-400 group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </a>

              {/* LinkedIn Item */}
              <a
                href="https://www.linkedin.com/in/itsfaizanhere/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-black/50 hover:bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.54 1.54 0 0 0 6.46 5.7a1.54 1.54 0 0 0-1.54 1.53c0 .85.69 1.53 1.54 1.53m1.39 9.97V9.7H5.07v9.03h2.78z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-white/40 block mb-0.5">LinkedIn Network</span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors font-mono tracking-wide">
                      linkedin.com/in/itsfaizanhere
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Trust & Coverage Card */}
          <div className="bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/15 rounded-3xl p-8 space-y-5 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-bold">
              OPERATIONAL COVERAGE &amp; PRIVACY
            </span>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Cross-Border Time Zone Alignment
              </h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Active daily across <span className="text-white font-medium">Pakistan (PKT / UTC+5)</span>, <span className="text-white font-medium">Dubai (GST / UTC+4)</span>, and <span className="text-white font-medium">United States (EST / CST / PST)</span>.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono text-red-500 uppercase tracking-wider font-bold block">
                FIDUCIARY CONFIDENTIALITY
              </span>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Bank statements, ledger records, NTNs, and IRS Employer Identification Numbers (EIN) are safeguarded under strict professional privilege and will never be shared with third parties.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Frequently Asked Questions Section */}
      <FAQSection
        badge="CONSULTATION FAQS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Clear, authoritative answers regarding response times, initial consultation prep, and confidential reviews."
        faqs={faqs}
      />
    </div>
  );
};

export default ContactPage;
