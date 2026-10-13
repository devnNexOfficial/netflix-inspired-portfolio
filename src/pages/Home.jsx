import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Services from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import FAQSection from '../components/FAQSection';

const homeFaqs = [
  {
    q: 'What jurisdictions and tax authorities do you actively handle?',
    a: 'I specialize in tri-jurisdictional compliance across Pakistan (Federal FBR, Punjab PRA, Sindh SRB), the United Arab Emirates (Federal Tax Authority - Corporate Tax & VAT), and the United States (IRS foreign-owned LLC Form 5472, Pro Forma 1120, and W-8BEN).'
  },
  {
    q: 'How do you prevent double taxation for cross-border businesses?',
    a: 'By leveraging Bilateral Double Tax Avoidance Treaties (DTT), utilizing Foreign Tax Credits (FTC), structuring qualifying foreign remittances correctly, and preparing comprehensive wealth reconciliation statements to ensure full legal immunity on both sides.'
  },
  {
    q: 'What accounting software ecosystems do you work with?',
    a: 'I manage ledgers and reporting directly in QuickBooks Online, Xero, Zoho Books, Microsoft Excel (Advanced financial modeling), Power BI, as well as governmental portals: FBR IRIS, FTA EmaraTax, and IRS e-Services.'
  },
  {
    q: 'Do you offer ongoing monthly retainers or one-off filings?',
    a: 'Both. I provide recurring monthly bookkeeping and Virtual CFO retainers for growing businesses, as well as standalone annual tax returns, historical books cleanup rescues, and cross-border entity structuring.'
  },
  {
    q: 'How does the initial onboarding and document review work?',
    a: 'We begin with a confidential discovery consultation to review your current tax filings, bank feeds, or backlog. Once scoped, document exchange takes place via secure encrypted cloud channels with an NDA guarantee.'
  }
];

const featuredCategories = [
  {
    title: 'Pakistan Tax Compliance',
    tag: 'FBR & PROVINCIAL',
    route: '/pakistan-tax',
    description: 'Income Tax Return (Salaried, Freelancers, AOPs, Companies), Sales Tax on Goods & Services (PRA, SRB, KPRA), Withholding tax filing, and Active Taxpayer List (ATL) maintenance.',
    items: ['Tax Year 2027 Slabs Calculator', '1% Export Remittance Final Tax', 'Provincial Sales Tax (PRA/SRB)', 'E-Invoicing Compliance'],
    badge: 'NEW TAX YEAR 2027'
  },
  {
    title: 'UAE Corporate Tax & VAT',
    tag: 'FTA EMARATAX',
    route: '/uae-tax',
    description: 'Corporate Tax TRN Registration, Small Business Relief (SBR) up to AED 3M, Free Zone 0% Qualifying Person audits, and quarterly 5% VAT filings.',
    items: ['Avoid AED 10k Late Fine', '9% vs 0% SBR Calculator', 'Free Zone Substance Review', 'Quarterly VAT 201 Returns'],
    badge: 'MANDATORY REGISTRATION'
  },
  {
    title: 'US Tax & LLC Compliance',
    tag: 'IRS & CROSS-BORDER',
    route: '/us-tax',
    description: 'Specialized reporting for foreign-owned single-member US LLCs. Protect yourself against the severe $25,000 IRS late filing penalty on Form 5472 & Pro Forma 1120.',
    items: ['Form 5472 & Pro Forma 1120', 'Form W-8BEN & Treaty Benefits', 'FBAR & FATCA Compliance', 'Pakistan-US Tax Structuring'],
    badge: 'CRITICAL COMPLIANCE'
  },
  {
    title: 'Accounting & Virtual CFO',
    tag: 'FULL FINANCIAL MANAGEMENT',
    route: '/work',
    description: 'End-to-end bookkeeping, automated bank reconciliation, monthly P&L, balance sheets, cash flow forecasting, and KPI dashboards in QuickBooks, Xero, and Excel.',
    items: ['Daily Bookkeeping & Cleanup', 'Virtual CFO & Financial Modeling', 'COGS & E-Commerce Accounting', 'Payroll & Audit-Ready Books'],
    badge: 'PROVEN SYSTEM'
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We analyze your current tax status, bookkeeping condition, or business goals in a detailed introductory discussion.'
  },
  {
    num: '02',
    title: 'Document Review',
    desc: 'Secure collection and audit of bank statements, invoices, previous FBR/IRS filings, and operational expenses.'
  },
  {
    num: '03',
    title: 'Setup & Cleanup',
    desc: 'Reconciling backlog transactions, organizing chart of accounts, or registering with FBR/provincial revenue authorities.'
  },
  {
    num: '04',
    title: 'Filing & Execution',
    desc: 'Timely submission of tax returns, Form 5472 filings, sales tax statements, or generation of financial statements.'
  },
  {
    num: '05',
    title: 'Ongoing Advisory',
    desc: 'Continuous monthly management reports, advance tax warnings, deadline reminders, and growth strategy.'
  }
];

const Home = () => {
  return (
    <div className="w-full bg-[#050505] text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Expertise Section (Heading: WHAT I DO) */}
      <Expertise />

      {/* 4. Service Cards Section (Interactive 3D Cards from Projects.jsx) */}
      <Services />

      {/* 5. Core Skills Matrix */}
      <Skills />

      {/* 6. Netflix Featured Categories Row */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>SPECIALIZED DOMAINS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              CORE PRACTICE AREAS
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-white/60 max-w-md">
            Click into each domain for comprehensive regulatory guides, tax slab calculations, and bespoke work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative bg-[#121212] border border-white/10 hover:border-red-600/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(229,9,20,0.25)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-red-500 font-bold bg-red-600/10 border border-red-600/20 px-2.5 py-1 rounded">
                    {cat.badge}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">
                    {cat.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-4 space-y-2 border-t border-white/10">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/80">
                      <span className="text-red-500 font-bold">&bull;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6">
                <Link
                  to={cat.route}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 border border-white/20 text-white font-mono text-xs uppercase tracking-widest group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300"
                >
                  <span>Explore {cat.title}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Methodology: How I Work */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
            THE METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            HOW I WORK WITH CLIENTS
          </h2>
          <p className="text-xs md:text-sm font-light text-white/60">
            A structured, deadline-driven five-step engagement process that eliminates surprises and keeps you audit-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:border-red-600/60 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <span className="text-3xl font-black font-mono text-red-600 group-hover:scale-110 inline-block transition-transform">
                  {step.num}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 mt-6 text-[10px] font-mono text-white/30 uppercase">
                PHASE {step.num}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <FAQSection
        badge="COMMON INQUIRIES"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Answers to common questions about cross-border tax, software stacks, and advisory engagements."
        faqs={homeFaqs}
      />

      {/* 9. Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
