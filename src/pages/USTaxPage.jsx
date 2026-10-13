import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const usTaxFaqs = [
  {
    q: 'Why must I file Form 5472 if my foreign-owned US LLC had $0 in revenue?',
    a: 'Under Section 6038A, a single-member LLC owned by a non-US person is treated as a reporting entity. Any "reportable transaction" triggers the filing mandate. This includes owner capital contributions (even depositing $1 to set up a Mercury or Relay bank account) or paying registered agent annual fees out of pocket.'
  },
  {
    q: 'What are the consequences of missing the April 15 Form 5472 deadline?',
    a: 'The initial statutory penalty is $25,000 per form, per year. If the IRS issues a notice and the return is not filed within 90 days, an additional $25,000 is assessed every 30 days. Timely filing Form 7004 before April 15 grants a 6-month extension to October 15, protecting you from penalties.'
  },
  {
    q: 'Can Form 5472 and Pro Forma 1120 be e-filed online?',
    a: 'No. For foreign-owned single-member LLCs (disregarded entities), the IRS does not support digital e-filing. The complete return must be submitted by physical paper mail or via designated IRS fax transmission directly to the Ogden Service Center.'
  },
  {
    q: 'How does Form W-8BEN help non-US freelancers and remote agencies?',
    a: 'Form W-8BEN certifies your non-US status and establishes entitlement to treaty benefits under the US-Pakistan Tax Treaty. This completely eliminates the default 30% IRS backup withholding on consulting, software development, and services payments received from US clients or platforms.'
  },
  {
    q: 'What is the FBAR (FinCEN 114) requirement for US citizens living in Pakistan?',
    a: 'Any US citizen or Green Card holder residing abroad who has a financial interest in or signature authority over foreign financial accounts (including Pakistani bank accounts) must file an annual FBAR if the aggregate balance exceeds $10,000 at any time during the calendar year.'
  },
  {
    q: 'Do I have to pay state tax for an LLC registered in Wyoming or Delaware?',
    a: 'Wyoming and Delaware have no state personal or corporate income tax on out-of-state earnings. However, both require mandatory annual maintenance: Wyoming requires an annual report (min $60), and Delaware requires a flat annual franchise tax of $300 due by June 1.'
  }
];

