
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { dishes } from '../data/menu';
import { Phone, Calendar, Info } from 'lucide-react';

export default function DishDetail() {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === Number(id));

  if (!dish) return <div className="pt-32 text-center">Dish not found</div>;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1"
        >
          <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
            <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {dish.tags?.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
            {dish.isVeg ? (
              <span className="px-4 py-1.5 bg-green-500/10 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-500/20">Veg</span>
            ) : (
              <span className="px-4 py-1.5 bg-red-500/10 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-red-500/20">Non-Veg</span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-ink mb-2">{dish.name}</h1>
          <p className="text-2xl font-bold text-brand-gold mb-8">₹{dish.price}</p>
          
          <p className="text-lg text-brand-ink/60 mb-10 leading-relaxed italic">{dish.description}</p>

          <div className="p-8 bg-white rounded-[2rem] border border-brand-ink/5 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <Info size={20} />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink mb-1">Serving Note</h4>
                <p className="text-sm text-brand-ink/60 italic">Best enjoyed immediately. Available for dine-in and takeaways via phone.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/reservation"
              className="flex-1 py-5 bg-brand-ink text-brand-paper rounded-[1.5rem] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-ink transition-all shadow-xl"
            >
              <Calendar className="w-5 h-5" /> Book a Table
            </Link>
            <a 
              href="tel:9830695156"
              className="flex-1 py-5 border-2 border-brand-ink text-brand-ink rounded-[1.5rem] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-ink hover:text-brand-paper transition-all"
            >
              <Phone className="w-5 h-5" /> Call to Order
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-brand-ink/5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 mb-6">Perfect Pairings</h4>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-brand-paper rounded-2xl border border-brand-ink/5">
                  <span className="text-xs font-bold text-brand-ink">Signature Gin-Tea</span>
                  <p className="text-[10px] text-brand-ink/40 italic">Cocktail recommendation</p>
               </div>
               <div className="p-4 bg-brand-paper rounded-2xl border border-brand-ink/5">
                  <span className="text-xs font-bold text-brand-ink">Basanti Pulao</span>
                  <p className="text-[10px] text-brand-ink/40 italic">Side dish suggestion</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
