import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "Friendly, quick, and very polite service. The hairdresser actually listened to what I wanted. Which is a nice change. Best haircut I have ever had. Will return.",
    author: "DYLAN B"
  },
  {
    quote: "Haley is amazing. She did such a great cut. The girls there are lovely and prices are good. I feel fantastic after my cut.",
    author: "SHANNON DALTON"
  },
  {
    quote: "Love this place! Always leave feeling fresh and confident. Super friendly, professional, and they really listen to what you want. Highly recommend.",
    author: "BRITTNEY MILLER"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, isHovering]);

  return (
    <section 
      id="testimonials"
      className="bg-brand-sage text-brand-black p-8 md:p-16 lg:p-32 border-b border-brand-black relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight mb-8">
              Voices of <span className="italic lowercase tracking-normal text-brand-black">experience.</span>
          </h2>
          <div className="w-24 h-[1px] bg-brand-gold" />
      </div>

      <div className="max-w-4xl mx-auto relative min-h-[400px] lg:min-h-[450px] flex items-center justify-center w-full">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full flex items-center justify-center transition-opacity duration-1000 ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="bg-brand-white text-brand-black border border-brand-black p-8 md:p-16 shadow-[12px_12px_0_0_rgba(7,7,7,1)] md:shadow-[16px_16px_0_0_rgba(7,7,7,1)] flex flex-col items-center justify-center text-center w-full h-full relative group">
              <div className="absolute inset-4 md:inset-6 border border-brand-black opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center mt-6 md:mt-8">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-8 md:mb-10 opacity-90 max-w-3xl">
                  "{t.quote}"
                </p>
                <div className="w-16 h-[1px] bg-brand-gold mb-6" />
                <span className="font-mono text-base uppercase tracking-[0.2em] opacity-80 font-bold">
                  — {t.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className="absolute bottom-8 left-8 md:bottom-16 md:left-16 font-mono text-xl md:text-2xl hover:opacity-50 transition-opacity p-4 cursor-pointer"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button 
        onClick={next}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 font-mono text-xl md:text-2xl hover:opacity-50 transition-opacity p-4 cursor-pointer"
        aria-label="Next testimonial"
      >
        →
      </button>
    </section>
  );
}
