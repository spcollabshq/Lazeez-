
import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

export default function ReservationConfirmation() {
  const location = useLocation();
  const data = location.state || { date: 'May 15, 2026', time: '7:30 PM', guests: 2 };

  return (
    <div className="pt-48 pb-24 px-4 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        className="w-24 h-24 bg-brand-gold rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl"
      >
        <CalendarCheck className="w-12 h-12 text-brand-ink" />
      </motion.div>
      
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-ink mb-4">
        {data.name ? `${data.name}, Your Booking's Confirmed` : 'Booking Confirmed'}
      </h1>
      <p className="text-xl text-brand-ink/60 font-medium italic mb-12">
        Your table has been reserved successfully. See you soon!
      </p>
      
      <div className="bg-white p-10 rounded-[3rem] border border-brand-ink/5 shadow-xl max-w-lg w-full mb-12">
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
               <CalendarCheck className="w-6 h-6 text-brand-gold mx-auto" />
               <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/30">Date</p>
               <p className="font-bold text-brand-ink">{data.date}</p>
            </div>
            <div className="space-y-2">
               <Clock className="w-6 h-6 text-brand-gold mx-auto" />
               <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/30">Time</p>
               <p className="font-bold text-brand-ink">{data.time}</p>
            </div>
            <div className="space-y-2">
               <Users className="w-6 h-6 text-brand-gold mx-auto" />
               <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/30">Guests</p>
               <p className="font-bold text-brand-ink">{data.guests} Persons</p>
            </div>
         </div>
         {data.phone && (
            <div className="mt-8 pt-8 border-t border-brand-ink/5 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/30 mb-1">Confirmation sent to</p>
              <p className="font-bold text-brand-ink">{data.phone}</p>
            </div>
         )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="https://maps.google.com/?q=83B,Elgin+Rd,Bhowanipore,Kolkata" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-4 border-2 border-brand-ink text-brand-ink rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-ink hover:text-brand-paper transition-all"
        >
          Get Directions
        </a>
        <a 
          href="tel:9830695156"
          className="px-8 py-4 bg-brand-ink text-brand-paper rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-ink transition-all shadow-lg"
        >
          Call For Changes
        </a>
      </div>
      
      <Link to="/" className="mt-12 text-brand-ink/40 font-bold text-xs uppercase tracking-widest hover:text-brand-gold transition-colors flex items-center gap-2">
        Back to Home <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
