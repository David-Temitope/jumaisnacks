import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/bakery" className="text-2xl font-bold tracking-tighter text-primary">
          JUMAI <span className="text-slate-900 dark:text-white">SNACKS</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <Link
            to="/bakery"
            className={`hover:text-primary transition-colors ${isActive('/bakery') ? 'border-b-2 border-primary text-primary' : 'text-slate-900 dark:text-slate-100'}`}
          >
            The Bakery
          </Link>
          <Link
            to="/book-chef"
            className={`hover:text-primary transition-colors ${isActive('/book-chef') ? 'border-b-2 border-primary text-primary' : 'text-slate-900 dark:text-slate-100'}`}
          >
            Book Chef
          </Link>
          <a className="hover:text-primary transition-colors text-slate-900 dark:text-slate-100" href="#">Catering</a>
          <a className="hover:text-primary transition-colors text-slate-900 dark:text-slate-100" href="#">Contact</a>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all">
          Member Login
        </button>
      </div>
    </nav>
  );
}
