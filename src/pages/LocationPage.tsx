
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Car, Clock, Phone } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-brand-ink mb-4">Find Us</h1>
          <p className="text-brand-ink/60 italic font-medium">Located in the heart of Kolkata's culinary hub</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[3rem] border border-brand-ink/5 shadow-xl">
             <div className="space-y-10">
                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-gold" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-brand-ink mb-2">Address</h3>
                      <p className="text-brand-ink/60 italic leading-relaxed">
                        123 Park Street, Mid-Block Terrace,<br />
                        Kolkata, West Bengal - 700016
                      </p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-gold" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-brand-ink mb-2">Opening Hours</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm text-brand-ink/60 italic">
                         <div>
                            <p className="font-bold text-brand-ink/80">Lunch</p>
                            <p>12:00 PM - 3:30 PM</p>
                         </div>
                         <div>
                            <p className="font-bold text-brand-ink/80">Dinner</p>
                            <p>7:00 PM - 11:30 PM</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Car className="w-6 h-6 text-brand-gold" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-brand-ink mb-2">Parking</h3>
                      <p className="text-brand-ink/60 italic leading-relaxed">
                        Secure valet parking available nearby. Reserved spots for our guests at the main entrance.
                      </p>
                   </div>
                </div>
             </div>

             <a 
               href="https://maps.google.com/?q=83B,Elgin+Rd,Bhowanipore,Kolkata" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full mt-12 py-5 bg-brand-ink text-brand-paper rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-ink transition-all"
             >
                <Navigation className="w-5 h-5" /> Open in Maps
             </a>
          </div>

          <div className="h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.58287!2d88.35!3d22.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzAwLjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
