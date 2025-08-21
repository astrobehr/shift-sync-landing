
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Bot, Heart, Shield, Target } from 'lucide-react';

const benefits = [
  {
    icon: Mic,
    title: "Faster, Hands-Free Documentation",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ed26bc7a6_emtjpg.png",
    caption: "Capture vitals instantly in the field.",
    alt: "EMT using hands-free documentation in emergency vehicle"
  },
  {
    icon: Bot,
    title: "Real-time AI Support",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b5930045_quick-notejpg.png",
    caption: "Log small details with a single tap.",
    alt: "Healthcare worker using quick note feature"
  },
  {
    icon: Heart,
    title: "Enhanced Work-Life Balance",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/82f91f245_home-dangerjpg.png",
    caption: "Emergency tap for unsafe scenarios.",
    alt: "Safety feature for emergency situations"
  },
  {
    icon: Shield,
    title: "Unwavering Security & Privacy",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bffc82b5b_hero-nurses-pairjpg.png",
    caption: "Updates between shifts, automatically.",
    alt: "Secure shift transition and data protection"
  },
  {
    icon: Target,
    title: "Tailored to Your Role",
    image: null,
    caption: null,
    alt: null
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-shiftsync-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            How <span className="text-yellow-400">ShiftSync™</span> <span className="text-white">Helps</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-shiftsync/50 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>
              </div>

              {benefit.image && (
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group flex justify-center">
                    <img 
                      src={benefit.image} 
                      alt={benefit.alt}
                      className="relative rounded-2xl shadow-xl w-3/4 group-hover:shadow-2xl transition-shadow duration-300"
                    />
                  </div>
                  {benefit.caption && (
                    <p className="text-sm text-white/70 text-center mt-4 italic">
                      {benefit.caption}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
