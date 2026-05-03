import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-brand-paper border-t border-brand-ink/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-4 py-3">
      <div className="flex gap-2 h-12">
        <Link 
          to="/reservation" 
          className="flex-[2] bg-brand-ink text-brand-paper flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest rounded-xl"
        >
          <Calendar size={16} />
          Book Table
        </Link>
        <a 
          href="tel:9830695156" 
          className="flex-1 border border-brand-ink text-brand-ink flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest rounded-xl"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </div>
  );
}
