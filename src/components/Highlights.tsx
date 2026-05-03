import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import biryaniImg from '../assets/images/regenerated_image_1777703117673.jpg';
import koshaImg1 from '../assets/images/regenerated_image_1777703120467.jpg';
import koshaImg2 from '../assets/images/regenerated_image_1777703121674.jpg';

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  secondaryImage?: string;
  tag?: 'Popular' | 'Chef’s Choice' | 'Must Try';
}

const dishes: Dish[] = [
  {
    id: 1,
    name: 'Kolkata Special Biryani',
    price: '₹450',
    description: 'Aromatic basmati rice cooked with succulent mutton, traditional spices, and the iconic Kolkata potato.',
    image: biryaniImg,
    secondaryImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600',
    tag: 'Popular',
  },
  {
    id: 2,
    name: 'Tangra Style Chilli Chicken',
    price: '₹380',
    description: 'A Kolkata Chinatown classic—crispy chicken tossed in a spicy, garlicky, and umami-rich sauce.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
    secondaryImage: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600',
    tag: "Chef’s Choice",
  },
  {
    id: 3,
    name: 'Kosha Mangsho with Luchi',
    price: '₹520',
    description: 'Slow-cooked, velvety mutton curry paired with piping hot, golden-fried puffed bread.',
    image: koshaImg1,
    secondaryImage: koshaImg2,
    tag: 'Must Try',
  },
  {
    id: 4,
    name: 'Mishti Doi Cheesecake',
    price: '₹280',
    description: 'The soul of Bengal meets French patisserie. A decadent fusion of dates and yogurt.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
    secondaryImage: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    tag: 'Popular',
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-brand-paper/30" id="popular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Our Favorites
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif text-brand-ink"
          >
            Popular Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-ink/60 font-medium max-w-2xl mx-auto"
          >
            Handpicked signature items that capture the true essence of Kolkata's diverse culinary landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-ink/5 flex flex-col"
            >
              <Link to={`/dish/${dish.id}`} className="relative aspect-[1/1] overflow-hidden mb-6 rounded-2xl bg-brand-paper block">
                {dish.secondaryImage ? (
                  <div className="w-full h-full flex flex-row">
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={`${dish.name} - main view`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="relative flex-1 overflow-hidden border-l border-white/40">
                      <img
                        src={dish.secondaryImage}
                        alt={`${dish.name} - detailed view`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {dish.tag && (
                  <div className="absolute top-3 left-3 bg-brand-gold text-brand-ink px-3 py-1 text-[9px] uppercase font-bold tracking-widest rounded-full shadow-sm z-10">
                    {dish.tag}
                  </div>
                )}

                <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="bg-brand-paper text-brand-ink w-10 h-10 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </Link>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-serif text-xl font-bold leading-tight text-brand-ink">
                    {dish.name}
                  </h3>
                  <span className="font-sans font-bold text-brand-gold whitespace-nowrap">{dish.price}</span>
                </div>
                <p className="text-sm text-brand-ink/60 line-clamp-3 mb-6">
                  {dish.description}
                </p>
              </div>

              <Link to={`/dish/${dish.id}`} className="w-full py-3 px-4 rounded-xl border border-brand-ink/10 text-brand-ink font-bold text-xs uppercase tracking-widest hover:bg-brand-ink hover:text-white transition-colors duration-300 text-center">
                View Dish
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
