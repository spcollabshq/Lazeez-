import { motion } from 'motion/react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/regenerated_image_1777731977931.avif"
          alt="Lazeez Restaurant Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative group inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-paper/20 backdrop-blur-sm text-brand-paper text-sm font-medium border border-brand-paper/30 cursor-help">
              <span className="flex w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Open Now • Closes at 11 PM
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-brand-ink text-brand-paper text-[10px] font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded">
                Hours may vary on holidays.
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-paper leading-[0.8] tracking-tighter">
              Great Food.<br />
              Great Vibe.
            </h1>

            <p className="text-xl md:text-2xl text-brand-paper/90 font-light max-w-xl">
              Rich flavors, a lively bar, and cozy dining right here in Kolkata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/reservation" className="btn-primary flex items-center justify-center gap-2 bg-brand-paper text-brand-ink hover:bg-brand-gold hover:text-brand-ink border-none">
                Book a Table
              </Link>
              <Link to="/menu" className="flex items-center text-brand-paper font-medium group gap-2 self-center sm:self-auto py-3 px-4">
                Browse Menu
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full bg-brand-paper border-t border-brand-ink/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-semibold mb-1">Experience</span>
              <div className="flex items-center gap-1 font-serif text-lg">
                <Star size={16} fill="currentColor" className="text-brand-gold" />
                <span className="font-bold">4.0</span>
                <span className="text-brand-ink/50 font-normal ml-1">Rating</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-semibold mb-1">Cuisine</span>
              <span className="font-serif text-lg font-bold">Lunch • Dinner • Desserts</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-semibold mb-1">Bar Selection</span>
              <span className="font-serif text-lg font-bold">Beer • Cocktails • Wine</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 font-semibold mb-1">Location</span>
              <span className="font-serif text-lg font-bold">Elgin Road, Kolkata</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
