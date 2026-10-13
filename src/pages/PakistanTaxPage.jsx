import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const pakistanFaqs = [
  {
    q: 'Do I need to file an FBR tax return if my annual income is below Rs 600,000?',
    a: 'Yes, absolutely. Even though income up to Rs 600,000 is taxed at 0%, filing an annual return ensures you are placed on the Active Taxpayer List (ATL). Non-filers suffer up to double withholding tax deductions on cash withdrawals, banking transfers, motor vehicle purchases, and property registrations.'
  },
  {
    q: 'What is the final tax rate on foreign remittances from freelance and IT exports?',
    a: 'Foreign remittances received by IT and IT-enabled service providers registered with PSEB qualify for a concessional final tax rate of 0.25%. General exports of services (consulting, graphic design, content creation) without PSEB registration are taxed at 1% final tax deducted by the commercial bank on remittance encashment.'
  },
  {
    q: 'What changed in the Salaried Tax Slabs for Tax Year 2027?',
    a: 'Under Finance Act 2026, the progressive slabs range from 0% (up to Rs 600,000) to 35% (above Rs 7,000,000). Crucially, the 9% surcharge previously levied on high salaried individuals has been abolished for Tax Year 2027.'
  },
  {
    q: 'How does provincial sales tax on services differ from federal sales tax?',
    a: 'The FBR administers an 18% federal sales tax on tangible goods. Sales tax on services is independently governed by provincial revenue authorities: Punjab Revenue Authority (PRA at 16%), Sindh Revenue Board (SRB at 13%), Khyber Pakhtunkhwa Revenue Authority (KPRA at 15%), and Balochistan Revenue Authority (BRA at 15%).'
  },
  {
    q: 'What is a Wealth Statement (Section 116) and why is it so strictly monitored?',
    a: 'The Wealth Statement reconciles your personal net assets from July 1 to June 30 against your declared net income and living expenses. Any unexplained difference between asset growth and declared income triggers FBR inquiries under Section 111 (unexplained assets/income).'
  },
  {
    q: 'What are the official FBR annual return filing deadlines?',
    a: 'The statutory deadline for salaried individuals, business individuals, and AOPs is 30th September. For companies with a normal tax year ending 30th June, the deadline is 31st December.'
  }
];

const slabs2027 = [
  { slab: 'Up to Rs 600,000', rate: '0%', calculation: 'Nil' },
  { slab: 'Rs 600,001 to Rs 1,200,000', rate: '1%', calculation: '1% of the amount exceeding Rs 600,000' },
  { slab: 'Rs 1,200,001 to Rs 2,200,000', rate: '11%', calculation: 'Rs 6,000 + 11% of amount exceeding Rs 1,200,000' },
  { slab: 'Rs 2,200,001 to Rs 3,200,000', rate: '20%', calculation: 'Rs 116,000 + 20% of amount exceeding Rs 2,200,000' },
  { slab: 'Rs 3,200,001 to Rs 4,100,000', rate: '25%', calculation: 'Rs 316,000 + 25% of amount exceeding Rs 3,200,000' },
  { slab: 'Rs 4,100,001 to Rs 5,600,000', rate: '29%', calculation: 'Rs 541,000 + 29% of amount exceeding Rs 4,100,000' },
  { slab: 'Rs 5,600,001 to Rs 7,000,000', rate: '32%', calculation: 'Rs 976,000 + 32% of amount exceeding Rs 5,600,000' },
  { slab: 'Above Rs 7,000,000', rate: '35%', calculation: 'Rs 1,424,000 + 35% of amount exceeding Rs 7,000,000' }
];

const calculatePakistanTax = (annualIncome) => {
  const income = Math.max(0, parseFloat(annualIncome) || 0);
  let tax = 0;
  let slabIndex = 0;

  if (income <= 600000) {
    tax = 0;
    slabIndex = 0;
  } else if (income <= 1200000) {
    tax = (income - 600000) * 0.01;
    slabIndex = 1;
  } else if (income <= 2200000) {
    tax = 6000 + (income - 1200000) * 0.11;
    slabIndex = 2;
  } else if (income <= 3200000) {
    tax = 116000 + (income - 2200000) * 0.20;
    slabIndex = 3;
  } else if (income <= 4100000) {
    tax = 316000 + (income - 3200000) * 0.25;
    slabIndex = 4;
  } else if (income <= 5600000) {
    tax = 541000 + (income - 4100000) * 0.29;
    slabIndex = 5;
  } else if (income <= 7000000) {
    tax = 976000 + (income - 5600000) * 0.32;
    slabIndex = 6;
  } else {
    tax = 1424000 + (income - 7000000) * 0.35;
    slabIndex = 7;
  }

  return {
    annualTax: Math.round(tax),
    monthlyTax: Math.round(tax / 12),
    effectiveRate: income > 0 ? ((tax / income) * 100).toFixed(2) : '0.00',
    netAnnual: Math.round(income - tax),
    netMonthly: Math.round((income - tax) / 12),
    slabIndex
  };
};

