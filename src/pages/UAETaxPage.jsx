import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const calculateUAETax = (taxableProfit, annualRevenue, applySBR) => {
  const profit = Math.max(0, parseFloat(taxableProfit) || 0);
  const revenue = Math.max(0, parseFloat(annualRevenue) || 0);

  // Small Business Relief check (revenue <= 3,000,000 AED)
  if (applySBR && revenue <= 3000000) {
    return {
      taxAmount: 0,
      effectiveRate: '0.00',
      netProfit: profit,
      appliedRelief: 'Small Business Relief (SBR) Applied - 0% Corporate Tax',
      isSBR: true
    };
  }

  // Standard UAE Corporate Tax: 0% up to AED 375,000, 9% on excess
  let tax = 0;
  if (profit <= 375000) {
    tax = 0;
  } else {
    tax = (profit - 375000) * 0.09;
  }

  const effectiveRate = profit > 0 ? ((tax / profit) * 100).toFixed(2) : '0.00';

  return {
    taxAmount: Math.round(tax),
    effectiveRate,
    netProfit: Math.round(profit - tax),
    appliedRelief: profit <= 375000 ? 'Exempt Bracket (Up to AED 375,000 @ 0%)' : 'Standard Rate (9% on profit exceeding AED 375k)',
    isSBR: false
  };
};

const uaeFaqs = [
  {
    q: 'Does a Free Zone company need to register for UAE Corporate Tax if it pays 0%?',
    a: 'Yes, absolutely. Under Federal Decree-Law No. 47 of 2022, ALL juridical persons incorporated in the UAE (including Mainland and Free Zone companies) are legally required to obtain a Corporate Tax Registration Number (TRN) via EmaraTax, regardless of whether they qualify for 0% tax.'
  },
  {
    q: 'What is the Small Business Relief (SBR) and who qualifies?',
    a: 'Under Ministerial Decision No. 73 of 2023, resident businesses with gross revenue equal to or below AED 3,000,000 in any relevant tax period can elect for Small Business Relief. Taxable income is treated as nil (0% tax), and compliance requirements are significantly streamlined for periods ending on or before 31 December 2026.'
  },
  {
    q: 'What is the penalty for failing to register for Corporate Tax on time?',
    a: 'The UAE Federal Tax Authority (FTA) imposes an administrative penalty of AED 10,000 on businesses that fail to submit their corporate tax registration application within the designated timeline based on their trade license issuance month.'
  },
  {
    q: 'What are the conditions to maintain 0% tax as a Qualifying Free Zone Person (QFZP)?',
    a: 'A Free Zone company must: (1) maintain adequate economic substance and staff in the Free Zone, (2) derive qualifying income from qualifying activities or transactions with other Free Zone persons, (3) not have elected to be subject to the standard 9% rate, (4) comply with transfer pricing rules, and (5) prepare audited financial statements.'
  },
  {
    q: 'Can business owners take a tax-deductible salary from their UAE company?',
    a: 'Yes. Remuneration paid to owner-managers or connected persons is deductible from corporate tax, provided it satisfies the "arm\'s length principle" (i.e. reasonable commercial compensation for actual services rendered and supported by proper employment documentation).'
  },
  {
    q: 'What is the VAT registration threshold in the UAE?',
    a: 'Mandatory VAT registration applies when taxable supplies and imports exceed AED 375,000 over the preceding 12 months (or expected within the next 30 days). Voluntary registration is available once turnover reaches AED 187,500.'
  }
];

