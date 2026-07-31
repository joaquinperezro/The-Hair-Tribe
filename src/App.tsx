/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import TestimonialCarousel from './components/TestimonialCarousel';
import MagneticButton from './components/MagneticButton';
import heroImage from './pexels-rovshan-nazirli-691066883-17974499.jpg';
import service1Image from './pexels-cottonbro-3993314.jpg';
import service2Image from './pexels-mths-6487890.jpg';
import portfolio1Image from './30.07.2026_20.04.44_REC.png';
import portfolio2Image from './30.07.2026_20.06.35_REC.png';

export default function App() {
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const updateTime = () => {
        const now = new Date();
        setTime(now.toLocaleTimeString('en-AU', { timeZone: 'Australia/Melbourne', hour12: false }) + ' AEST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
    <CustomCursor />
    <div className="min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-sage selection:text-brand-black flex flex-col">
       
       {/* Navigation */}
       <header className="flex flex-col lg:grid lg:grid-cols-[auto_1fr_auto] border-b border-brand-black font-mono text-xs md:text-sm uppercase tracking-widest sticky top-0 bg-brand-white z-50">
           {/* Mobile Top Bar */}
           <div className="flex lg:hidden justify-between items-stretch border-b border-brand-black bg-brand-white h-16">
               <div className="flex-1 flex items-center justify-start px-6 bg-brand-black text-brand-white">
                   <span className="font-serif text-xl tracking-normal">THE HAIR TRIBE</span>
               </div>
               <button 
                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                   className="px-6 flex items-center justify-center border-l border-brand-black hover:bg-brand-sage transition-colors cursor-pointer"
               >
                   <div className="relative w-6 h-4 flex flex-col justify-between">
                       <span className={`h-px bg-brand-black transition-all duration-300 absolute left-0 w-full ${mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
                       <span className={`h-px bg-brand-black transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 left-0 w-full ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                       <span className={`h-px bg-brand-black transition-all duration-300 absolute left-0 w-full ${mobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
                   </div>
               </button>
           </div>

           {/* Desktop Logo */}
           <div className="hidden lg:flex p-4 md:px-10 md:py-6 lg:w-[380px] border-r border-brand-black items-center justify-center bg-brand-black text-brand-white">
               <span className="font-serif text-2xl md:text-3xl tracking-normal">THE HAIR TRIBE</span>
           </div>
           
           {/* Links */}
           <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-brand-black border-b lg:border-b-0 lg:border-r border-brand-black text-brand-black items-stretch justify-start`}>
               <a href="#story" onClick={() => setMobileMenuOpen(false)} className="flex-1 flex items-center justify-center px-6 py-4 md:px-8 md:py-6 hover:bg-brand-sage transition-colors duration-300">Story</a>
               <a href="#services" onClick={() => setMobileMenuOpen(false)} className="flex-1 flex items-center justify-center px-6 py-4 md:px-8 md:py-6 hover:bg-brand-sage transition-colors duration-300">Repertoire</a>
               <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="flex-1 flex items-center justify-center px-6 py-4 md:px-8 md:py-6 hover:bg-brand-sage transition-colors duration-300">Portfolio</a>
               <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="flex-1 flex items-center justify-center px-6 py-4 md:px-8 md:py-6 hover:bg-brand-sage transition-colors duration-300">Voices</a>
           </nav>

           <a href="#booking" onClick={() => setMobileMenuOpen(false)} className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex p-4 md:px-12 md:py-6 justify-center items-center gap-2 group cursor-pointer bg-brand-gold text-brand-black hover:bg-brand-sage transition-colors duration-500 font-normal text-xs md:text-sm relative`}>
               <span>Reserve a Chair</span>
               <span className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 text-xl absolute right-6 lg:static lg:right-auto lg:ml-2">↘</span>
           </a>
       </header>

       <main className="flex-grow">
           
           {/* Hero Section */}
           <section className="flex flex-col lg:grid lg:grid-cols-12 border-b border-brand-black min-h-[90vh]">
               {/* Left column */}
               <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-brand-black p-8 md:p-16 lg:p-24 flex flex-col justify-between bg-transparent">
                   <div className="space-y-6 md:space-y-8 mt-4 lg:mt-16">
                       <h1 className="font-serif text-[20vw] sm:text-[18vw] lg:text-[10vw] leading-[0.85] lg:leading-[0.8] tracking-tight uppercase text-brand-black">
                           Hair<br/>
                           <span className="italic lowercase tracking-normal">colour &</span><br/>
                           <span className="pl-[5%]">Beauty.</span>
                       </h1>
                   </div>
                   
                   {/* Desktop bottom text */}
                   <div className="hidden lg:grid mt-24 md:mt-32 grid-cols-2 gap-8 items-end relative font-serif text-xl md:text-2xl uppercase tracking-widest leading-loose">
                       <div className="text-left pr-4">
                           LOCATED IN KALGOORLIE, WESTERN AUSTRALIA. A SALON BUILT AROUND COMMUNITY, CREATIVITY, AND AUTHENTICITY, WHERE EVERY APPOINTMENT IS DESIGNED TO FEEL PERSONAL.
                       </div>
                       <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-black opacity-20 -translate-x-1/2"></div>
                       <div className="text-right pl-4">
                           WE ARE MORE THAN A SALON. CLIENTS VISIT NOT ONLY FOR BEAUTIFUL HAIR BUT BECAUSE THEY FEEL WELCOMED, UNDERSTOOD, AND CARED FOR.
                       </div>
                   </div>
               </div>

               {/* Image Placeholder */}
               <div className="lg:col-span-5 p-4 sm:p-8 md:p-16 bg-brand-sage flex items-center justify-center border-b lg:border-b-0 border-brand-black">
                    <div className="w-full h-full aspect-square sm:aspect-[4/5] lg:aspect-auto lg:min-h-[50vh] border border-brand-black relative group overflow-hidden">
                        {/* Subtle inner frame */}
                        <div className="absolute inset-4 border border-brand-black opacity-10 z-10 pointer-events-none"></div>
                        <img 
                            src={heroImage} 
                            alt="The Hair Tribe Goldfields" 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
               </div>

               {/* Mobile bottom text */}
               <div className="lg:hidden p-8 py-16 flex flex-col items-center bg-brand-white">
                   <div className="text-left w-full mb-12 font-serif text-[1.3rem] uppercase tracking-widest leading-[1.8]">
                       LOCATED IN KALGOORLIE, WESTERN AUSTRALIA. A SALON BUILT AROUND COMMUNITY, CREATIVITY, AND AUTHENTICITY, WHERE EVERY APPOINTMENT IS DESIGNED TO FEEL PERSONAL.
                   </div>
                   
                   <div className="w-full h-[1px] bg-brand-black opacity-20 mb-12"></div>
                   
                   <div className="text-left w-full font-serif text-[1.3rem] uppercase tracking-widest leading-[1.8]">
                       WE ARE MORE THAN A SALON. CLIENTS VISIT NOT ONLY FOR BEAUTIFUL HAIR BUT BECAUSE THEY FEEL WELCOMED, UNDERSTOOD, AND CARED FOR.
                   </div>
               </div>
           </section>

           {/* Brand Story */}
           <section id="story" className="py-24 px-6 md:p-16 lg:p-32 border-b border-brand-black bg-transparent text-brand-black flex flex-col items-center text-center relative overflow-hidden">
               {/* Desktop Ampersand */}
               <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 font-serif text-[600px] md:text-[700px] leading-none text-brand-sage opacity-100 pointer-events-none select-none z-0">
                   &amp;
               </div>
               {/* Mobile Ampersand */}
               <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 font-serif text-[280px] leading-none text-brand-sage opacity-20 pointer-events-none select-none z-0">
                   &amp;
               </div>
               <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-10 md:mb-12 relative z-10">
                   The <span className="italic lowercase tracking-normal text-brand-sage">art of</span> listening.
               </h2>
               
               {/* Desktop paragraph */}
               <p className="hidden md:block max-w-4xl font-sans text-xl md:text-3xl leading-snug opacity-90 relative z-10">
                   Before we mix a single color or pick up a pair of shears, we connect. The Hair Tribe was founded on the belief that beautiful hair begins with a genuine relationship. We created this space in Kalgoorlie so you can step into a welcoming community, feel completely understood, and experience a transformation that feels effortlessly like you.
               </p>

               {/* Mobile paragraph */}
               <div className="md:hidden max-w-md font-serif text-xl leading-relaxed opacity-90 relative z-10 flex flex-col items-center">
                   <p className="mb-12">
                       Before we mix a single color or pick up a pair of shears, we connect. Beautiful hair begins with a genuine relationship and true care.
                   </p>
                   <a href="#story" className="font-mono text-xs uppercase tracking-widest px-8 py-4 border border-brand-black hover:bg-brand-sage transition-colors duration-300">
                       Read Our Story
                   </a>
               </div>
           </section>

           {/* Services - The Repertoire */}
           <section id="services" className="bg-brand-black text-brand-white">
                <div className="p-8 md:p-16 lg:p-24 border-b border-brand-white/20">
                     <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight text-brand-white">
                          Our <span className="italic lowercase tracking-normal text-brand-sage">services.</span>
                     </h2>
                </div>
                
                {/* Service 1: Colour */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-white/20">
                     <div className="lg:col-span-6 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                          <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-8">
                               Beautiful <span className="italic lowercase tracking-normal text-brand-gold">Colour</span>
                          </h3>
                          <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-80 max-w-md">
                               Luminous highlights, natural balayage, and rich all-over tints. We specialize in lived-in, dimensional color that enhances your natural beauty and grows out effortlessly.
                          </p>
                     </div>
                     <div className="lg:col-span-6 p-8 md:p-16 border-t lg:border-t-0 lg:border-l border-brand-white/20 flex items-center justify-center">
                          <div className="aspect-[4/3] w-full border border-brand-white/20 relative group overflow-hidden">
                               <div className="absolute inset-4 border border-brand-white opacity-10 z-10 pointer-events-none"></div>
                               <div className="absolute inset-0 bg-gradient-to-tr from-brand-sage to-brand-sage/90 mix-blend-multiply z-[5] pointer-events-none transition-opacity duration-1000 group-hover:opacity-0"></div>
                               <img 
                                   src={service1Image} 
                                   alt="Colour service detail" 
                                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                               />
                          </div>
                     </div>
                </div>

                {/* Service 2: Cuts */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-white/20">
                     <div className="lg:col-span-6 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-brand-white/20 order-2 lg:order-1 flex items-center justify-center">
                          <div className="aspect-[3/4] w-full max-w-lg mx-auto border border-brand-white/20 relative group overflow-hidden">
                               <div className="absolute inset-4 border border-brand-white opacity-10 z-10 pointer-events-none"></div>
                               <div className="absolute inset-0 bg-gradient-to-tr from-brand-sage to-brand-sage/90 mix-blend-multiply z-[5] pointer-events-none transition-opacity duration-1000 group-hover:opacity-0"></div>
                               <img 
                                   src={service2Image} 
                                   alt="Cuts service detail" 
                                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                               />
                          </div>
                     </div>
                     <div className="lg:col-span-6 p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
                          <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-8">
                               Signature <span className="italic lowercase tracking-normal text-brand-sage">Cuts</span>
                          </h3>
                          <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-80 max-w-md">
                               Thoughtful haircuts designed for your lifestyle and natural texture. Whether it is a fresh shape or soft layering, we cut with care to ensure your hair always feels like yours.
                          </p>
                     </div>
                </div>

                {/* Service 3: Extensions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-white/20">
                     <div className="lg:col-span-6 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                          <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-8">
                               Natural <span className="italic lowercase tracking-normal text-brand-white">Extensions</span>
                          </h3>
                          <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-80 max-w-md">
                               High-quality hair extensions beautifully blended for seamless volume or length. We use gentle, comfortable methods to enhance your hair naturally.
                          </p>
                     </div>
                     <div className="lg:col-span-6 p-8 md:p-16 lg:p-24 border-t lg:border-t-0 lg:border-l border-brand-white/20 flex flex-col justify-center bg-brand-white/5">
                          <div className="font-mono text-sm md:text-base tracking-widest uppercase mb-12 text-brand-gold">Also Specializing In</div>
                          <div className="space-y-8">
                              <div>
                                  <h4 className="font-serif text-3xl uppercase tracking-tight mb-2">Nourishing Treatments</h4>
                                  <p className="font-mono text-sm md:text-base uppercase tracking-widest leading-loose opacity-70">Deep conditioning and reparative masks to restore health and shine to your hair.</p>
                              </div>
                              <div className="w-full h-[1px] bg-brand-white/20"></div>
                              <div>
                                  <h4 className="font-serif text-3xl uppercase tracking-tight mb-2">Bridal Styling</h4>
                                  <p className="font-mono text-sm md:text-base uppercase tracking-widest leading-loose opacity-70">Beautiful, enduring hair styling for your wedding day, ensuring you feel confident and relaxed.</p>
                              </div>
                              <div className="w-full h-[1px] bg-brand-white/20"></div>
                              <div>
                                  <h4 className="font-serif text-3xl uppercase tracking-tight mb-2">Special Occasions</h4>
                                  <p className="font-mono text-sm md:text-base uppercase tracking-widest leading-loose opacity-70">Effortless blowouts and elegant upstyles to help you celebrate life's moments.</p>
                              </div>
                          </div>
                     </div>
                </div>
           </section>

           {/* Portfolio */}
           <section id="portfolio" className="bg-transparent text-brand-black border-b border-brand-black">
                <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-baseline justify-between border-b border-brand-black">
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight">
                        Proof of <span className="italic lowercase tracking-normal text-brand-black">craft.</span>
                    </h2>
                    <span className="font-mono text-sm md:text-base tracking-widest uppercase mt-8 md:mt-0 opacity-80">Real clients. No filters.</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-brand-black flex items-center justify-center bg-transparent">
                        <div className="w-full border border-brand-black relative group overflow-hidden">
                             <img 
                                 src={portfolio1Image} 
                                 alt="Blonde balayage" 
                                 className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000"
                             />
                        </div>
                    </div>
                    <div className="p-8 md:p-16 flex items-center justify-center bg-transparent">
                        <div className="w-full border border-brand-black relative group overflow-hidden">
                             <img 
                                 src={portfolio2Image} 
                                 alt="Brown hair colour" 
                                 className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000"
                             />
                        </div>
                    </div>
                </div>
           </section>

           <TestimonialCarousel />

           {/* Booking & Footer */}
           <section id="booking" className="flex flex-col w-full">
               <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                   {/* Left Half: White */}
                   <div className="bg-transparent p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                       <div className="w-full h-[1px] bg-brand-gold mb-6" />
                       <div className="font-mono text-sm md:text-base uppercase tracking-widest mb-16">
                           ONLINE BOOKING AVAILABLE
                       </div>
                       <h2 className="font-serif text-6xl md:text-8xl uppercase tracking-tight mb-12">
                           RESERVE /<br/><span className="italic lowercase tracking-normal">a chair.</span>
                       </h2>
                       <p className="font-mono text-sm md:text-base leading-loose uppercase tracking-widest mb-16 max-w-sm">
                           OUR SCHEDULE IS HIGHLY LIMITED. WE RECOMMEND BOOKING WELL IN ADVANCE FOR COLOUR TRANSFORMATIONS.
                       </p>
                       <div className="self-start">
                           <MagneticButton className="bg-brand-black text-brand-white font-mono text-lg md:text-xl uppercase tracking-widest px-12 py-6 hover:bg-brand-gold hover:text-brand-black transition-colors duration-300 rounded-none cursor-pointer border border-brand-black shadow-[8px_8px_0_0_rgba(188,174,154,1)]">
                               SECURE YOUR TIME →
                           </MagneticButton>
                       </div>
                   </div>
                   
                   {/* Right Half: Black */}
                   <div className="bg-brand-black text-brand-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                       <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 font-serif text-[80vh] leading-none opacity-5 pointer-events-none select-none z-0">
                           &amp;
                       </div>
                       
                       <div className="grid grid-cols-2 gap-8 lg:gap-16 relative z-10">
                           {/* Contact Column 1: VISIT */}
                           <div>
                               <div className="font-mono text-xs md:text-sm uppercase tracking-widest mb-4">VISIT</div>
                               <div className="w-full h-[1px] bg-brand-white opacity-30 mb-8" />
                               <div className="font-mono text-sm md:text-base leading-loose uppercase tracking-widest">
                                   KALGOORLIE<br/>
                                   WESTERN AUSTRALIA<br/>
                                   AUSTRALIA
                               </div>
                           </div>
                           
                           {/* Contact Column 2: CONNECT */}
                           <div>
                               <div className="font-mono text-xs md:text-sm uppercase tracking-widest mb-4">CONNECT</div>
                               <div className="w-full h-[1px] bg-brand-white opacity-30 mb-8" />
                               <div className="flex flex-col">
                                   <a href="https://www.instagram.com/thehairtribegoldfields/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm md:text-base leading-loose uppercase tracking-widest py-4 border-b border-brand-white/30 hover:text-brand-gold transition-colors">INSTAGRAM</a>
                                   <a href="mailto:hello@thehairtribe.com.au" className="font-mono text-sm md:text-base leading-loose uppercase tracking-widest py-4 border-b border-brand-white/30 hover:text-brand-gold transition-colors">EMAIL</a>
                                   <div className="font-mono text-sm md:text-base leading-loose uppercase tracking-widest py-4 border-b border-brand-white/30">+61 8 9000 0000</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               {/* Footer */}
               <footer className="bg-brand-black text-brand-white px-8 py-12 md:px-16 md:py-16 w-full flex flex-col md:flex-row items-start md:items-center justify-between border-t border-brand-gold">
                   <div className="font-serif text-3xl uppercase tracking-tight mb-8 md:mb-0">
                       THE HAIR TRIBE
                   </div>
                   <div className="font-mono text-xs md:text-sm uppercase tracking-widest opacity-60">
                       &copy; 2026 THE HAIR TRIBE GOLDFIELDS. ALL RIGHTS RESERVED.
                   </div>
               </footer>
           </section>

       </main>
    </div>
    </>
  );
}

