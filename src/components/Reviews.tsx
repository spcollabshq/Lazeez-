import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Ananya Roy',
    review: 'The Biryani here is unparalleled in Kolkata. A must-visit for every food lover.',
    rating: 5,
    date: 'March 2024',
  },
  {
    name: 'Rahul Chatterjee',
    review: 'Great vibe and even better cocktails. The ambience is perfect for a date night.',
    rating: 4,
    date: 'April 2024',
  },
  {
    name: 'Sneha Gupta',
    review: 'Desserts are a revelation! The Baked Rosogolla is something I dream about.',
    rating: 5,
    date: 'February 2024',
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-paper" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">What Our Customers Say</h2>
            <p className="text-brand-ink/60 font-medium">Real experiences from people who’ve dined with us</p>
          </div>
          <a 
            href="https://maps.google.com/?q=83B,Elgin+Rd,Bhowanipore,Kolkata" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest border-b border-brand-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-all"
          >
            Read All Reviews
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-brand-ink/5 rounded-3xl"
            >
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < item.rating ? 'currentColor' : 'none'}
                    className={i < item.rating ? 'text-brand-gold' : 'text-brand-ink/10'}
                  />
                ))}
              </div>
              <p className="font-serif text-lg italic mb-8 leading-relaxed">"{item.review}"</p>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