const USTaxPage = () => {
  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
          <span>IRS REGULATORY COMPLIANCE // US LLC & EXPAT WORK</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          US TAX & LLC COMPLIANCE
        </h1>
        <p className="text-sm md:text-base text-white/70 max-w-3xl font-light leading-relaxed">
          Specialized IRS compliance for non-US residents operating US LLCs, Amazon/Stripe businesses, and cross-border freelancers. Protect your venture from the catastrophic $25,000 failure-to-file penalties.
        </p>
      </div>

      {/* The $25,000 IRS Penalty Alert Card */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="relative bg-gradient-to-br from-red-950/80 via-[#180a0b] to-[#121212] border-2 border-red-600 rounded-3xl p-8 md:p-12 shadow-[0_25px_70px_rgba(229,9,20,0.3)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white font-mono text-xs font-black uppercase tracking-widest rounded shadow-lg">
                &sharp;1 WARNING FOR FOREIGN OWNERS
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Form 5472 & Pro Forma 1120: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
                  Avoid the $25,000 IRS Penalty
                </span>
              </h2>

              <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
                If you are a non-US citizen or resident who owns a single-member US LLC (e.g., registered in Wyoming, Delaware, or New Mexico), the IRS treats your LLC as a <strong>Disregarded Entity</strong> for income tax, BUT you are legally mandated to file an informational return each year.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-black/60 p-4 rounded-xl border border-red-600/30">
                  <span className="text-xs font-mono text-red-400 font-bold block mb-1">ZERO REVENUE TRAP:</span>
                  <p className="text-xs text-white/70">
                    Even with $0 sales, a reportable transaction exists if you deposited as little as $1 to fund the LLC or paid state registered agent fees!
                  </p>
                </div>
                <div className="bg-black/60 p-4 rounded-xl border border-red-600/30">
                  <span className="text-xs font-mono text-red-400 font-bold block mb-1">STRICT DEADLINES:</span>
                  <p className="text-xs text-white/70">
                    Due April 15 (or October 15 with Form 7004 extension). Missing the due date incurs an automatic $25,000 fine per form per year.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/90 border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center space-y-4 shrink-0 lg:w-80">
              <span className="text-4xl md:text-5xl font-black font-mono text-red-600">
                $25,000
              </span>
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                IRS SECTION 6038A PENALTY
              </span>
              <p className="text-[11px] text-white/50 leading-relaxed font-light">
                Plus an additional $25,000 every 30 days if unanswered after an IRS notice.
              </p>
              <Link
                to="/contact"
                className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(229,9,20,0.6)]"
              >
                File Form 5472 Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas for US Taxation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
            IRS FORMS & PROCEDURES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            COMPREHENSIVE US TAX PRACTICE
          </h2>
          <p className="text-xs md:text-sm text-white/60">
            Expert handling of cross-border withholding forms, individual returns, and expat compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#121212] border border-white/10 hover:border-red-600/50 p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-red-400 font-bold bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                FORM 5472 & 1120
              </span>
              <h3 className="text-xl font-bold text-white">
                Foreign-Owned Single Member US LLC
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Complete preparation and secure fax/paper transmission to IRS Ogden Service Center. Timely submission of Form 7004 6-month extension to preserve compliance.
              </p>
              <div className="text-xs font-mono text-white/50 space-y-1 pt-2 border-t border-white/5">
                <div>&bull; Pro Forma 1120 preparation</div>
                <div>&bull; Owner capital contribution tracking</div>
                <div>&bull; IRS confirmation follow-up</div>
              </div>
            </div>
            <Link to="/contact" className="text-xs font-mono text-red-500 hover:text-white flex items-center gap-1 font-bold">
              <span>Get in Touch for LLC Filing</span> &rarr;
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121212] border border-white/10 hover:border-red-600/50 p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-red-400 font-bold bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                FORM W-8BEN & W-8BEN-E
              </span>
              <h3 className="text-xl font-bold text-white">
                Withholding Tax Exemption & Treaties
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Claim US-Pakistan Double Tax Avoidance Treaty benefits. Eliminate or drastically reduce the standard 30% IRS default withholding on royalty, consulting, and freelance payments from US platforms.
              </p>
              <div className="text-xs font-mono text-white/50 space-y-1 pt-2 border-t border-white/5">
                <div>&bull; Upwork, Fiverr & Stripe W-8 forms</div>
                <div>&bull; Treaty Article qualification check</div>
                <div>&bull; Foreign TIN verification</div>
              </div>
            </div>
            <Link to="/contact" className="text-xs font-mono text-red-500 hover:text-white flex items-center gap-1 font-bold">
              <span>Get Form W-8BEN</span> &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121212] border border-white/10 hover:border-red-600/50 p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-red-400 font-bold bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                FORM 1040-NR
              </span>
              <h3 className="text-xl font-bold text-white">
                Nonresident Alien US Tax Returns
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                For nonresidents with Effectively Connected Income (ECI) or US-sourced income requiring annual reconciliation and refund claims for excess withholding tax withheld.
              </p>
              <div className="text-xs font-mono text-white/50 space-y-1 pt-2 border-t border-white/5">
                <div>&bull; US Source vs Foreign Source analysis</div>
                <div>&bull; ITIN application guidance (Form W-7)</div>
                <div>&bull; Withheld tax refund optimization</div>
              </div>
            </div>
            <Link to="/contact" className="text-xs font-mono text-red-500 hover:text-white flex items-center gap-1 font-bold">
              <span>File Form 1040-NR</span> &rarr;
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-[#121212] border border-white/10 hover:border-red-600/50 p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-red-400 font-bold bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                FBAR & FATCA
              </span>
              <h3 className="text-xl font-bold text-white">
                FinCEN 114 & Form 8938 Foreign Accounts
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                US citizens and Green Card holders residing in Pakistan must report foreign bank accounts exceeding $10,000 aggregate balance at any point in the tax year to the US Treasury.
              </p>
              <div className="text-xs font-mono text-white/50 space-y-1 pt-2 border-t border-white/5">
                <div>&bull; BSA E-Filing direct portal</div>
                <div>&bull; Streamlined foreign offshore procedures</div>
                <div>&bull; Non-willful penalty defense</div>
              </div>
            </div>
            <Link to="/contact" className="text-xs font-mono text-red-500 hover:text-white flex items-center gap-1 font-bold">
              <span>File FBAR Report</span> &rarr;
            </Link>
          </div>

          {/* Card 5 */}
          <div className="bg-[#121212] border border-white/10 hover:border-red-600/50 p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-red-400 font-bold bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                EXPAT RETURNS
              </span>
              <h3 className="text-xl font-bold text-white">
                US Expats Abroad (FEIE & FTC)
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Form 1040 for Americans living in Pakistan or overseas. Utilize Foreign Earned Income Exclusion (Form 2555) and Foreign Tax Credit (Form 1116) to prevent paying tax twice.
              </p>
              <div className="text-xs font-mono text-white/50 space-y-1 pt-2 border-t border-white/5">
                <div>&bull; Bona fide residence & physical presence test</div>
                <div>&bull; State tax exit residency filing</div>
                <div>&bull; Dual-status returns</div>
              </div>
            </div>
            <Link to="/contact" className="text-xs font-mono text-red-500 hover:text-white flex items-center gap-1 font-bold">
              <span>File Expat Return</span> &rarr;
            </Link>
          </div>

          {/* Card 6 */}
          <div className="bg-[#121212] border border-white/10 hover:border-red-600/50 p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-red-400 font-bold bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
                CORPORATE ENTITIES
              </span>
              <h3 className="text-xl font-bold text-white">
                US C-Corporation Tax (Form 1120)
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Federal corporate tax return preparation for US C-Corps at the flat 21% federal rate, plus state franchise tax reports for Delaware, Wyoming, California, and Texas.
              </p>
              <div className="text-xs font-mono text-white/50 space-y-1 pt-2 border-t border-white/5">
                <div>&bull; 21% Federal Flat Corporate Rate</div>
                <div>&bull; State Annual Reports & Franchise Tax</div>
                <div>&bull; Shareholder dividend distributions</div>
              </div>
            </div>
            <Link to="/contact" className="text-xs font-mono text-red-500 hover:text-white flex items-center gap-1 font-bold">
              <span>Corporate Consultation</span> &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pakistan + US Harmony Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#101010] border border-white/15 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono text-red-500 font-bold tracking-widest uppercase">
                CROSS-BORDER INTEGRATION
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Owning a US LLC While Living in Pakistan?
              </h3>
              <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                Many Pakistani entrepreneurs own a US LLC to collect Stripe, Amazon, or Shopify payments. You must also declare your foreign assets and profits on your FBR Wealth Statement in Pakistan.
              </p>
              <div className="p-4 bg-white/[0.02] border-l-2 border-red-600 rounded text-xs text-white/80 leading-relaxed">
                Without holistic cross-border planning, you risk exposure from both FBR Section 111 foreign asset inquiries and IRS Form 5472 penalties. I structure both sides simultaneously to ensure complete legal compliance and zero double taxation.
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-3 w-full lg:w-auto">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-all text-center shadow-[0_0_20px_rgba(229,9,20,0.5)]"
              >
                Schedule Cross-Border Review
              </Link>
              <Link
                to="/pakistan-tax"
                className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/20 text-white/80 font-mono text-xs uppercase tracking-widest rounded-lg transition-all text-center"
              >
                View Pakistan Tax Rules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* US Tax FAQs */}
      <FAQSection
        badge="IRS COMPLIANCE FAQS"
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Critical insights on Form 5472, $25,000 penalty avoidance, W-8BEN treaty benefits, and expat filing."
        faqs={usTaxFaqs}
      />
    </div>
  );
};

export default USTaxPage;
