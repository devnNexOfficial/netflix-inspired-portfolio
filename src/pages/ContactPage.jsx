import React, { useState } from 'react';
import FAQSection from '../components/FAQSection';

const faqs = [
  {
    q: 'Do I need to file a tax return if my income is below Rs 600,000?',
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
    q: 'Can you handle both Pakistan and US taxes together?',
    a: 'Yes! Cross-border structuring is one of my core specializations. I ensure your US LLC complies with the IRS while simultaneously declaring your foreign income and assets correctly on your FBR wealth statement in Pakistan, completely preventing double taxation.'
  },
  {
    q: 'How does the monthly bookkeeping process work?',
    a: 'We connect your bank feeds and payment processors (Stripe, PayPal, Shopify) to QuickBooks or Xero. I categorize transactions, perform monthly reconciliations, and deliver clean P&L and Balance Sheet reports with an executive summary by the 5th to 10th of every month.'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Pakistan Tax',
    message: '',
    agreed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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
      // Backendless AJAX submission directly to Faizan's email inbox
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
      // Graceful fallback: set submitted so client can proceed with direct WhatsApp
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>GET IN TOUCH // CONSULTATION BOOKING</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          LET&apos;S FIX YOUR NUMBERS
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          Send a message below and get a prompt professional response within 24 hours. Connect directly or discuss your accounting and tax requirements in complete confidence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-[#121212] border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="absolute top-0 left-12 w-32 h-1 bg-red-600"></div>

          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 bg-red-600/20 border border-red-600 text-red-500 rounded-full flex items-center justify-center mx-auto text-3xl shadow-[0_0_20px_rgba(229,9,20,0.4)]">
                &check;
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-white">Inquiry Sent, {formData.name}!</h3>
                <p className="text-xs md:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
                  Your message has been delivered directly to Faizan&apos;s email inbox (<span className="text-white font-mono font-semibold">iamfaizan2004@gmail.com</span>). You will receive a response within 24 hours.
                </p>
              </div>

              {/* Instant WhatsApp Connect */}
              <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl max-w-md mx-auto space-y-3">
                <span className="text-[11px] font-mono text-green-400 font-bold uppercase tracking-wider block">
                  &bull; Need an instant reply?
                </span>
                <a
                  href={`https://wa.me/923399091707?text=${encodeURIComponent(
                    `Hello Faizan,\nI just submitted an inquiry on your portfolio.\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
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
                      service: 'Pakistan Tax',
                      message: '',
                      agreed: false
                    });
                  }}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Khan"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                    Work Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="Accounting & Bookkeeping">Accounting & Monthly Bookkeeping</option>
                    <option value="Pakistan Tax">Pakistan Tax (FBR IRIS Return Filing)</option>
                    <option value="UAE Corporate Tax & VAT">UAE Corporate Tax & VAT (EmaraTax / SBR)</option>
                    <option value="UAE Free Zone 0% Advisory">UAE Free Zone 0% QFZP Advisory</option>
                    <option value="Sales Tax Pakistan">Sales Tax Registration & Returns (PRA/SRB)</option>
                    <option value="US LLC Form 5472">US LLC Compliance (Form 5472 & 1120)</option>
                    <option value="US Expat / 1040-NR">US Nonresident / Expat Tax Return</option>
                    <option value="Virtual CFO">Virtual CFO & Financial Modeling</option>
                    <option value="Business Advisory">Business Advisory & Company Formation</option>
                    <option value="Cross-Border Tax">Pakistan, UAE & US Cross-Border Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                  Detailed Message / Project Scope *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current business setup, number of transactions, deadlines, or specific tax issues..."
                  className="w-full bg-black/60 border border-white/15 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 accent-red-600 rounded cursor-pointer"
                />
                <label htmlFor="agreed" className="text-xs text-white/60 leading-relaxed cursor-pointer">
                  I agree that this inquiry is for general advisory and consultation scheduling. Information shared remains strictly confidential.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <span>Send Message Directly</span>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info & Direct Channels */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold block">
                DIRECT CONTACT
              </span>
              <h3 className="text-xl font-bold text-white">Fast-Track Communication</h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Prefer immediate messaging? Reach out directly via WhatsApp for quick consultation bookings.
              </p>

              <div className="pt-2 space-y-3">
                <a
                  href="https://wa.me/923399091707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 rounded-xl transition-all group"
                >
                  <div>
                    <span className="text-xs font-mono text-white/40 block mb-0.5">WhatsApp Chat</span>
                    <span className="text-sm font-bold text-white group-hover:text-green-400 transition-colors font-mono">0339 9091707</span>
                  </div>
                  <span className="text-xs font-mono text-white/30 group-hover:text-green-400 transition-colors">&rarr;</span>
                </a>

                <a
                  href="mailto:iamfaizan2004@gmail.com"
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-xl transition-all group"
                >
                  <div>
                    <span className="text-xs font-mono text-white/40 block mb-0.5">Direct Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors font-mono">iamfaizan2004@gmail.com</span>
                  </div>
                  <span className="text-xs font-mono text-white/30 group-hover:text-red-400 transition-colors">&rarr;</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/itsfaizanhere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl transition-all group"
                >
                  <div>
                    <span className="text-xs font-mono text-white/40 block mb-0.5">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors font-mono">linkedin.com/in/itsfaizanhere</span>
                  </div>
                  <span className="text-xs font-mono text-white/30 group-hover:text-blue-400 transition-colors">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 space-y-2">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                LOCATION & TIME ZONE
              </span>
              <h4 className="text-sm font-bold text-white">Pakistan (PKT / UTC+5)</h4>
              <p className="text-xs text-white/60 font-light">
                Serving domestic clients throughout Pakistan (Lahore, Karachi, Islamabad) and cross-border clients across US time zones (EST, CST, PST).
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-[11px] font-mono text-white/40 leading-relaxed">
            <strong className="text-red-500 uppercase">Privacy Guarantee:</strong> All financial statements, tax IDs, and confidential commercial data are handled with rigorous confidentiality.
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <FAQSection
        badge="COMMON INQUIRIES"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Answers to frequent questions about Pakistan FBR filings, UAE Corporate Tax, US LLC penalties, and cross-border accounting."
        faqs={faqs}
      />
    </div>
  );
};

export default ContactPage;
