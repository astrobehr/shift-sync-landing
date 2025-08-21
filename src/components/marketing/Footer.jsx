import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1020] py-12">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-white">ShiftSync</div>
        <nav className="flex gap-6 text-white/60">
          <a href="#" className="hover:text-[#60A5FA]">Privacy</a>
          <a href="#" className="hover:text-[#60A5FA]">Terms</a>
          <a href="#" className="hover:text-[#60A5FA]">Contact</a>
        </nav>
        <p className="text-sm text-white/40">© 2025 ShiftSync</p>
      </div>
    </footer>
  );
}