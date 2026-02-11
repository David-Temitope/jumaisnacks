export default function Footer() {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tighter text-primary mb-2">
            JUMAI <span className="text-slate-900 dark:text-white">SNACKS</span>
          </div>
          <p className="text-sm text-slate-500">© 2023 Jumai Bakery Group. All rights reserved.</p>
        </div>

        <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-500">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Press Kit</a>
        </div>

        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:border-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
          <a
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:border-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">camera</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
