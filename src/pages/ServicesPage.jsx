import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const workFaqs = [
  {
    q: 'How does daily and monthly bookkeeping work with my existing bank feeds?',
    a: 'We connect secure, read-only feeds from your business bank accounts, credit cards, and payment gateways (Stripe, PayPal, Wise, Mercury, Payoneer) to QuickBooks Online or Xero. Your bank credentials are never exposed. All transactions are audited, categorized, and reconciled on a weekly cycle.'
  },
  {
    q: 'What is included in the monthly financial statement package?',
    a: 'By the 5th to 10th of every month, you receive a complete reporting pack comprising: (1) Profit & Loss Statement (Income Statement), (2) Balance Sheet, (3) Cash Flow Statement, and (4) an executive performance commentary summarizing margins, burn rate, and budget variances.'
  },
  {
    q: 'Can you fix backlogs and clean up chaotic past accounting records?',
    a: 'Yes. Backlog cleanups are a specialized core service. I systematically review previous bank statements, identify uncategorized expenses, fix unreconciled payroll and credit card accounts, eliminate duplicate entries, and restore audit-ready historical books in 7 to 14 days.'
  },
  {
    q: 'What is the distinction between Bookkeeping and Virtual CFO services?',
    a: 'Bookkeeping records historical financial events (what happened in the past). A Virtual CFO delivers strategic, forward-looking insights (what should happen next)—including rolling 12-month cash forecasts, scenario modeling, unit economics, gross margin optimization, and investor pitch deck preparation.'
  },
  {
    q: 'Do you track inventory and Cost of Goods Sold (COGS) for e-commerce stores?',
    a: 'Yes. For online retailers across Shopify, Amazon FBA, WooCommerce, and TikTok Shop, I match gross marketplace sales against payment processor fees, inventory purchase costs, refunds, and courier cash-on-delivery (COD) settlements to calculate true gross margins.'
  }
];

const servicesCatalog = [
  {
    id: 'bookkeeping',
    category: 'ACCOUNTING & BOOKKEEPING',
    title: 'Full-Cycle Bookkeeping & Monthly Accounts',
    tagline: 'Clean, accurate, audit-ready books delivered consistently every single month.',
    features: [
      'Daily transaction categorization and recording',
      'Bank, credit card, and payment processor reconciliation',
      'Accounts Payable (AP) and Accounts Receivable (AR) management',
      'Monthly Profit & Loss (P&L), Balance Sheet, and Cash Flow Statements',
      'Inventory & Cost of Goods Sold (COGS) tracking (ideal for Shopify, Amazon, WooCommerce)',
      'Payroll processing and wage deduction reporting',
      'Complete year-end account closing and CPA/auditor handover'
    ],
    software: ['QuickBooks Online', 'Xero', 'Zoho Books', 'Odoo ERP', 'FinMin', 'Microsoft Excel'],
    highlight: 'Never enter tax season with unreconciled accounts or missing receipts.'
  },
  {
    id: 'cleanup',
    category: 'HISTORICAL RESCUE',
    title: 'Messy Books & Backlog Cleanup',
    tagline: 'Fixing months or years of neglected transactions, discrepancies, and duplicate entries.',
    features: [
      'Comprehensive audit of previous accounting periods',
      'Reconciliation of historical bank and merchant account discrepancies',
      'Chart of Accounts reorganization and standard restructuring',
      'Correction of misclassified expenses and asset valuations',
      'Resolution of uncategorized income and suspicious balance anomalies',
      'Creation of reliable historical trend reports for lenders and investors'
    ],
    software: ['QuickBooks', 'Xero', 'Advanced Excel Formulas', 'Bank Feeds'],
    highlight: 'Turn chaotic ledgers into pristine financial records within 7 to 14 days.'
  },
  {
    id: 'cfo',
    category: 'FINANCE & VIRTUAL CFO',
    title: 'Virtual CFO, Financial Modeling & KPI Dashboards',
    tagline: 'Strategic financial leadership and forward-looking guidance without the full-time executive cost.',
    features: [
      'Rolling 12-month cash flow forecasting and runway management',
      'Annual budgeting, variance analysis, and departmental expense control',
      'Comprehensive financial models (3-statement models, DCF, unit economics)',
      'Break-even analysis and gross margin optimization by product line',
      'Interactive executive KPI dashboards (CAC, LTV, ROAS, Net Margin, Runway)',
      'Fundraising collateral: Investor-ready pro formas and pitch deck financial slides',
      'Monthly executive review meetings with actionable strategic commentary'
    ],
    software: ['Power BI', 'Google Sheets', 'Excel Modeling', 'Stripe Metrics'],
    highlight: 'Know exactly when to hire, spend, or preserve capital with total predictability.'
  },
  {
    id: 'advisory',
    category: 'BUSINESS ADVISORY',
    title: 'Business Setup, Structuring & Growth Strategy',
    tagline: 'Structure your legal entity and finance operations for optimal tax efficiency from day one.',
    features: [
      'Business structure advisory: Sole Proprietorship vs AOP vs SECP Private Limited Company',
      'National Tax Number (NTN) and Sales Tax (STRN) registrations',
      'Cross-border expansion: Setting up US LLCs, Stripe, Wise, and Mercury bank accounts correctly',
      'Pricing model analysis and profit margin enhancement strategies',
      'Operational cost rationalization and overhead reduction audits',
      'Standard Operating Procedures (SOPs) and internal financial controls creation'
    ],
    software: ['SECP e-Services', 'FBR IRIS', 'Stripe', 'Mercury Bank'],
    highlight: 'Maximize retained earnings and protect personal assets through legally sound corporate structuring.'
  }
];

