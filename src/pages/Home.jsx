
import React, { useState } from 'react';
import Header from '../components/marketing/Header';
import Hero from '../components/marketing/Hero';
import Slideshow from '../components/marketing/Slideshow';
import About from '../components/marketing/About';
import Solution from '../components/marketing/Solution';
import CTAFooter from '../components/marketing/CTAFooter';
import EarlyAccessModal from '../components/marketing/EarlyAccessModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="bg-[#042136] text-white">
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Slideshow onOpenModal={openModal} />
      <About />
      <Solution />
      <CTAFooter onOpenModal={openModal} />
      <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
