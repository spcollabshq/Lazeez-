
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileStickyBar from './MobileStickyBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-paper selection:bg-brand-gold selection:text-brand-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Layout;