const softwareStack = [
  { name: 'QuickBooks Online', type: 'Accounting Software', desc: 'Industry-standard cloud ledger management' },
  { name: 'Xero Accounting', type: 'Cloud Accounting', desc: 'Seamless bank feeds and automated invoicing' },
  { name: 'Zoho Books', type: 'SME Accounting', desc: 'Integrated inventory and client portal system' },
  { name: 'Odoo ERP', type: 'ERP Accounting', desc: 'Integrated modular bookkeeping, billing, inventory, and supply chain ledgers' },
  { name: 'FinMin Portal', type: 'Govt & Institutional Finance', desc: 'Ministry of Finance compliance schedules and regulatory reporting' },
  { name: 'Microsoft Excel (Advanced)', type: 'Financial Modeling', desc: 'Dynamic financial models, VBA, and scenario analysis' },
  { name: 'Power BI', type: 'Data Visualization', desc: 'Real-time financial KPI dashboards and reports' },
  { name: 'FBR IRIS Portal', type: 'Tax Administration', desc: 'Direct portal submission for Pakistan income and wealth statements' },
  { name: 'Provincial Tax Portals', type: 'Sales Tax', desc: 'PRA (Punjab), SRB (Sindh), KPRA (KPK), BRA (Balochistan)' },
  { name: 'Stripe & PayPal Reporting', type: 'Payment Reconciliation', desc: 'Payment gateway payout matching and fee audits' }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState('all');

  const filteredServices = selectedService === 'all'
    ? servicesCatalog
    : servicesCatalog.filter(s => s.id === selectedService);

  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>WORK DIRECTORY // FULL PRACTICE CATALOG</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          ACCOUNTING & ADVISORY WORK
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
          From day-to-day bookkeeping and messy record cleanups to strategic Virtual CFO modeling and business structuring — transparent, expert, and results-driven support.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8">
          <button
            onClick={() => setSelectedService('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              selectedService === 'all'
                ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(229,9,20,0.5)]'
                : 'bg-neutral-900 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            All Work
          </button>
          {servicesCatalog.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                selectedService === s.id
                  ? 'bg-red-600 text-white font-bold shadow-[0_0_15px_rgba(229,9,20,0.5)]'
                  : 'bg-neutral-900 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="bg-[#121212] border border-white/15 rounded-2xl p-8 md:p-12 hover:border-red-600/60 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">WORK #{String(index + 1).padStart(2, '0')}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  {service.title}
                </h2>

                <p className="text-sm text-red-400 font-mono">
                  {service.tagline}
                </p>

                <p className="text-xs text-white/70 italic bg-white/[0.02] border-l-2 border-red-600 p-3 rounded">
                  &ldquo;{service.highlight}&rdquo;
                </p>

                {/* Features list */}
                <div className="pt-4">
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                    WHAT IS INCLUDED:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <span className="text-red-500 font-bold leading-none mt-0.5">&check;</span>
                        <span className="font-light leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:w-80 shrink-0 bg-black/60 border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3">
                    SOFTWARE & TOOLS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.software.map((sw, swIdx) => (
                      <span
                        key={swIdx}
                        className="text-[11px] font-mono text-white/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)]"
                  >
                    <span>Get Started</span>
                    <span>&rarr;</span>
                  </Link>

                  <a
                    href="https://wa.me/923399091707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/20 text-white/80 text-xs font-mono tracking-wider transition-all"
                  >
                    <span>Ask On WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Software Arsenal Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
              TECH STACK & CAPABILITIES
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white">
              SOFTWARE INTEGRATIONS
            </h3>
            <p className="text-xs text-white/60">
              Proficient in leading global financial ecosystems, enterprise portals, and reporting tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareStack.map((tech, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-white/10 p-5 rounded-xl hover:border-red-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block mb-1">
                    {tech.type}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-white/60 font-light">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection
        badge="ACCOUNTING & CFO FAQS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Common questions about bookkeeping workflows, cleanup turnaround times, and Virtual CFO deliverables."
        faqs={workFaqs}
      />

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        <div className="bg-gradient-to-r from-red-950/40 to-neutral-900 border border-red-600/40 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Need a Custom Accounting or Advisory Plan?
            </h3>
            <p className="text-xs md:text-sm text-white/70 max-w-xl font-light">
              Every business has unique complexities. Contact me for a personalized proposal tailored to your volume of transactions and reporting requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)] shrink-0"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
