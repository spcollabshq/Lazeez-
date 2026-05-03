
import React from 'react';
import { HelpCircle, ChevronRight, MessageCircle, Phone, Mail, FileText } from 'lucide-react';

export default function HelpPage() {
  const faqs = [
    { q: 'How do I track my order?', a: 'You can track your order in the "My Orders" section of your profile or directly from the tracking link sent to your phone.' },
    { q: 'What are your delivery hours?', a: 'We deliver from 12:00 PM to 11:00 PM daily across Kolkata.' },
    { q: 'Can I cancel my reservation?', a: 'Yes, you can cancel up to 2 hours before the booking time via the "Reservation Confirmation" page or by calling us.' }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-5xl font-serif font-bold text-brand-ink mb-12 text-center">Help & Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: MessageCircle, label: 'Live Chat', desc: 'Chat with us' },
          { icon: Phone, label: 'Call Us', desc: '+91 33 2440 6898' },
          { icon: Mail, label: 'Email', desc: 'hello@lazeez.in' }
        ].map((item) => (
          <div key={item.label} className="p-8 bg-white border border-brand-ink/5 rounded-[2.5rem] text-center hover:shadow-xl transition-all">
             <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-brand-gold" />
             </div>
             <h3 className="font-bold text-brand-ink mb-1">{item.label}</h3>
             <p className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/30 italic">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-10 rounded-[3rem] border border-brand-ink/5 shadow-sm">
         <h2 className="text-2xl font-serif font-bold text-brand-ink mb-8 border-b border-brand-ink/5 pb-4">FAQs</h2>
         <div className="space-y-8">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                 <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-bold text-brand-ink group-hover:text-brand-gold transition-colors pr-6">{faq.q}</h3>
                    <ChevronRight className="w-5 h-5 text-brand-ink/20 group-open:rotate-90 transition-transform" />
                 </summary>
                 <div className="mt-4 text-sm text-brand-ink/60 leading-relaxed italic border-l-2 border-brand-gold/20 pl-6 py-2">
                    {faq.a}
                 </div>
              </details>
            ))}
         </div>
      </div>
      
      <div className="mt-16 text-center">
         <button className="flex items-center gap-2 mx-auto text-xs font-bold uppercase tracking-widest text-brand-ink/30 hover:text-brand-ink transition-colors">
            <FileText className="w-4 h-4" /> View Full Documentation
         </button>
      </div>
    </div>
  );
}
