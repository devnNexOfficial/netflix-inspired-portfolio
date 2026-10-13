import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Accounting and Bookkeeping',
    desc: 'Chart of accounts setup, daily bookkeeping, bank reconciliation, accounts payable and receivable, payroll, inventory tracking and monthly financial statements.',
    tag: 'ACCOUNTING',
    skills: ['QuickBooks', 'Xero', 'Zoho Books', 'Odoo', 'FinMin', 'Excel', 'Google Sheets']
  },
  {
    title: 'Pakistan Tax',
    desc: 'FBR income tax returns for salaried, business and freelancer filers. Sales tax registration and returns for FBR, PRA, SRB, KPRA and BRA. Withholding tax and active filer status.',
    tag: 'PAKISTAN TAX',
    skills: ['FBR IRIS', 'PRA Portal', 'SRB Portal', 'KPRA', 'BRA']
  },
  {
    title: 'UAE Tax and Compliance',
    desc: 'FTA Corporate Tax registration, 9% taxable profit filing, Small Business Relief (SBR) up to AED 3M, 0% Qualifying Free Zone Person (QFZP) regime, and 5% UAE VAT returns.',
    tag: 'UAE TAX',
    skills: ['FTA EmaraTax', 'Corporate Tax 9%', 'SBR (AED 3M)', 'Free Zone 0%', 'UAE VAT 5%']
  },
  {
    title: 'US Tax and Compliance',
    desc: 'Form 5472 and pro forma 1120 for foreign owned US LLCs. Form W8BEN, 1040NR, FBAR, FATCA and cross border Pakistan and US tax planning.',
    tag: 'US TAX',
    skills: ['Form 5472', 'Form 1120', 'Form W8BEN', 'FBAR', 'IRS e-Services']
  },
  {
    title: 'Software & ERP Implementation',
    desc: 'End-to-end setup, data migration, and workflow automation for cloud ERP and accounting ecosystems. Custom Chart of Accounts, bank feeds, inventory tracking, and payment gateways.',
    tag: 'ERP & SYSTEMS',
    skills: ['Odoo ERP', 'QuickBooks Online', 'FinMin', 'Xero', 'Zoho Books', 'Data Migration']
  },
  {
    title: 'Finance and CFO Work',
    desc: 'Budgeting, cash flow forecasting, financial modeling, break even analysis, KPI dashboards, investor ready financial statements and management reporting.',
    tag: 'FINANCE',
    skills: ['Excel Modeling', 'Power BI', 'Budgeting', 'Forecasting', 'KPI Dashboards']
  },
  {
    title: 'Business Advisory',
    desc: 'Business registration as sole proprietor, partnership or SECP private limited company. NTN and STRN registration, pricing strategy, cost control and US LLC setup.',
    tag: 'ADVISORY',
    skills: ['SECP Filing', 'NTN Registration', 'STRN', 'Stripe Reporting', 'PayPal Reporting']
  },
  {
    title: 'Core Skills',
    desc: 'Bookkeeping, financial reporting, tax planning, tax return filing, sales tax compliance, withholding tax, payroll, budgeting, forecasting and cross border tax advisory.',
    tag: 'EXPERTISE',
    skills: ['Tax Planning', 'Financial Reporting', 'Payroll', 'Compliance', 'Business Advisory']
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRefs = useRef([]);
  const textRefs = useRef([]);

  const handleScroll = (e) => {
    if (window.innerWidth >= 769) return;
    const container = e.target;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let activeIdx = 0;
    let minDiff = Infinity;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = i;
      }
    });

    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.to(card, { scale: i === activeIdx ? 1 : 0.9, duration: 0.4, ease: "power2.out", overwrite: "auto" });
      }
    });

    bgRefs.current.forEach((bg, i) => {
      if (bg) gsap.to(bg, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });

    textRefs.current.forEach((txt, i) => {
      if (txt) gsap.to(txt, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const updateCards = (p) => {
          cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const offset = i - p;
            const radius = 1800;
            const angleSpread = 18;
            const angle = offset * angleSpread;
            const rad = angle * Math.PI / 180;
            const x = Math.sin(rad) * radius;
            const y = radius - (Math.cos(rad) * radius);
            const z = -Math.abs(offset) * 50;
            const scale = Math.max(0.4, 1 - Math.abs(offset) * 0.15);
            const rotateZ = angle;
            const opacity = Math.max(0.1, 1 - Math.abs(offset) * 0.3);
            const zIndex = Math.round(100 - Math.abs(offset) * 10);

            gsap.set(card, { x, y, z, scale, rotationZ: rotateZ, rotationY: 0, opacity, zIndex });
          });

          bgRefs.current.forEach((bg, i) => {
            if (!bg) return;
            const itemOpacity = Math.max(0, 1 - Math.abs(i - p));
            gsap.set(bg, { opacity: itemOpacity });
            if (textRefs.current[i]) {
              gsap.set(textRefs.current[i], { opacity: itemOpacity });
            }
          });
        };

        updateCards(0);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=600%",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress * (skillCategories.length - 1);
            updateCards(p);
          }
        });
      });

      mm.add("(max-width: 768px)", () => {
        cardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.set(card, { clearProps: "x,y,z,rotation,scale,opacity,position" });
            gsap.set(card, { scale: i === 0 ? 1 : 0.9 });
          }
        });

        bgRefs.current.forEach((bg, i) => {
          if (bg) gsap.set(bg, { clearProps: "all", opacity: i === 0 ? 1 : 0 });
        });

        textRefs.current.forEach((txt, i) => {
          if (txt) gsap.set(txt, { clearProps: "all", opacity: i === 0 ? 1 : 0 });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0b0b0b] text-white overflow-hidden flex items-center justify-center md:[perspective:1000px] select-none"
    >
      {skillCategories.map((_, i) => (
        <div
          key={i}
          ref={el => bgRefs.current[i] = el}
          className="absolute inset-0 z-0 pointer-events-none opacity-0 bg-gradient-to-tr from-black via-[#140203] to-black"
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {skillCategories.map((_, i) => (
          <h1
            key={`text-${i}`}
            ref={el => textRefs.current[i] = el}
            className="absolute text-[22vw] md:text-[18vw] font-black uppercase text-transparent leading-none tracking-tighter mix-blend-overlay"
            style={{
              WebkitTextStroke: `2px ${i % 2 === 0 ? 'rgba(229,9,20,0.3)' : 'rgba(255,255,255,0.15)'}`,
              opacity: 0
            }}
          >
            SKILLS
          </h1>
        ))}
      </div>

      <div
        className="relative w-full h-full flex md:items-center md:justify-center z-10 md:[transform-style:preserve-3d] overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center px-[10vw] md:px-0 gap-4 md:gap-0 touch-pan-x"
        onScroll={handleScroll}
      >
        {skillCategories.map((category, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="md:absolute relative shrink-0 snap-center w-[82vw] sm:w-[360px] md:w-[440px] h-[460px] md:h-[540px] rounded-[32px] p-8 md:p-10 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 flex flex-col justify-between overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-red-600/80 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-3 py-1 rounded border border-red-600/20">
                {category.tag}
              </span>
              <span className="text-xs font-mono text-white/40">
                [ {String(i + 1).padStart(2, '0')} / {String(skillCategories.length).padStart(2, '0')} ]
              </span>
            </div>

            <div className="space-y-4 relative z-10 my-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                {category.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 relative z-10">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded group-hover:border-red-600/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;