const PakistanTaxPage = () => {
  const [inputSalary, setInputSalary] = useState('1800000');
  const [salaryMode, setSalaryMode] = useState('annual'); // 'annual' or 'monthly'

  const effectiveAnnual = salaryMode === 'monthly'
    ? (parseFloat(inputSalary) || 0) * 12
    : (parseFloat(inputSalary) || 0);

  const taxResult = calculatePakistanTax(effectiveAnnual);

  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>FEDERAL & PROVINCIAL COMPLIANCE // TAX YEAR 2027</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          PAKISTAN TAX ADVISORY
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-3xl font-light leading-relaxed">
          Comprehensive tax guidance for salaried executives, business individuals, AOPs, companies, and freelancers. Complete FBR IRIS return filing, provincial sales tax (PRA/SRB/KPRA/BRA), and withholding compliance under Finance Act 2026.
        </p>
      </div>

      {/* Tax Year 2027 Interactive Calculator */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#121212] border border-red-600/40 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(229,9,20,0.2)]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest block mb-2">
                INTERACTIVE TAX TOOL
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white">
                Salaried Tax Calculator (Tax Year 2027)
              </h2>
              <p className="text-xs md:text-sm text-white/60 font-light mt-1">
                Updated with Finance Act 2026 rates. Note: The 9% surcharge on high salaried brackets was abolished from Tax Year 2027.
              </p>
            </div>

            {/* Mode switch */}
            <div className="flex items-center bg-black/60 p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setSalaryMode('annual')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  salaryMode === 'annual' ? 'bg-red-600 text-white font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                Annual Salary
              </button>
              <button
                onClick={() => setSalaryMode('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  salaryMode === 'monthly' ? 'bg-red-600 text-white font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                Monthly Salary
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                  Enter {salaryMode === 'annual' ? 'Annual' : 'Monthly'} Salary (PKR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-mono text-white/40">Rs</span>
                  <input
                    type="number"
                    value={inputSalary}
                    onChange={(e) => setInputSalary(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-black/70 border border-white/20 rounded-xl text-xl font-mono font-bold text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="e.g. 150000"
                  />
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div>
                <span className="text-[11px] font-mono text-white/40 block mb-2">POPULAR SALARY PRESETS:</span>
                <div className="flex flex-wrap gap-2">
                  {salaryMode === 'annual' ? (
                    <>
                      <button onClick={() => setInputSalary('1200000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">1.2M / yr</button>
                      <button onClick={() => setInputSalary('2400000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">2.4M / yr</button>
                      <button onClick={() => setInputSalary('4800000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">4.8M / yr</button>
                      <button onClick={() => setInputSalary('8000000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">8.0M / yr</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => setInputSalary('100000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">100k / mo</button>
                      <button onClick={() => setInputSalary('200000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">200k / mo</button>
                      <button onClick={() => setInputSalary('350000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">350k / mo</button>
                      <button onClick={() => setInputSalary('600000')} className="text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded">600k / mo</button>
                    </>
                  )}
                </div>
              </div>

              <div className="p-4 bg-red-600/10 border border-red-600/30 rounded-xl text-xs text-white/80 leading-relaxed font-light">
                <span className="font-bold text-red-500 font-mono">FBR Filing Note:</span> Even if your salary is below Rs 600,000 (0% tax bracket), maintaining active filer status on the ATL prevents punitive 100% withholding surcharges on banking and property transactions.
              </div>
            </div>

            {/* Calculated Results Card */}
            <div className="lg:col-span-7 bg-black/90 border border-white/15 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#151515] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">ANNUAL TAX</span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-red-500 mt-1">
                    Rs {taxResult.annualTax.toLocaleString()}
                  </div>
                </div>

                <div className="bg-[#151515] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">MONTHLY TAX</span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-white mt-1">
                    Rs {taxResult.monthlyTax.toLocaleString()}
                  </div>
                </div>

                <div className="bg-[#151515] p-4 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">EFFECTIVE RATE</span>
                  <div className="text-2xl md:text-3xl font-black font-mono text-red-400 mt-1">
                    {taxResult.effectiveRate}%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono text-white/40 block">NET TAKE-HOME (MONTHLY)</span>
                  <span className="text-xl font-bold font-mono text-white">Rs {taxResult.netMonthly.toLocaleString()}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono text-white/40 block">NET TAKE-HOME (ANNUAL)</span>
                  <span className="text-xl font-bold font-mono text-white">Rs {taxResult.netAnnual.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-white/50">
                  Applicable Slab: <span className="text-white font-bold">{slabs2027[taxResult.slabIndex].slab}</span> ({slabs2027[taxResult.slabIndex].rate})
                </div>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all"
                >
                  File My Return
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Year 2027 Salaried Slabs Table */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest block mb-1">
                LEGAL SCHEDULE
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white">
                Tax Year 2027 Income Tax Slabs (Salaried Individuals)
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 border border-white/10 px-3 py-1 rounded bg-black">
              1 July 2026 to 30 June 2027
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm font-mono">
              <thead>
                <tr className="border-b border-white/20 text-white/40 uppercase tracking-widest text-[11px]">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Taxable Income Slab</th>
                  <th className="py-3 px-4">Rate</th>
                  <th className="py-3 px-4">Tax Calculation Formula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {slabs2027.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 text-red-500 font-bold">{idx + 1}</td>
                    <td className="py-3.5 px-4 font-bold text-white">{item.slab}</td>
                    <td className="py-3.5 px-4 text-red-400 font-bold">{item.rate}</td>
                    <td className="py-3.5 px-4 text-white/70">{item.calculation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Pakistan Tax */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
            STATUTORY COVERAGE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            COMPLETE PAKISTAN TAX PRACTICE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Sales Tax */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                SALES TAX ON GOODS & SERVICES
              </span>
              <span className="text-xs font-mono text-white/40">FBR & PROVINCES</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Federal & Provincial Sales Tax Registration & Filing
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Federal Sales Tax on Goods:</strong> 18% standard rate administered by FBR.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Provincial Sales Tax on Services:</strong> PRA (Punjab ~16%), SRB (Sindh ~13%), KPRA (KPK ~15%), and BRA (Balochistan).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Monthly Filing Cycle:</strong> Returns and input tax adjustments due monthly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>E-Invoicing Real-Time Integration:</strong> Finance Bill proposed 10% tax credit for businesses integrating FBR digital point-of-sale e-invoicing.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Freelancers & IT Exports */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                EXPORT OF SERVICES & FREELANCERS
              </span>
              <span className="text-xs font-mono text-white/40">PSEB & BANK REMITTANCES</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              IT Exporters, Freelance Agencies & Remote Contractors
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>1% Final Tax on Remittances:</strong> Foreign currency remittances from export of services deducted at bank level as full and final tax.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>0.25% Reduced Rate:</strong> For IT and IT-enabled services registered with PSEB (Pakistan Software Export Board).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Active Taxpayer List (ATL):</strong> Maintain active filer status to protect against banking deduction penalties.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Wealth Reconciliation:</strong> Proper documentation of foreign bank inward remittance certificates (PRC/FIRC).</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Corporate Tax */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                CORPORATE & AOP TAX
              </span>
              <span className="text-xs font-mono text-white/40">SECP & PRIVATE LIMITED</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Corporate Returns, Super Tax & Minimum Tax
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Corporate Tax Rate:</strong> 29% flat tax on taxable company profits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Super Tax on High Incomes:</strong> Multi-tiered super tax applied to high-earning entities and conglomerates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Turnover & Minimum Tax:</strong> Alternate corporate tax assessments and Section 113 compliance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Annual Deadline:</strong> 31st December for companies with accounting year ending June 30.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Withholding Tax & E-Commerce */}
          <div className="bg-[#121212] border border-white/15 p-8 rounded-2xl space-y-4 hover:border-red-600/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded">
                WITHHOLDING & E-COMMERCE
              </span>
              <span className="text-xs font-mono text-white/40">DIGITAL ECONOMY</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Withholding Statements & Online Marketplace Taxation
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Monthly WHT Deposit:</strong> Mandatory deposit and statements submission by 15th of the following month.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Filer vs Non-Filer Gap:</strong> Massive withholding penalties applied to non-filers across vehicle, cash, and property transactions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>E-Commerce Sellers:</strong> Courier cash-on-delivery (COD) settlements and marketplace withholding under Finance Act rules.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&bull;</span>
                <span><strong>Digital Payments:</strong> 5% WHT on social media advertising/revenue and 0.5% on card remittances.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deadlines Calendar Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-black border border-white/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-red-500 font-bold tracking-widest uppercase">
              STATUTORY DEADLINES REMINDER
            </span>
            <h4 className="text-2xl font-bold text-white">
              Key FBR Filing Dates
            </h4>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-white/70 pt-1">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                Individuals & AOPs: <strong className="text-white">30 September</strong>
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                Companies: <strong className="text-white">31 December</strong>
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                Sales Tax Returns: <strong className="text-white">Monthly (15th - 18th)</strong>
              </span>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)] shrink-0"
          >
            File Before Deadline
          </Link>
        </div>
      </section>

      {/* Pakistan Tax FAQs */}
      <FAQSection
        badge="FBR COMPLIANCE FAQS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Authoritative answers regarding FBR return filing, active taxpayer status, provincial sales tax, and IT exports."
        faqs={pakistanFaqs}
      />
    </div>
  );
};

export default PakistanTaxPage;
