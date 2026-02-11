import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookChef from './pages/BookChef';
import TheBakery from './pages/TheBakery';

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
    <Router>
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

        <Routes>
          <Route path="/" element={<Navigate to="/bakery" replace />} />
          <Route path="/bakery" element={<TheBakery />} />
          <Route path="/book-chef" element={<BookChef />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
