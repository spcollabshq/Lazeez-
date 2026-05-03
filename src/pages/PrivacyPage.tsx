
import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-brand-ink mb-12">Privacy Policy</h1>
      <div className="prose prose-brand-ink italic text-brand-ink/60 space-y-8">
         <section>
            <h2 className="text-xl font-bold text-brand-ink not-italic mb-4">Data Collection</h2>
            <p>We collect your name, phone number, and address to facilitate your orders and reservations.</p>
         </section>
         <section>
            <h2 className="text-xl font-bold text-brand-ink not-italic mb-4">Security</h2>
            <p>Your data is encrypted and stored securely. We do not sell your personal information to third parties.</p>
         </section>
      </div>
    </div>
  );
}
