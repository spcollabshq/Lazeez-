
import React from 'react';
import { motion } from 'motion/react';
import { Quote, Utensils, Heart, Music } from 'lucide-react';

export default function AboutPage() {
  const ambienceImg = "/images/regenerated_image_1777722158140.jpg";
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest"
            >
              Our Story
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-ink mb-8 leading-[0.9]">About Lazeez</h1>
            <p className="text-xl md:text-2xl text-brand-ink/60 font-medium italic max-w-3xl mx-auto leading-relaxed">
              Serving great food, drinks, and experiences in the heart of Kolkata since 2012.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
           <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                 <img src={ambienceImg} alt="Ambience" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-brand-gold/20 rounded-[4rem] -z-10" />
           </div>
           <div>
              <Quote className="w-16 h-16 text-brand-gold/20 mb-8" />
              <h2 className="text-4xl font-serif font-bold text-brand-ink mb-8">What We Offer</h2>
              <div className="space-y-12">
                 <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                       <Utensils className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-brand-ink mb-2">Authentic Flavors</h3>
                       <p className="text-brand-ink/60 italic leading-relaxed">We source our spices directly from the oldest markets in Kolkata to ensure a taste that takes you back to heritage.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                       <Heart className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-brand-ink mb-2">Warm Hospitality</h3>
                       <p className="text-brand-ink/60 italic leading-relaxed">Our team believes that hospitality is the secret ingredient that makes good food great.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                       <Music className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-brand-ink mb-2">The Ambience</h3>
                       <p className="text-brand-ink/60 italic leading-relaxed">A blend of classic Kolkata charm and modern elegance, perfect for family dinners and soulful soul sessions.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-brand-ink text-brand-paper p-16 rounded-[4rem] text-center shadow-2xl">
           <h2 className="text-4xl font-serif font-bold mb-6">Our Heritage</h2>
           <p className="text-lg opacity-60 italic max-w-2xl mx-auto mb-12">
              Lazeez started as a small eatery on the streets of Park Circus. Today, we are proud to be a landmark for everyone who loves the soulful cuisine of Bengal.
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                 <p className="text-5xl font-serif font-bold text-brand-gold mb-2">12+</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Years of Legacy</p>
              </div>
              <div>
                 <p className="text-5xl font-serif font-bold text-brand-gold mb-2">50k+</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Happy Guests</p>
              </div>
              <div>
                 <p className="text-5xl font-serif font-bold text-brand-gold mb-2">15+</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Expert Chefs</p>
              </div>
              <div>
                 <p className="text-5xl font-serif font-bold text-brand-gold mb-2">4.8</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Avg. Rating</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
