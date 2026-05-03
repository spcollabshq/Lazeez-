import { motion } from 'motion/react';
import { Beer, Users, Dessert } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: <Beer className="w-8 h-8" />,
      title: 'Great Beer & Cocktails',
      text: 'Enjoy a wide selection of drinks to pair with your meal',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cozy & Trendy Ambience',
      text: 'Perfect for family dinners, dates, and group outings',
    },
    {
      icon: <Dessert className="w-8 h-8" />,
      title: 'Delicious Desserts',
      text: 'End your meal on a sweet note',
    },
  ];

  return (
    <section className="py-24 bg-brand-paper" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            More Than Just a Meal
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-ink/5 flex items-center justify-center text-brand-ink">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold italic">{exp.title}</h3>
              <p className="text-brand-ink/70 leading-relaxed max-w-xs">{exp.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
