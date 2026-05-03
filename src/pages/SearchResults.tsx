
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { dishes } from '../data/menu';
import { Search, SearchX, ArrowRight } from 'lucide-react';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);

  const filteredDishes = dishes.filter(dish => 
    dish.name.toLowerCase().includes(query.toLowerCase()) ||
    dish.description.toLowerCase().includes(query.toLowerCase()) ||
    dish.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-brand-ink mb-2">Search Results</h1>
        <p className="text-brand-ink/60 font-medium italic">Showing {filteredDishes.length} results for "{query}"</p>
      </div>

      <form onSubmit={handleSearch} className="relative mb-16">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-ink/20 w-6 h-6" />
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search dishes..."
          className="w-full pl-16 pr-6 py-6 rounded-[2.5rem] bg-white border border-brand-ink/5 shadow-sm focus:ring-2 focus:ring-brand-gold outline-none text-xl font-serif transition-shadow"
        />
      </form>

      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl border border-brand-ink/5 transition-all p-4"
            >
              <Link to={`/dish/${dish.id}`} className="block aspect-square rounded-[2rem] overflow-hidden mb-6">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </Link>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-xl text-brand-ink">{dish.name}</h3>
                  <span className="font-bold text-brand-gold">₹{dish.price}</span>
                </div>
                <p className="text-sm text-brand-ink/40 mb-6 italic line-clamp-2">{dish.description}</p>
                <Link to={`/dish/${dish.id}`} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink group-hover:text-brand-gold transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-[4rem] border border-brand-ink/5">
          <div className="w-24 h-24 bg-brand-ink/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <SearchX className="w-10 h-10 text-brand-ink/10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-ink mb-4">No matches found.</h2>
          <p className="text-brand-ink/60 font-medium italic mb-12 max-w-sm mx-auto">
            Your search query didn't return any results. Try using more general keywords or check our popular items.
          </p>
          <Link to="/menu" className="btn-primary">Explore Full Menu</Link>
        </div>
      )}
    </div>
  );
}
