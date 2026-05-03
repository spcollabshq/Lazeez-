
import React from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl font-serif font-bold text-brand-ink mb-4">Gallery</h1>
        <p className="text-brand-ink/60 font-medium italic">Take a look inside the world of Lazeez</p>
      </div>
      <Gallery full />
    </div>
  );
}
