
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-48 pb-24 px-4 flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 bg-brand-gold/10 rounded-[3rem] flex items-center justify-center mb-10 rotate-12 shadow-2xl">
        <ChefHat className="w-16 h-16 text-brand-gold" />
      </div>
      <h1 className="text-6xl font-serif font-bold text-brand-ink mb-4 italic">404</h1>
      <h2 className="text-2xl font-bold text-brand-ink mb-6">Page not found</h2>
      <p className="text-brand-ink/60 font-medium italic mb-12 max-w-sm">The dish you're looking for might have been removed from the menu.</p>
      <Link to="/" className="btn-primary">Go back to Home</Link>
    </div>
  );
}
