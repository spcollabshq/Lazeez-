
import { motion } from 'motion/react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reservation', href: '/reservation' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Offers', href: '/offers' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tighter text-brand-ink">
              Lazeez
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[10px] font-bold text-brand-ink/70 hover:text-brand-ink transition-colors uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:9830695156" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink hover:text-brand-gold transition-colors">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <Link to="/reservation" className="btn-primary py-2 px-6 text-[10px]">
              Book Table
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-ink p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-brand-paper shadow-xl border-t border-brand-ink/5 py-8"
        >
          <div className="flex flex-col px-10 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif font-bold text-brand-ink"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-brand-ink/5 flex flex-col space-y-6">
              <a href="tel:9830695156" className="flex items-center gap-4 text-brand-ink font-bold uppercase tracking-widest text-xs">
                <Phone size={18} /> Call Now
              </a>
              <Link to="/reservation" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">
                Book Table
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