const UAETaxPage = () => {
  const [taxableProfit, setTaxableProfit] = useState('650000');
  const [annualRevenue, setAnnualRevenue] = useState('2400000');
  const [applySBR, setApplySBR] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const calculation = calculateUAETax(taxableProfit, annualRevenue, applySBR);

  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>FEDERAL TAX AUTHORITY (FTA) COMPLIANCE // UAE CORPORATE TAX & VAT</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          UAE CORPORATE TAX & VAT ADVISORY
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-3xl font-light leading-relaxed">
          Full-scope UAE tax compliance under Federal Decree-Law No. 47 of 2022 and VAT Law No. 8 of 2017. Corporate Tax TRN registration on EmaraTax, Small Business Relief (SBR) elections, Qualifying Free Zone 0% structuring, and quarterly VAT filings for Dubai, Abu Dhabi, and Northern Emirates businesses.
        </p>
      </div>

      {/* AED 10,000 Penalty Warning Card */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="relative bg-gradient-to-br from-amber-950/40 via-[#141414] to-[#0c0c0c] border border-amber-500/40 rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(245,158,11,0.15)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-black uppercase tracking-widest rounded shadow-lg">
                &sharp;1 FTA COMPLIANCE NOTICE
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Mandatory UAE Corporate Tax Registration: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Avoid the AED 10,000 Late Registration Penalty
                </span>
              </h2>

              <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
                The Federal Tax Authority (Cabinet Decision No. 10 of 2024) mandates all UAE juridical entities—regardless of Mainland, Free Zone, offshore status, or 0% tax bracket—to register for Corporate Tax. Missing your registration deadline incurs an immediate <strong>AED 10,000 fine</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-black/60 p-4 rounded-xl border border-white/10">
                  <span className="text-xs font-mono text-amber-400 font-bold block mb-1">FREE ZONE APPLICABILITY:</span>
                  <p className="text-xs text-white/70">
                    Being in a Free Zone (DMCC, DAFZA, IFZA, Shams, RAKEZ, Meydan) does NOT exempt you from registration. 0% Qualifying status requires active registration!
                  </p>
                </div>
                <div className="bg-black/60 p-4 rounded-xl border border-white/10">
                  <span className="text-xs font-mono text-amber-400 font-bold block mb-1">EMARATAX ONBOARDING:</span>
                  <p className="text-xs text-white/70">
                    We secure your Tax Registration Number (TRN) within 3-5 business days with complete KYC verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/90 border border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center space-y-4 shrink-0 lg:w-80">
              <span className="text-4xl md:text-5xl font-black font-mono text-amber-500">
                AED 10,000
              </span>
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                FTA LATE REGISTRATION PENALTY
              </span>
              <p className="text-[11px] text-white/50 leading-relaxed font-light">
                Mandatory for all trade license holders in Dubai and UAE.
              </p>
              <Link
                to="/contact"
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(245,158,11,0.5)]"
              >
                Register For UAE CT Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive UAE Corporate Tax Calculator */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#121212] border border-white/15 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest block mb-2">
                INTERACTIVE ESTIMATOR
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white">
                UAE Corporate Tax Calculator (9% vs SBR)
              </h2>
              <p className="text-xs md:text-sm text-white/60 font-light mt-1">
                Calculate corporate tax liability for Mainland and non-qualifying Free Zone entities under Law No. 47 of 2022.
              </p>
            </div>

            {/* SBR Toggle */}
            <div className="flex items-center gap-3 bg-black/60 p-2.5 rounded-xl border border-white/10">
              <input
                type="checkbox"
                id="sbrToggle"
                checked={applySBR}
                onChange={(e) => setApplySBR(e.target.checked)}
                className="w-4 h-4 accent-red-600 rounded cursor-pointer"
              />
              <label htmlFor="sbrToggle" className="text-xs font-mono text-white/80 cursor-pointer">
                Test Small Business Relief (Revenue &le; 3M AED)
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                  Annual Taxable Net Profit (AED)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-mono text-white/40">AED</span>
                  <input
                    type="number"
                    value={taxableProfit}
                    onChange={(e) => setTaxableProfit(e.target.value)}
                    className="w-full pl-16 pr-4 py-4 bg-black/70 border border-white/20 rounded-xl text-xl font-mono font-bold text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="e.g. 500000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                  Annual Gross Revenue / Turnover (AED)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-mono text-white/40">AED</span>
                  <input
                    type="number"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(e.target.value)}
                    className="w-full pl-16 pr-4 py-4 bg-black/70 border border-white/20 rounded-xl text-xl font-mono font-bold text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="e.g. 2500000"
                  />
                </div>
                <span className="text-[11px] font-mono text-white/40 block mt-1.5">
                  Threshold for Small Business Relief: Max AED 3,000,000
                </span>
              </div>

              {/* Quick Presets */}
              <div>
                <span className="text-[11px] font-mono text-white/40 block mb-2">PROFIT PRESETS:</span>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => { setTaxableProfit('350000'); setAnnualRevenue('1500000'); }} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">350k (0% Bracket)</button>
                  <button onClick={() => { setTaxableProfit('600000'); setAnnualRevenue('2200000'); }} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">600k Profit</button>
                  <button onClick={() => { setTaxableProfit('1200000'); setAnnualRevenue('4000000'); }} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">1.2M Profit (Above 3M Rev)</button>
                  <button onClick={() => { setTaxableProfit('2500000'); setAnnualRevenue('6000000'); }} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">2.5M Profit</button>
                </div>
              </div>
            </div>

            {/* Result Column */}
            <div className="lg:col-span-7 bg-black/90 border border-white/15 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#151515] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">CORPORATE TAX</span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-red-500 mt-1">
                    AED {calculation.taxAmount.toLocaleString()}
                  </div>
                </div>

                <div className="bg-[#151515] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">EFFECTIVE RATE</span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-white mt-1">
                    {calculation.effectiveRate}%
                  </div>
                </div>

                <div className="bg-[#151515] p-4 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">NET AFTER TAX</span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-emerald-400 mt-1">
                    AED {calculation.netProfit.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono space-y-1">
                <div className="text-white/40 uppercase">STATUS / RELIEF APPLIED:</div>
                <div className="text-white font-bold text-sm">{calculation.appliedRelief}</div>
                {calculation.isSBR && (
                  <p className="text-emerald-400/90 text-xs font-sans font-light pt-1">
                    Your revenue is under AED 3,000,000. Electing Small Business Relief legally brings corporate tax liability to AED 0!
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-white/50">
                  Rates: 0% up to AED 375,000 &bull; 9% on excess
                </div>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Consult on Tax Filing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of UAE Taxation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
            PRACTICE SCOPE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            COMPREHENSIVE UAE TAX SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Corporate Tax */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                CORPORATE TAX COMPLIANCE
              </span>
              <span className="text-xs font-mono text-white/40">LAW 47/2022</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Corporate Tax Returns & EmaraTax TRN Registration
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>TRN Registration:</strong> Complete onboarding and tax registration for LLCs, Sole Establishments, and Civil Companies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Annual Tax Return Filing:</strong> Preparation of Tax Return Form CT01 within 9 months from the end of the financial year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Small Business Relief:</strong> Assessing revenue thresholds and filing formal SBR elections to eliminate corporate tax.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Connected Person Salaries:</strong> Structuring tax-deductible compensation for owners in line with arm’s length principles.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Free Zone Qualifying 0% Regime */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                FREE ZONE 0% REGIME
              </span>
              <span className="text-xs font-mono text-white/40">QFZP SUBSTANCE</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Qualifying Free Zone Person (0% Rate Advisory)
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Qualifying Activities Audit:</strong> Vetting trading, manufacturing, holding, and treasury operations against Cabinet Decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Substance Requirements:</strong> Verifying local operating expenditure, adequate qualified staff, and office presence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>De Minimis Rule Compliance:</strong> Monitoring the non-qualifying revenue cap (lower of AED 5M or 5% of total revenue) to prevent losing 0% status for 5 years.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Audit Readiness:</strong> Arranging audited financial statements mandatory for all QFZPs.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: 5% VAT (Value Added Tax) */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                VALUE ADDED TAX (VAT)
              </span>
              <span className="text-xs font-mono text-white/40">5% STANDARD RATE</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              UAE VAT Registration & Periodic Return Filing
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Registration & Deregistration:</strong> Mandatory (AED 375k) and Voluntary (AED 187.5k) VAT registration via EmaraTax.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Periodic VAT Returns:</strong> Monthly and quarterly VAT 201 return submissions with full input tax reconciliation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Zero-Rated Export Validation:</strong> Proper documentation of export of services and physical goods outside the GCC.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Voluntary Disclosures & Reconsiderations:</strong> Rectifying past VAT calculation errors without triggering severe penalties.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: ESR, UBO & Cross-Border Treaties */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                ESR, UBO & TREATIES
              </span>
              <span className="text-xs font-mono text-white/40">INTERNATIONAL TAX</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Economic Substance & Double Tax Avoidance
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>ESR Notifications & Reports:</strong> Ensuring compliance for Holding, Headquarters, and Distribution businesses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>UBO Registry Compliance:</strong> Maintenance of Ultimate Beneficial Ownership filings with Department of Economy & Tourism (DET).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Tax Residency Certificates (TRC):</strong> Securing domestic and international TRCs for natural persons and corporate entities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Pakistan-UAE Cross-Border:</strong> Structuring dividend flows and management fees to prevent double taxation in both jurisdictions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deadlines Checklist */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-black border border-white/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold tracking-widest uppercase">
              CRITICAL UAE TAX CALENDAR
            </span>
            <h4 className="text-2xl font-bold text-white">
              Key EmaraTax Deadlines
            </h4>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-white/70 pt-1">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                Corporate Tax Return: <strong className="text-white">Within 9 months of FY end</strong>
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                VAT 201 Filing: <strong className="text-white">28th of the following month</strong>
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                CT Registration: <strong className="text-white">Based on Trade License Month</strong>
              </span>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)] shrink-0"
          >
            Review UAE Compliance
          </Link>
        </div>
      </section>

      {/* UAE FAQs */}
      <FAQSection
        badge="UAE TAX QUESTIONS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Authoritative answers on Corporate Tax registration, Free Zone 0% status, and VAT regulations."
        faqs={uaeFaqs}
      />
    </div>
  );
};

export default UAETaxPage;
