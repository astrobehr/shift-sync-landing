
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Clock, MessageSquare, Zap, Home } from 'lucide-react';

const painPoints = [
  {
    icon: FileText,
    title: "Overwhelming Documentation Burden",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/74901f31a_Overwhelming_Documentation_Burdenpng.png",
    alt: "Stack of documentation and paperwork"
  },
  {
    icon: AlertCircle,
    title: "Workflow Interruptions & Memory Overload",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a53f64756_Workflow_Interruptionspng.png",
    alt: "Healthcare professional dealing with workflow interruptions"
  },
  {
    icon: Clock,
    title: "Lost Time & Inefficiency",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7c189c23f_Lost-Timepng.png",
    alt: "Stressed nurse looking at a clock"
  },
  {
    icon: MessageSquare,
    title: "Communication Breakdowns",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/36198076c_Communication_Breakdownspng.png",
    alt: "Stressed nurse reviewing paperwork, showing communication breakdown"
  },
  {
    icon: Zap,
    title: "Burnout & Fatigue",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dec9ac4b9_Burnout_Fatiguepng.png",
    alt: "Healthcare professional experiencing burnout and fatigue"
  },
  {
    icon: Home,
    title: "Work Spilling into Home Life",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/674e97dd2_Work_Spillinpng.png",
    alt: "Healthcare worker stressed at home with family in background"
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-shiftsync">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Do Any of These <span className="text-yellow-400">Sound Familiar?</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-shiftsync-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-shiftsync-dark rounded-lg flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {point.title}
                  </h3>
                </div>
                
                {point.image && (
                  <div className="mt-6 flex justify-center">
                    <img 
                      src={point.image} 
                      alt={point.alt}
                      className="rounded-lg w-full shadow-md"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
