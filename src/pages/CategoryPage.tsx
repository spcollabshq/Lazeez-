
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { dishes } from '../data/menu';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  const categoryDishes = dishes.filter(d => 
    d.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link to="/menu" className="inline-flex items-center gap-2 text-brand-ink/60 hover:text-brand-ink mb-8 font-medium transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Menu
      </Link>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-ink mb-4 capitalize">{category}</h1>
        <p className="text-lg text-brand-ink/60 italic">Handpicked dishes in this category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryDishes.map((dish, i) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-[2rem] overflow-hidden border border-brand-ink/5 shadow-sm hover:shadow-xl transition-all group"
          >
            <Link to={`/dish/${dish.id}`} className="relative aspect-square block overflow-hidden">
              <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-lg font-bold text-brand-ink leading-tight">{dish.name}</h3>
                <span className="font-bold text-brand-gold whitespace-nowrap">₹{dish.price}</span>
              </div>
              <Link to={`/dish/${dish.id}`} className="block w-full py-3 bg-brand-paper rounded-xl text-center text-xs font-bold uppercase tracking-widest text-brand-ink hover:bg-brand-ink hover:text-brand-paper transition-all">
                View Dish
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
