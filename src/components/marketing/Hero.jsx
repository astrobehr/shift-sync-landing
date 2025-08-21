
import React from 'react';
import { trackEvent } from '@/components/lib/analytics';

export default function Hero({ onOpenModal }) {
  const handleCTAClick = () => {
    trackEvent('hero_pilot_cta_click');
    const signupElement = document.getElementById('signup');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenModal();
    }
  };

  return (
    <section className="bg-[#042136] text-white">
      <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text content */}
          <div className="text-center order-last md:order-first">
            {/* Brand Badge */}
            <div className="mb-6 flex justify-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d23aff8c5_shiftsynclogo1.png" 
                alt="ShiftSync™" 
                className="w-[280px] md:w-[420px] min-w-[220px] md:min-w-[360px] max-w-[320px] md:max-w-[520px]"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Reclaim Your Time.
              <br />
              <span className="text-yellow-400">Renew Your Purpose.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-lg mx-auto text-white/90">
              <span className="text-yellow-400">Shift</span>Sync™ is your wearable, voice-activated AI co-pilot designed for frontline professionals to simplify documentation, reduce burnout, and restore work–life balance.
            </p>
            <div className="mt-10">
              <button
                onClick={handleCTAClick}
                className="bg-yellow-400 text-[#042136] hover:bg-yellow-500 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200 w-full md:w-auto"
              >
                Be First to Pilot ShiftSync™
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-first md:order-last flex justify-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f940b31a7_hero_nursejpg.png"
              alt="A smiling nurse in blue scrubs, representing a frontline professional using ShiftSync™."
              className="rounded-lg shadow-2xl w-full max-w-sm md:max-w-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
