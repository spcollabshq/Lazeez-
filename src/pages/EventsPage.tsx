
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Music, Tv, Utensils, Star, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Sufi Night Live',
    date: 'Every Friday • 8 PM Onwards',
    description: 'Immerse yourself in soulful melodies with local artists while enjoying our signature kebabs.',
    type: 'Music',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8a187499b?auto=format&fit=crop&q=80&w=600'
  }
];

export default function EventsPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-brand-ink mb-4">Events & Specials</h1>
        <p className="text-brand-ink/60 italic font-medium">Live sports, special menus, and more</p>
      </div>

      <div className="space-y-12">
        {events.map((event, i) => (
          <div key={i} className="flex flex-col lg:flex-row bg-white rounded-[4rem] overflow-hidden border border-brand-ink/5 shadow-sm group hover:shadow-xl transition-all duration-500">
            <div className="lg:w-1/2 aspect-video lg:aspect-auto relative overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-ink/30" />
              <div className="absolute top-8 left-8 bg-brand-gold text-brand-ink px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                Featured {event.type}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-6 text-brand-gold">
                  <Star className="w-6 h-6 fill-current" />
                  <span className="font-bold uppercase tracking-[0.3em] text-[10px]">Happening Soon</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ink mb-6">{event.title}</h2>
               <p className="text-brand-ink/60 italic text-lg mb-8 leading-relaxed max-w-md">{event.description}</p>
               <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-brand-paper rounded-full flex items-center justify-center">
                    <Music className="w-5 h-5 text-brand-gold" />
                  </div>
                  <p className="font-bold text-brand-ink">{event.date}</p>
               </div>
               <Link to="/reservation" className="self-start px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-gold hover:text-brand-ink transition-all flex items-center gap-3">
                  Book Experience <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="p-12 bg-brand-paper rounded-[3rem] text-center border border-brand-ink/5">
            <Tv className="w-10 h-10 text-brand-ink/20 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-brand-ink mb-4">Live Sports</h3>
            <p className="text-sm text-brand-ink/60 italic">Cheer for your team on our giant screen with special IPL & World Cup snacks menu.</p>
         </div>
         <div className="p-12 bg-brand-paper rounded-[3rem] text-center border border-brand-ink/5">
            <Utensils className="w-10 h-10 text-brand-ink/20 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-brand-ink mb-4">Cooking Workshops</h3>
            <p className="text-sm text-brand-ink/60 italic">Learn the art of slow-cooking Biryani from our master chefs every first Sunday.</p>
         </div>
      </div>
    </div>
  );
}
