import React from 'react';
import { trackEvent } from '@/components/lib/analytics';

export default function CTAFooter({ onOpenModal }) {
  const handleMainCTA = () => {
    trackEvent('footer_main_cta_click');
    const signupElement = document.getElementById('signup');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenModal();
    }
  };

  return (
    <section id="signup" className="bg-[#042136] text-white py-14 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d23aff8c5_shiftsynclogo1.png"
          alt="ShiftSync™ Logo"
          className="h-24 md:h-32 mx-auto mb-8"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Workday?
        </h2>
        <p className="text-xl mb-8 text-white/80">
          Join the waitlist and shape the future of frontline work.
        </p>
        
        <button
          onClick={handleMainCTA}
          className="bg-yellow-400 text-[#042136] hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold text-xl transition-colors duration-200 w-full md:w-auto"
        >
          Get Early Access
        </button>
      </div>
    </section>
  );
}