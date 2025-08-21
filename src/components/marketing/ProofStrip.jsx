
import React from 'react';

export default function ProofStrip() {
  return (
    <section id="proof" className="bg-[#0B1020] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div className="flex justify-center gap-8 items-center flex-wrap">
          <div className="w-40 h-10 bg-white/10 rounded"></div>
          <div className="w-40 h-10 bg-white/10 rounded"></div>
          <div className="w-40 h-10 bg-white/10 rounded"></div>
        </div>
        <div className="mt-12 max-w-xl mx-auto bg-[#0F172A] rounded-lg p-6 shadow">
          <p className="italic text-white text-lg leading-relaxed">
            "I stopped finishing notes at home. That alone is a win."
          </p>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            — Caseworker, Community Health
          </p>
        </div>
      </div>
    </section>
  );
}
