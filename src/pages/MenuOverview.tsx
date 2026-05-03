
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/menu';
import { Search, Filter, ArrowRight } from 'lucide-react';

const categories = ['Starters', 'Main Course', 'Drinks', 'Desserts'];

export default function MenuOverview() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || dish.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-brand-ink">Explore the Menu</h1>
        <p className="text-lg text-brand-ink/60 italic font-medium">Find what you’re craving—fast and easy</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/40 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for dishes, drinks, or desserts"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-ink/10 focus:ring-2 focus:ring-brand-gold outline-none bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-ink text-brand-paper shadow-lg' 
                  : 'bg-white text-brand-ink/60 border border-brand-ink/5 hover:border-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2.5rem] p-5 shadow-sm hover:shadow-xl transition-all group border border-brand-ink/5"
            >
              <Link to={`/dish/${dish.id}`} className="relative aspect-square overflow-hidden rounded-[2rem] mb-6 block">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-brand-gold text-brand-ink px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {dish.category}
                </div>
              </Link>
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="text-xl font-serif font-bold text-brand-ink">{dish.name}</h3>
                <span className="font-bold text-brand-gold">₹{dish.price}</span>
              </div>
              <p className="text-sm text-brand-ink/60 line-clamp-2 mb-6 italic">{dish.description}</p>
              <Link to={`/dish/${dish.id}`} className="w-full py-4 bg-brand-paper rounded-2xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest text-brand-ink group-hover:bg-brand-ink group-hover:text-brand-paper transition-colors">
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="w-20 h-20 bg-brand-ink/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-brand-ink/20" />
          </div>
          <h2 className="text-2xl font-bold text-brand-ink mb-2">No dishes found.</h2>
          <p className="text-brand-ink/60 italic font-medium">Try changing filters or search terms.</p>
        </div>
      )}
    </div>
  );
}
