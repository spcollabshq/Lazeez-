import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Calendar, Clock, Users as UsersIcon, ShieldCheck, Zap, Heart, User, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Reservation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.guests) newErrors.guests = 'Number of guests required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (validate()) {
      setIsSubmitting(true);
      
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxFJdDevIeIaLByGVge4WJ3NJ5KCTlpZYnnWRh4LLLvbw4O3qcvJ-exqLh9gge7kDU2/exec';
      
      const dataToSend = {
        userName: formData.name,
        userPhone: formData.phone,
        bookingDate: formData.date,
        bookingTime: formData.time,
        guestCount: formData.guests
      };

      try {
        await fetch(scriptURL, { 
          method: 'POST', 
          body: JSON.stringify(dataToSend),
          mode: 'no-cors' 
        });
        
        // Using no-cors means we won't get access to the response content, 
        // but if the fetch succeeds, we proceed to success page.
        setIsSubmitting(false);
        navigate('/reservation-success', { state: formData });
      } catch (error) {
        console.error('Reservation submission error:', error);
        setSubmitError('Opps, something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    }
  };

  const trustSignals = [
    { icon: <Zap size={16} />, text: 'Instant Confirmation' },
    { icon: <ShieldCheck size={16} />, text: 'Secure Booking' },
    { icon: <Heart size={16} />, text: 'No Booking Fees' },
  ];

  return (
    <section className="py-24 bg-brand-paper relative overflow-hidden" id="reservation">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-2xl rounded-[3rem] border border-brand-ink/5">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Experience Lazeez</h2>
            <p className="text-brand-ink/60 font-medium italic">Reserve your table and skip the queue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 flex items-center gap-2">
                  <User size={14} className="text-brand-gold" />
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full border-b-2 py-4 outline-none transition-all font-serif text-xl font-bold italic bg-transparent ${
                    errors.name ? 'border-red-500' : 'border-brand-ink/10 focus:border-brand-gold'
                  }`}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.name}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 flex items-center gap-2">
                  <Phone size={14} className="text-brand-gold" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full border-b-2 py-4 outline-none transition-all font-serif text-xl font-bold italic bg-transparent ${
                    errors.phone ? 'border-red-500' : 'border-brand-ink/10 focus:border-brand-gold'
                  }`}
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.phone}</motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Date */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 flex items-center gap-2">
                  <Calendar size={14} className="text-brand-gold" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full border-b-2 py-4 outline-none transition-all font-serif text-xl font-bold italic bg-transparent ${
                    errors.date ? 'border-red-500' : 'border-brand-ink/10 focus:border-brand-gold'
                  }`}
                />
                <AnimatePresence>
                  {errors.date && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.date}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Time */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 flex items-center gap-2">
                  <Clock size={14} className="text-brand-gold" />
                  Preferred Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full border-b-2 py-4 outline-none transition-all font-serif text-xl font-bold italic bg-transparent appearance-none ${
                    errors.time ? 'border-red-500' : 'border-brand-ink/10 focus:border-brand-gold'
                  }`}
                >
                  <option value="">Time Slot</option>
                  <optgroup label="Lunch">
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                  </optgroup>
                  <optgroup label="Dinner">
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                  </optgroup>
                </select>
                <AnimatePresence>
                  {errors.time && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.time}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Guests */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 flex items-center gap-2">
                  <UsersIcon size={14} className="text-brand-gold" />
                  Table Size
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className={`w-full border-b-2 py-4 outline-none transition-all font-serif text-xl font-bold italic bg-transparent appearance-none ${
                    errors.guests ? 'border-red-500' : 'border-brand-ink/10 focus:border-brand-gold'
                  }`}
                >
                  <option value="">Number of Guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                  ))}
                  <option value="large">Large Group (8+)</option>
                </select>
                <AnimatePresence>
                  {errors.guests && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.guests}</motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center gap-8">
              <AnimatePresence>
                {submitError && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 font-bold text-sm bg-red-50 px-6 py-2 rounded-full border border-red-100"
                  >
                    {submitError}
                  </motion.p>
                )}
              </AnimatePresence>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary px-12 py-5 shadow-2xl transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Checking Availability...' : 'Book My Table'}
              </button>

              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                {trustSignals.map((signal, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
                    <span className="text-brand-gold">{signal.icon}</span>
                    {signal.text}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
