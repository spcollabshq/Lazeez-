
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Tag, Sparkles, Gift, ArrowRight } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Weekend Biryani Fest',
    description: 'Get a complimentary Mishti Doi with every Biryani bucket during your dine-in visit. This weekend only!',
    code: 'BIRYANIWEEK',
    bgColor: 'bg-brand-gold/10'
  },
  {
    id: 2,
    title: 'Visit Special',
    description: 'Flat 20% OFF on your first dining experience with us. Mention code WELCOME20 to our server.',
    code: 'WELCOME20',
    bgColor: 'bg-brand-ink/5'
  },
  {
    id: 3,
    title: 'Corporate Lunch Combo',
    description: 'Special 3-course lunch menu at just ₹599 for office groups of 5 or more. Perfect for team bonding.',
    code: 'CORPLUNCH',
    bgColor: 'bg-red-50'
  }
];

export default function OffersPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-brand-ink mb-4">Special Offers</h1>
        <p className="text-brand-ink/60 italic font-medium">Save more on your favorites</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-[3rem] border border-brand-ink/5 flex flex-col justify-between ${offer.bgColor} group`}
          >
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Tag className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-ink mb-4">{offer.title}</h3>
              <p className="text-brand-ink/60 italic mb-8 leading-relaxed">{offer.description}</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/50 border-2 border-dashed border-brand-ink/10 rounded-2xl text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/30 mb-1">Coupon Code</p>
                <p className="text-xl font-mono font-bold tracking-widest text-brand-ink">{offer.code}</p>
              </div>
              <p className="text-[10px] text-center font-bold uppercase tracking-widest text-brand-ink/40">
                Mention this code during your visit
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 p-12 bg-brand-ink text-brand-paper rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
         <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold mb-4">Plan a Party</h2>
            <p className="opacity-60 italic max-w-md">Hosting a celebration? Book for a group and get special custom menus at great prices.</p>
         </div>
         <Link to="/reservation" className="btn-primary whitespace-nowrap bg-brand-gold text-brand-ink border-none">Book Now</Link>
      </div>
    </div>
  );
}
