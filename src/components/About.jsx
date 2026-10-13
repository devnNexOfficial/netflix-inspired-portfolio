import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "power4.out",
        scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none reverse" }
      }
    );

    const cards = cardRefs.current;
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">

        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 01</span>
            <span className="text-white/40">|</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            WHO I AM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              AND WHAT I DO.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Bio */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)' }}
            ></div>
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">01</div>

            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">About Me</h3>
              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                I am <span className="text-white font-bold drop-shadow">Faizan Ali</span>, an accounting and tax professional who believes numbers should make business decisions easier, not harder.
              </p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                I work with freelancers, online sellers, startups and small companies. Whether you need clean books, a correct FBR filing, a compliant US LLC or a clear growth plan, I explain everything in simple language and deliver on time.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Accounting</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Tax Consulting</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Business Advisory</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Pakistan, UAE and USA</span>
            </div>
          </div>

          {/* Card 2: Stats and Process */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)' }}
            ></div>
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">02</div>

            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">At a Glance</h3>
              <ul className="space-y-3.5 text-sm text-white/80 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span><strong className="text-white">100+ Clients</strong> served in Pakistan, UAE, and the USA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span><strong className="text-white">500+ Returns & Forms Filed</strong> across FBR, UAE FTA, and US IRS compliance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span><strong className="text-white">Experience:</strong> 3 Years Rigorous Academic & Theoretical Foundation in Accounting & Taxation + 1+ Year Hands-On Practical Field Practice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span>Location: <strong className="text-white">Pakistan</strong>, serving clients in Pakistan, UAE, and the USA.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 font-mono text-xs text-red-500/80 relative z-10 font-bold uppercase tracking-wider">
              // PROVEN TRACK RECORD // ACCURACY FIRST
            </div>
          </div>

          {/* Card 3: How I Work */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-start justify-between gap-6 hover:border-red-600/60 transition-all duration-500 overflow-hidden relative group"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)' }}
            ></div>

            <div className="space-y-2 text-left relative z-10 md:w-1/3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">How I Work</h3>
              <p className="text-base md:text-lg font-semibold text-white">A simple and clear process from start to finish.</p>
            </div>

            <div className="flex flex-wrap items-start gap-4 relative z-10 md:w-2/3">
              {[
                { n: '01', t: 'Free Consultation', d: 'Understand your business and goals.' },
                { n: '02', t: 'Document Review', d: 'Collect statements, invoices and records.' },
                { n: '03', t: 'Setup and Cleanup', d: 'Fix books and registrations.' },
                { n: '04', t: 'Execution', d: 'Filing, reporting and compliance.' },
                { n: '05', t: 'Ongoing Support', d: 'Monthly reports and deadline reminders.' },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-3 min-w-[160px]">
                  <span className="text-red-500 font-black font-mono text-sm">{step.n}</span>
                  <div>
                    <p className="text-xs font-bold text-white">{step.t}</p>
                    <p className="text-xs text-white/50 font-light">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;