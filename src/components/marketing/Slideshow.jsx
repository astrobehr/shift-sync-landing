
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { trackEvent } from '@/components/lib/analytics';

const solutionMessages = [
  "One voice note, linked to the patient and your team — handoffs stay in sync without extra clicks.",
  "Capture details in the moment so charting later takes minutes, not hours.",
  "Dictate once; ShiftSync auto-formats clean SOAP or your custom template.",
  "Tap the pin, drop a timestamped note, and resume instantly — no context lost.",
  "Smart reminders surface the right detail at the right time so nothing slips.",
  "End-of-shift wrap-ups clear the queue, so you can leave work at work.",
  "Be first to pilot ShiftSync™ — add your email and shape the rollout."
];

export default function Slideshow({ onOpenModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: "Communication Breakdowns",
      subtitle: "Scattered notes on paper, delayed EMR updates, and verbal handoffs create gaps that eat precious minutes and increase patient risk. Critical information gets lost in translation.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/36198076c_Communication_Breakdownspng.png"
    },
    {
      title: "Burnout & Fatigue",
      subtitle: "Juggling multiple fragmented tools and systems drains your mental energy before you even start caring for patients. The cognitive load is exhausting.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dec9ac4b9_Burnout_Fatiguepng.png"
    },
    {
      title: "Overwhelming Documentation",
      subtitle: "Hours of documentation eat into patient care time. What should take minutes stretches into lengthy sessions, keeping you from what matters most.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/74901f31a_Overwhelming_Documentation_Burdenpng.png"
    },
    {
      title: "Workflow Interruptions",
      subtitle: "Constant interruptions break your focus and make it impossible to maintain continuity. Important details slip through the cracks when you're pulled in multiple directions.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a53f64756_Workflow_Interruptionspng.png"
    },
    {
      title: "Memory Overload",
      subtitle: "Trying to remember every detail across multiple patients while managing urgent situations is impossible. Your brain wasn't designed to be a filing cabinet.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7c189c23f_Lost-Timepng.png"
    },
    {
      title: "Work Spilling into Home",
      subtitle: "Unfinished documentation and racing thoughts about patients follow you home, stealing precious time with family and preventing true rest and recovery.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/674e97dd2_Work_Spillinpng.png"
    },
    {
      title: "There's a Better Way",
      subtitle: "What if you could capture everything instantly, without disrupting your workflow?",
      image: null,
      isCTA: true
    }
  ];

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    trackEvent('slideshow_next_click');
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    trackEvent('slideshow_prev_click');
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    trackEvent('slideshow_dot_click', { slide: index });
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    trackEvent('slideshow_play_toggle', { playing: !isPlaying });
  };

  const handleCTAClick = () => {
    trackEvent('slideshow_cta_click');
    const signupElement = document.getElementById('signup');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenModal();
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleFocus = () => {
    setIsPaused(true);
  };

  const handleBlur = () => {
    setIsPaused(false);
  };

  return (
    <section className="bg-[#042136] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
          What's Draining <span className="text-yellow-400">Frontline Professionals</span>
        </h2>

        <div 
          className="relative bg-[#0F172A] rounded-lg shadow-lg overflow-hidden slideshow"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <div className="relative slideshow-viewport">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 slide-frame ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.isCTA ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#042136] to-[#0F172A] slide--cta">
                    <div className="slide-content">
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d23aff8c5_shiftsynclogo1.png" 
                        alt="ShiftSync™" 
                        className="h-32 md:h-40 lg:h-48"
                      />
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        {slide.title}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 max-w-md">
                        {slide.subtitle}
                      </p>
                      <button
                        onClick={handleCTAClick}
                        className="bg-yellow-400 text-[#042136] hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 btn-cta"
                      >
                        Show Me How
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-[#0F172A] slide-media">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="slide__caption">
                      <h3 className="slide__title">{slide.title}</h3>
                      <p className="slide__text">{slide.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="text-white bg-black/50 px-3 py-1 rounded text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
            <button
              onClick={togglePlay}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="text-white bg-black/50 hover:bg-black/70 p-2 rounded transition-colors duration-200"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center slideshow-dots">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Complete Bubble Bar with Text Overlay */}
        <div className="ss-bubblebar" role="region" aria-label="How ShiftSync helps">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bf311ff30_bubbletext.png" 
            alt="ShiftSync chat bubble bar"
            className="ss-bubblebar-image"
          />
          <div className="ss-text-overlay" aria-live="polite">
            <span className="ss-label">HOW SHIFTSYNC HELPS</span>
            <span className="ss-text" key={currentSlide}>{solutionMessages[currentSlide]}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
