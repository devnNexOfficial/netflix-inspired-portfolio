import React, { useState } from 'react';

const FAQSection = ({
  badge = 'COMMON INQUIRIES',
  title = 'FREQUENTLY ASKED QUESTIONS',
  subtitle = 'Clear, authoritative answers to the most common questions.',
  faqs = [],
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-white/10 ${className}`}>
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
          {badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs md:text-sm text-white/60 font-light">
            {subtitle}
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-[#121212] border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-red-600/60 shadow-[0_10px_30px_rgba(229,9,20,0.15)] bg-gradient-to-b from-[#181818] to-[#121212]'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-sm md:text-base font-bold text-white pr-2 flex items-center gap-3">
                  <span className="text-red-500 font-mono text-xs">Q{index + 1}.</span>
                  {faq.q}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center border font-mono text-base shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'border-red-600 bg-red-600 text-white rotate-45 shadow-[0_0_10px_#E50914]'
                      : 'border-white/20 text-white/60 hover:text-white'
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-white/70 font-light leading-relaxed border-t border-white/5 space-y-2">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
