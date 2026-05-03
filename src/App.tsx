
import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import MenuPreview from './components/MenuPreview';
import Reservation from './components/Reservation';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import Layout from './components/Layout';
import MiniReservationCTA from './components/MiniReservationCTA';
import { WifiOff } from 'lucide-react';

// Pages
import MenuOverview from './pages/MenuOverview';
import CategoryPage from './pages/CategoryPage';
import DishDetail from './pages/DishDetail';
import SearchResults from './pages/SearchResults';
import ReservationConfirmation from './pages/ReservationConfirmation';
import ReservationPage from './pages/ReservationPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import OffersPage from './pages/OffersPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <MiniReservationCTA />
      <Experience />
      <MenuPreview />
      <MiniReservationCTA />
      <Reservation />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  );
}

export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-paper text-brand-ink p-6 text-center">
        <WifiOff size={48} className="mb-4 opacity-20" />
        <h1 className="text-2xl font-bold mb-2">You’re offline.</h1>
        <p className="opacity-60 italic">Check your connection and try again.</p>
        <button onClick={() => window.location.reload()} className="mt-6 btn-primary">Retry</button>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuOverview />} />
          <Route path="/menu/:category" element={<CategoryPage />} />
          <Route path="/dish/:id" element={<DishDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/reservation-success" element={<ReservationConfirmation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
