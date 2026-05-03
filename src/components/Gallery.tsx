import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Ambience', 'Food', 'Bar', 'Events'];

const items = [
  { url: '/src/assets/images/regenerated_image_1777704483272.jpg', category: 'Food' },
  { url: '/regenerated_image_1777649771211.png', category: 'Ambience' },
  { url: '/src/assets/images/regenerated_image_1777704493527.webp', category: 'Food' },
  { url: '/regenerated_image_1777649777141.png', category: 'Bar' },
  { url: '/src/assets/images/regenerated_image_1777704501582.jpg', category: 'Ambience' },
  { url: '/regenerated_image_1777649781594.png', category: 'Events' },
  { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000', category: 'Food' },
  { url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1000', category: 'Bar' },
  { url: 'https://images.unsplash.com/photo-1550966841-3ee3ad359051?auto=format&fit=crop&q=80&w=1000', category: 'Ambience' },
];

export default function Gallery({ full = false }: { full?: boolean }) {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? items 
    : items.filter(item => item.category === activeTab);

  const displayItems = full ? filteredItems : items.slice(0, 6);

  return (
    <section className="py-24 bg-white" id={full ? undefined : "gallery"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!full && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">A Glimpse Inside</h2>
            <p className="text-brand-ink/60 font-medium">Food, ambience, and moments worth sharing</p>
          </div>
        )}

        {full && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full border ${
                  activeTab === cat
                    ? 'bg-brand-ink text-brand-paper border-brand-ink shadow-lg'
                    : 'bg-white text-brand-ink/40 border-brand-ink/10 hover:border-brand-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, i) => (
              <motion.div
                key={item.url}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="aspect-square overflow-hidden group cursor-pointer rounded-[2rem]"
              >
                <img
                  src={item.url}
                  alt={`Gallery ${item.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!full && (
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-secondary group">
              Explore All Photos
            </Link>
          </div>
        )}

        {full && (
          <div className="mt-24 p-12 bg-brand-paper rounded-[3rem] text-center border border-brand-ink/5">
            <h3 className="text-3xl md:text-4xl font-serif font-bold italic mb-6">Love the Vibe?</h3>
            <p className="max-w-xl mx-auto text-brand-ink/60 mb-8 italic">
              Whether it's a quiet dinner or a lively celebration, Lazeez is the perfect backdrop for your memories.
            </p>
            <Link to="/reservation" className="btn-primary inline-flex">
              Book Your Table Now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
