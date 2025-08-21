
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-shiftsync-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              About <span className="text-yellow-400">ShiftSync™</span>
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  In high-pressure roles, crucial details often slip away in rushed or chaotic moments. These small losses pile up, creating stress, burnout, and the sense of always being behind.
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">ShiftSync™ was built to change that.</span> More than a tool, it's a trusted companion designed to hold, process, and retrieve the information you can't afford to lose—without adding to your mental load.
                </p>
              </div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1d1189e95_before-bedjpg.png" 
                  alt="Person unwinding before bed, stress-free"
                  className="relative rounded-2xl shadow-lg w-3/4 mx-auto"
                />
                <p className="text-sm text-white/70 text-center mt-4 italic">
                  Unload thoughts before bed without stress.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-last lg:order-first relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c386228c0_ride-homejpg.png" 
                  alt="Healthcare worker capturing details between client visits"
                  className="relative rounded-2xl shadow-lg w-3/4 mx-auto"
                />
                <p className="text-sm text-white/70 text-center mt-4 italic">
                  Capture details between client visits.
                </p>
              </motion.div>
              
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  The ShiftSync™ pin is discreet, lightweight, and blends seamlessly into your uniform. With voice or tap activation, you can log notes hands-free, even in PPE or busy environments. Our AI transcribes and organizes your inputs instantly into structured summaries, accessible from your phone.
                </p>
                <p className="text-white font-medium border-l-4 border-yellow-400 pl-4">
                  And with privacy-first design, your data is encrypted end-to-end and always under your control—never shared with your employer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
