import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-shiftsync text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d23aff8c5_shiftsynclogo1.png" 
              alt="ShiftSync™ Logo"
              className="h-32 md:h-40 mx-auto mb-4"
            />
            <p className="text-white/80">
              Empowering frontline professionals with AI-powered documentation
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60">
              © 2025 ShiftSync.ai Consulting™ All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}