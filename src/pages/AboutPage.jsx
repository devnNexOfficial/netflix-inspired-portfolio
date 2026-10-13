import React from 'react';
import { Link } from 'react-router-dom';
import pictureImg from '../assets/Portfolio/picture.png';
import FAQSection from '../components/FAQSection';

const aboutFaqs = [
  {
    q: 'What credentials and background do you bring to my finances?',
    a: 'With over 5+ years of dedicated professional experience across Pakistan, the UAE, and the USA, I have successfully handled 500+ filings for 100+ clients. My background combines deep statutory knowledge of corporate and sales taxes with hands-on technical proficiency in cloud accounting platforms and complex financial modeling.'
  },
  {
    q: 'How do you ensure data confidentiality and security for client records?',
    a: 'Client financial data, bank statements, and tax identification documents are handled with strict privacy protocols. I operate through secure encrypted cloud channels, enforce two-factor authentication, and provide standard non-disclosure agreements (NDAs) prior to document collection.'
  },
  {
    q: 'Can you assist if my business receives an audit notice or tax assessment?',
    a: 'Yes. I prepare structured, legally backed responses to FBR scrutiny notices, Section 122/111 wealth queries, UAE FTA clarification requests, and IRS discrepancy letters, supported by complete transaction reconciliations and audit-ready schedules.'
  },
  {
    q: 'What size and type of businesses do you work with?',
    a: 'I partner with individuals, freelance software engineers, fast-growing e-commerce sellers, venture-funded tech startups, and established SMEs with operations spanning Pakistan, Dubai, and the United States.'
  }
];

const stats = [
  { value: '100+', label: 'Active Clients Served', detail: 'SMEs, freelancers, and online sellers' },
  { value: '500+', label: 'Tax Returns & Forms Filed', detail: 'FBR IRIS, PRA, SRB & IRS Form 5472' },
  { value: '5+', label: 'Years Specialization', detail: 'Accounting, tax laws & financial modeling' },
  { value: '100%', label: 'Cross-Border Coverage', detail: 'Serving clients across Pakistan and USA' },
];

const caseStudies = [
  {
    num: '01',
    title: 'E-Commerce Store Books Cleanup',
    category: 'ACCOUNTING & INVENTORY',
    challenge: 'A multi-channel online retailer had 12 months of unrecorded courier cash-on-delivery (COD) receipts, PayPal fees, and distorted inventory values in QuickBooks.',
    solution: 'Rebuilt 12 months of backlogged transactions, matched courier payouts against orders, reconciled bank feeds, and established automated weekly reconciliation SOPs.',
    result: 'Delivered an accurate balance sheet, audit-ready P&L, and pinpointed hidden product return leakages that improved margins by 8%.'
  },
  {
    num: '02',
    title: 'Freelancer Tax Optimization & ATL Onboarding',
    challenge: 'A full-time remote software engineer receiving $4,000/month was facing non-filer bank deductions and feared FBR wealth reconciliation scrutiny.',
    solution: 'Secured Active Taxpayer List (ATL) status, filed IRIS returns under the 1% export remittance regime with foreign bank certificates (PRC/FIRC), and reconciled personal wealth.',
    result: 'Zero penalties, 100% compliant active filer status, and thousands of rupees saved on banking transactions and vehicle withholding.'
  },
  {
    num: '03',
    title: 'US LLC Compliance & $25,000 Penalty Rescue',
    challenge: 'A Pakistani founder operating a Wyoming LLC had missed the April 15 IRS Form 5472 deadline and received a warning notice regarding the $25k penalty.',
    solution: 'Prepared Pro Forma 1120 with Form 5472, tracked all initial owner funding transactions, drafted reasonable cause mitigation documentation, and faxed directly to IRS Ogden.',
    result: 'Successfully accepted by IRS with zero penalty assessed, and established an ongoing yearly compliance schedule.'
  },
  {
    num: '04',
    title: 'Small Company Virtual CFO & KPI Dashboard',
    challenge: 'A growing service company was generating high revenue but constantly running out of cash to meet payroll and vendor liabilities.',
    solution: 'Built a 12-month rolling cash flow forecast, created a real-time Power BI dashboard tracking CAC, gross margin, and burn rate, and renegotiated payment terms.',
    result: 'Prevented impending cash crunch, increased operating cash reserves to 3 months of runway, and identified two unprofitable service offerings to deprecate.'
  }
];

