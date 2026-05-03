import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-brand-paper" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-gold mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-1">Address</h3>
                    <p className="text-xl font-serif font-bold">83B, Elgin Rd, Bhowanipore, Kolkata</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-brand-gold mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 mb-1">Phone</h3>
                    <p className="text-xl font-serif font-bold">Call: 9830695156</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-widest border border-green-500/20">
                <span className="flex w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Open Now • Closes 11 PM
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="group relative">
                  <a 
                    href="https://maps.google.com/?q=83B,Elgin+Rd,Bhowanipore,Kolkata" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    Get Directions
                    <ExternalLink size={16} />
                  </a>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-ink text-brand-paper text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded">
                    Opens in Google Maps
                  </div>
                </div>
                <a href="tel:9830695156" className="btn-secondary flex items-center justify-center gap-2">
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] bg-brand-ink/5 border border-brand-ink/10 relative rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.976077380184!2d88.34751767530188!3d22.53850197951594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027705307399eb%3A0x6b1f2b1842813133!2sLazeez!5e0!3m2!1sen!2sin!4v1714552034631!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lazeez Restaurant Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
