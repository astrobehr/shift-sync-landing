import React from 'react';
import { trackEvent } from '@/components/lib/analytics';

export default function FinalCTA({ onOpenModal }) {
  const handleCTAClick = () => {
    trackEvent('final_cta_click');
    onOpenModal();
  };

  return (
    <section className="bg-[#0F172A] py-14 md:py-20 text-center">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Ready to reclaim your time?
        </h2>
        <button 
          onClick={handleCTAClick}
          className="bg-[#2563EB] hover:bg-[#1E4FC0] text-white px-6 py-3 rounded-xl font-medium shadow"
        >
          Get early access
        </button>
      </div>
    </section>
  );
}