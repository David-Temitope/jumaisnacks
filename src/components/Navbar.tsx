export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          JUMAI <span className="text-slate-900 dark:text-white">SNACKS</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <a className="hover:text-primary transition-colors text-slate-900 dark:text-slate-100" href="#">The Bakery</a>
          <a className="hover:text-primary transition-colors border-b-2 border-primary text-slate-900 dark:text-slate-100" href="#">Book Chef</a>
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
