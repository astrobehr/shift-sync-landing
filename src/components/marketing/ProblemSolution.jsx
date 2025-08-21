import React from 'react';

export default function ProblemSolution() {
  return (
    <section id="how-it-works" className="bg-[#0F172A] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
          How ShiftSync Helps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#0B1020] shadow rounded-lg border border-white/10">
            <p className="font-semibold text-red-400 text-lg leading-relaxed">Lost time and fragmented notes.</p>
            <p className="text-green-400 text-lg leading-relaxed mt-2">One tap to capture, auto-organized by patient and shift.</p>
          </div>
          <div className="p-6 bg-[#0B1020] shadow rounded-lg border border-white/10">
            <p className="font-semibold text-red-400 text-lg leading-relaxed">Interrupted mid-chart.</p>
            <p className="text-green-400 text-lg leading-relaxed mt-2">Hands-free voice capture, no keyboard needed.</p>
          </div>
          <div className="p-6 bg-[#0B1020] shadow rounded-lg border border-white/10">
            <p className="font-semibold text-red-400 text-lg leading-relaxed">Work spilling into home life.</p>
            <p className="text-green-400 text-lg leading-relaxed mt-2">After-shift reminders that respect your boundaries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}