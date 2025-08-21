import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-[#0F172A] py-14 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
          About <span className="text-yellow-400">Shift</span>Sync™
        </h2>
        <p className="text-lg leading-relaxed text-white/80 max-w-3xl mx-auto">
          In demanding frontline roles, crucial information often slips through the cracks during emotional, rushed, or chaotic moments. These subtle, often-overlooked pain points accumulate over time, leading to burnout and a feeling of being constantly overwhelmed. <span className="text-yellow-400">Shift</span>Sync™ was created to address this fundamental challenge: to be a trusted system that helps you hold, process, and retrieve important details without adding to your mental load. Our goal is to truly support you, not just add another tool to manage.
        </p>
      </div>
    </section>
  );
}