const AboutPage = () => {
  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>PROFILE & CREDENTIALS // MEET FAIZAN ALI</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          ABOUT ME & MY PRACTICE
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-3xl font-light leading-relaxed">
          I believe numbers should make business decisions easier, not harder. Clean books, verified tax filings, and proactive financial intelligence under one roof.
        </p>
      </div>

      {/* Main Profile Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-14">
          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/60 via-rose-600/30 to-black rounded-3xl blur-2xl opacity-75"></div>
              <div className="relative bg-[#1c1c1c] p-3 rounded-2xl border border-red-600/40 shadow-2xl overflow-hidden max-w-[340px]">
                <img
                  src={pictureImg}
                  alt="Faizan Ali - Accountant & Tax Consultant"
                  className="w-full h-auto object-cover rounded-xl filter contrast-110 brightness-105"
                />
                <div className="pt-4 pb-2 text-center">
                  <h3 className="text-lg font-black text-white">FAIZAN ALI</h3>
                  <p className="text-xs font-mono text-red-500 uppercase tracking-widest">
                    Accountant & Tax Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-red-500 uppercase tracking-widest font-bold">
                MY MISSION
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white">
                Helping You Build Financial Confidence in Pakistan & USA
              </h2>
            </div>

            <p className="text-sm text-white/80 font-light leading-relaxed">
              I am an accounting and tax professional who works with freelancers, online sellers, startups, and growing small companies.
            </p>

            <p className="text-sm text-white/80 font-light leading-relaxed">
              Whether you need clean books in QuickBooks, a flawless FBR IRIS income tax filing, a bulletproof US LLC compliance package (Form 5472 and Pro Forma 1120), or a forward-looking cash flow forecast — I explain everything in straightforward terms without unnecessary jargon and deliver on time, every time.
            </p>

            <div className="p-4 bg-white/[0.03] border-l-2 border-red-600 rounded text-xs font-mono text-white/70 leading-relaxed">
              &ldquo;Tax laws in Pakistan and the US change continuously. My commitment is to ensure you never pay a single rupee or dollar more than legally required, while keeping your business 100% compliant.&rdquo;
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)]"
              >
                Work With Me
              </Link>
              <Link
                to="/work"
                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest transition-all"
              >
                Explore Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-red-600/50 transition-all"
            >
              <div className="text-3xl md:text-5xl font-black font-mono text-red-600 mb-2">
                {stat.value}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{stat.label}</h4>
                <p className="text-[11px] font-mono text-white/50">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies / Proven Results */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-2">
              CLIENT SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              REAL-WORLD CASE STUDIES
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/60 max-w-md">
            Proven interventions solving complex reconciliations, cross-border penalties, and cash flow bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.num}
              className="bg-[#121212] border border-white/10 hover:border-red-600/60 p-8 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold bg-red-600/10 px-2 py-0.5 rounded">
                    CASE STUDY {cs.num}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">{cs.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white">{cs.title}</h3>

                <div className="space-y-2 text-xs text-white/70 font-light leading-relaxed pt-2">
                  <p>
                    <strong className="text-white font-mono">The Challenge:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong className="text-white font-mono">The Solution:</strong> {cs.solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 bg-white/[0.01] p-3 rounded-lg">
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block mb-1">
                  MEASURABLE OUTCOME:
                </span>
                <p className="text-xs text-white font-medium">
                  {cs.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About FAQs */}
      <FAQSection
        badge="BACKGROUND & ENGAGEMENT FAQS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Insights on professional qualifications, audit defense experience, and client onboarding."
        faqs={aboutFaqs}
      />
    </div>
  );
};

export default AboutPage;
