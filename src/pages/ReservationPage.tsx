
import React from 'react';
import { motion } from 'motion/react';
import Reservation from '../components/Reservation';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ReservationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">Table Booking</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-ink mb-6">Secure Your Experience</h1>
          <p className="max-w-2xl mx-auto text-brand-ink/60 font-medium italic">
            Join us at Lazeez for an authentic journey through the flavors of Kolkata. 
            We recommend booking at least 24 hours in advance for weekend dinners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Reservation Form Column */}
          <div className="lg:col-span-8">
            <Reservation />
          </div>

          {/* Info Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-brand-ink/5 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-brand-ink">Booking Policy</h3>
              <ul className="space-y-4 text-sm text-brand-ink/60">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></span>
                  <span>We hold tables for a maximum of 15 minutes after the reservation time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></span>
                  <span>For groups larger than 8, please contact us directly via phone.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></span>
                  <span>Dress code: Smart casual is preferred.</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-ink text-brand-paper p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-xl font-bold mb-6">Need Help?</h3>
              <div className="space-y-6">
                <a href="tel:9830695156" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-brand-paper/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Call Us</p>
                    <p className="font-bold">+91 98306 95156</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-brand-paper/10 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Location</p>
                    <p className="font-bold truncate max-w-[180px]">83B, Elgin Rd, Kolkata</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold p-8 rounded-[2rem] text-brand-ink shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} />
                <h3 className="text-xl font-bold">Opening Hours</h3>
              </div>
              <div className="space-y-2 text-sm font-bold opacity-80">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span>11:00 AM - 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
