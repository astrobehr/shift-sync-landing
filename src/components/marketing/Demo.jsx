import React from 'react';

export default function Demo() {
  return (
    <section id="demo" className="bg-[#0B1020] py-14 md:py-20 text-center">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative w-full aspect-video bg-white/10 rounded-lg overflow-hidden flex items-center justify-center border border-white/20">
          <div className="w-16 h-16 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xl">
            ▶
          </div>
        </div>
        <p className="mt-6 text-white/80 text-lg leading-relaxed">
          Tap. Speak. Structured note in seconds.
        </p>
      </div>
    </section>
  );
}