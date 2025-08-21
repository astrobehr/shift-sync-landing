import React from 'react';

export default function Privacy() {
  return (
    <section id="privacy" className="bg-[#0F172A] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">How we handle your data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#0B1020] rounded-lg border border-white/10 font-medium text-white text-lg leading-relaxed">
            On-device capture option.
          </div>
          <div className="p-6 bg-[#0B1020] rounded-lg border border-white/10 font-medium text-white text-lg leading-relaxed">
            Opt-in cloud sync and export.
          </div>
          <div className="p-6 bg-[#0B1020] rounded-lg border border-white/10 font-medium text-white text-lg leading-relaxed">
            Audit trails and access controls.
          </div>
        </div>
      </div>
    </section>
  );
}