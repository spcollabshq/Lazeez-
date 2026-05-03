
import React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-brand-ink mb-12">Terms & Conditions</h1>
      <div className="prose prose-brand-ink italic text-brand-ink/60 space-y-8">
         <section>
            <h2 className="text-xl font-bold text-brand-ink not-italic mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using this application, you agree to be bound by these terms and conditions.</p>
         </section>
         <section>
            <h2 className="text-xl font-bold text-brand-ink not-italic mb-4">2. Reservations</h2>
            <p>Table reservations are subject to availability. We reserve the right to cancel or modify reservations at any time.</p>
         </section>
         <section>
            <h2 className="text-xl font-bold text-brand-ink not-italic mb-4">3. Ordering & Payments</h2>
            <p>All prices are in INR and inclusive of applicable taxes unless stated otherwise.</p>
         </section>
      </div>
    </div>
  );
}
