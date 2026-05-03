
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book Table', href: '/reservation' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const others = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-brand-ink text-brand-paper py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-4xl font-bold tracking-tighter mb-6 underline decoration-brand-gold decoration-4 underline-offset-8">Lazeez</h2>
            <p className="text-brand-paper/50 max-w-sm leading-relaxed italic text-sm">
              Exploring the rich culinary heritage of Kolkata with a modern touch. Every meal is a celebration of flavors, tradition, and heart.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-30">Quick Links</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-brand-gold transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-30">Follow Us</h3>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-brand-paper/20 flex items-center justify-center hover:bg-brand-paper hover:text-brand-ink transition-all">
                  <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-brand-paper/20 flex items-center justify-center hover:bg-brand-paper hover:text-brand-ink transition-all">
                  <Facebook size={18} />
               </a>
            </div>
            <div className="pt-4 space-y-4">
               {others.map((item) => (
                 <Link key={item.name} to={item.href} className="block text-[10px] uppercase opacity-50 hover:opacity-100 transition-opacity">{item.name}</Link>
               ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-paper/10 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">
            © Lazeez 2026. All rights reserved. • Crafted in Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
}
