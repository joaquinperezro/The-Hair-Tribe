import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial state (black screen)
    // Stage 1: Wordmark fades in
    const t1 = setTimeout(() => setStage(1), 300);
    // Stage 2: Gold rule draws
    const t2 = setTimeout(() => setStage(2), 1100);
    // Stage 3: Subtitle tracks out
    const t3 = setTimeout(() => setStage(3), 2100);
    // Stage 4: Progress line fills (simulated over ~1s)
    const t4 = setTimeout(() => setStage(4), 3100);
    // Stage 5: Pause then lift curtain
    const t5 = setTimeout(() => {
      setStage(5);
    }, 4100);
    // Complete and unmount
    const t6 = setTimeout(() => {
      onComplete();
    }, 5100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-brand-black flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${
        stage >= 5 ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Wordmark */}
        <div
          className={`font-serif text-5xl md:text-7xl uppercase tracking-tight text-brand-white transition-opacity duration-700 ${
            stage >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          The Hair Tribe
        </div>

        {/* Gold Rule */}
        <div className="w-full mt-6 mb-6 overflow-hidden flex justify-center">
          <div
            className={`h-[1px] bg-brand-gold transition-all duration-1000 ease-in-out ${
              stage >= 2 ? 'w-full max-w-[200px]' : 'w-0'
            }`}
          />
        </div>

        {/* Subtitle */}
        <div className="font-mono text-xs md:text-sm uppercase text-brand-white tracking-[0.3em] h-4">
          {'HAIR SALON'.split('').map((char, index) => (
            <span
              key={index}
              className={`transition-opacity duration-300 ${
                stage >= 3 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-black">
        <div
          className={`h-full bg-brand-white transition-all duration-1000 ease-in-out ${
            stage >= 4 ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </div>
  );
}
