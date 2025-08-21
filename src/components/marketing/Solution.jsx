
import React from 'react';

export default function Solution() {
  return (
    <section id="solution" className="bg-[#0F172A] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Meet Your <span className="text-yellow-400">AI Co-Pilot</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            <span className="text-yellow-400">Shift</span>Sync™ is more than a tool. It's a partner built to support you in the moment, without adding to your mental load.
          </p>
        </div>

        {/* Product Visuals */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center">
            <div className="bg-[#042136] rounded-lg p-8 h-64 flex items-center justify-center shadow-sm">
              <div className="text-white/80">
                <div className="w-16 h-16 bg-[#0F172A] rounded-lg mx-auto mb-4"></div>
                <p className="font-medium"><span className="text-yellow-400">Shift</span>Sync™ App UI</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-[#042136] rounded-lg p-8 h-64 flex items-center justify-center shadow-sm">
              <div className="text-white/80">
                <div className="w-12 h-12 bg-[#0F172A] rounded-full mx-auto mb-4"></div>
                <p className="font-medium">Wearable Pin Mockup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#042136] rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#0F172A] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Simplify Documentation
            </h3>
            <p className="text-white/80">
              Voice-activated capture that structures your notes automatically
            </p>
          </div>
          <div className="text-center p-6 bg-[#042136] rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#0F172A] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-xl">💪</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Reduce Burnout
            </h3>
            <p className="text-white/80">
              Less mental load means more energy for what matters most
            </p>
          </div>
          <div className="text-center p-6 bg-[#042136] rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#0F172A] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Restore Balance
            </h3>
            <p className="text-white/80">
              Keep work at work and reclaim your personal time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
