import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function MiniReservationCTA() {
  return (
    <div className="py-12 bg-brand-paper">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-brand-ink rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-paper mb-2">Ready for a Taste of Kolkata?</h3>
            <p className="text-brand-paper/60 italic">Tables fill up fast. Secure yours today and enjoy an unforgettable meal.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/reservation" className="btn-primary bg-brand-gold text-brand-ink hover:bg-brand-paper hover:text-brand-ink border-none px-10">
              Book a Table
            </Link>
            <Link to="/menu" className="flex items-center justify-center gap-2 text-brand-paper font-bold uppercase tracking-widest text-[10px] px-6 py-3 border border-brand-paper/20 rounded-xl hover:bg-brand-paper/10 transition-colors">
              Explore Menu
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
