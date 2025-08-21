import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#0B1020] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">FAQ</h2>
        <div className="max-w-2xl mx-auto">
          <details className="mb-4 p-6 bg-[#0F172A] border border-white/10 rounded-lg">
            <summary className="font-medium text-white text-lg cursor-pointer">Does ShiftSync work with my EMR?</summary>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">You can export structured notes. Direct integrations are in progress.</p>
          </details>
          <details className="mb-4 p-6 bg-[#0F172A] border border-white/10 rounded-lg">
            <summary className="font-medium text-white text-lg cursor-pointer">Is this HIPAA compliant?</summary>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">We follow HIPAA best practices with local capture and opt-in sync.</p>
          </details>
          <details className="mb-4 p-6 bg-[#0F172A] border border-white/10 rounded-lg">
            <summary className="font-medium text-white text-lg cursor-pointer">What devices do you support?</summary>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">Mobile and desktop web to start. Wearables in pilot.</p>
          </details>
          <details className="mb-4 p-6 bg-[#0F172A] border border-white/10 rounded-lg">
            <summary className="font-medium text-white text-lg cursor-pointer">What does it cost?</summary>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">Pilot pricing available for clinics and community health orgs.</p>
          </details>
        </div>
      </div>
    </section>
  );
}