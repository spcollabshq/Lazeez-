import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuCategories = ['Starters', 'Main Course', 'Drinks', 'Desserts'];

const menuItems = {
  Starters: [
    { name: 'Kolkata Fish Fry', price: '₹320', desc: 'Bhetki fillet breaded and fried to golden perfection.' },
    { name: 'Mutton Cutlet', price: '₹280', desc: 'Crispy outer layer with minced mutton filling.' },
    { name: 'Chicken Reshmi Kebab', price: '₹350', desc: 'Creamy marinated chicken grilled in clay oven.' },
  ],
  'Main Course': [
    { name: 'Mutton Dak Bungalow', price: '₹550', desc: 'Classic Anglo-Indian styled mutton curry with egg and potatoes.' },
    { name: 'Chicken Chaap', price: '₹340', desc: 'Chicken slow-cooked in a spicy and oily poppy seed gravy.' },
    { name: 'Basanti Pulao', price: '₹280', desc: 'Saffron-infused sweet yellow rice with dry fruits.' },
  ],
  Drinks: [
    { name: 'Lazeez Signature Gin-Tea', price: '₹420', desc: 'Darjeeling tea infused gin with local spices.' },
    { name: 'Fresh Lime Soda', price: '₹120', desc: 'Classic refreshment with sweet/salt option.' },
    { name: 'Aam Panna Margarita', price: '₹450', desc: 'Raw mango based tequila cocktail.' },
  ],
  Desserts: [
    { name: 'Baked Rosogolla', price: '₹220', desc: 'Traditional rosogolla baked in kheer and nolen gur.' },
    { name: 'Nolen Gur Ice Cream', price: '₹240', desc: 'Date palm jaggery ice cream—a winter classic available all year.' },
    { name: 'Caramel Custard', price: '₹180', desc: 'Classic silky smooth caramel pudding.' },
  ],
};

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState('Starters');

  return (
    <section className="py-24 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Explore Our Menu</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === cat
                    ? 'border-b-2 border-brand-ink text-brand-ink'
                    : 'text-brand-ink/40 hover:text-brand-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto"
        >
          {menuItems[activeTab as keyof typeof menuItems].map((item, i) => (
            <div key={i} className="flex flex-col group py-4 border-b border-brand-ink/5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                <span className="font-sans font-bold text-brand-gold">{item.price}</span>
              </div>
              <p className="text-sm text-brand-ink/60">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link to="/menu" className="btn-secondary group relative inline-flex items-center">
            View Full Menu
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-ink text-brand-paper text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded">
              Browse all dishes with filters and categories
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
