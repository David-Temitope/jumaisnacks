import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingCalendar from './components/BookingCalendar';
import ConsultationForm from './components/ConsultationForm';
import ServiceTiers from './components/ServiceTiers';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
      <Navbar />

      {/* Dark Mode Toggle for Demo */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-primary/20 flex items-center justify-center text-primary"
        >
          <span className="material-symbols-outlined">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>

      <Hero />

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <BookingCalendar />
          <ConsultationForm />
        </div>
      </main>

      <ServiceTiers />
      <Footer />
    </div>
  );
}

export default App;
