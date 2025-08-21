import React from 'react';

export default function PainPoints() {
  const painPoints = [
    {
      title: "Communication Breakdowns",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      alt: "Healthcare professionals with communication challenges"
    },
    {
      title: "Burnout & Fatigue",
      image: "https://images.unsplash.com/photo-1609188076864-c35269136352?w=400&h=300&fit=crop",
      alt: "Exhausted healthcare worker"
    },
    {
      title: "Overwhelming Documentation",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      alt: "Healthcare worker buried in paperwork"
    },
    {
      title: "Workflow Interruptions",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      alt: "Doctor being interrupted during work"
    },
    {
      title: "Memory Overload",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      alt: "Healthcare worker overwhelmed with information"
    },
    {
      title: "Work Spilling into Home",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      alt: "Healthcare worker balancing work and family"
    }
  ];

  return (
    <section className="bg-[#F8F9FA] py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          What's Draining Frontline Professionals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}