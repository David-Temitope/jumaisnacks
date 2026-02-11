export default function BookingCalendar() {
  return (
    <div className="lg:col-span-5">
      <div className="bg-white dark:bg-primary/5 p-8 rounded-xl shadow-xl shadow-primary/5 border border-primary/5">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          Select Your Date
        </h3>

        {/* Calendar Widget Simulation */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-semibold text-lg dark:text-white">October 2023</h4>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors dark:text-white">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors dark:text-white">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 font-bold text-slate-400">
            <div>MO</div><div>TU</div><div>WE</div><div>TH</div><div>FR</div><div className="text-primary">SA</div><div className="text-primary">SU</div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for start of month */}
            <div className="aspect-square flex items-center justify-center text-slate-300">28</div>
            <div className="aspect-square flex items-center justify-center text-slate-300">29</div>
            <div className="aspect-square flex items-center justify-center text-slate-300">30</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">1</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">2</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary/5 rounded-full text-primary">3</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary/5 rounded-full text-primary">4</div>

            {/* Selected Date */}
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">5</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">6</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary text-white rounded-full">7</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">8</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">9</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary/5 rounded-full text-primary">10</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary/5 rounded-full text-primary">11</div>

            {/* More dates */}
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">12</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">13</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">14</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">15</div>
            <div className="aspect-square flex items-center justify-center font-medium line-through text-slate-300">16</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary/5 rounded-full text-primary">17</div>
            <div className="aspect-square flex items-center justify-center font-medium bg-primary/5 rounded-full text-primary">18</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">19</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">20</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">21</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">22</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">23</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">24</div>
            <div className="aspect-square flex items-center justify-center font-medium dark:text-slate-300">25</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <span className="material-symbols-outlined text-primary mt-1">info</span>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <span className="font-bold">Note:</span> Weekend bookings (Fri-Sun) require at least 3 weeks notice due to high demand.
            </p>
          </div>
          <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-colors">
            Continue to Personalize
          </button>
        </div>
      </div>

      {/* Direct Contact Sidebar */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <a
          className="flex flex-col items-center justify-center p-6 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500 transition-all group"
          href="https://wa.me/#"
        >
          <span className="material-symbols-outlined text-green-500 group-hover:text-white text-3xl mb-2">chat</span>
          <span className="text-sm font-bold group-hover:text-white uppercase tracking-tighter">WhatsApp Chef</span>
        </a>
        <a
          className="flex flex-col items-center justify-center p-6 bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary transition-all group"
          href="mailto:chef@jumaisnacks.com"
        >
          <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl mb-2">mail</span>
          <span className="text-sm font-bold group-hover:text-white uppercase tracking-tighter">Email Inquiry</span>
        </a>
      </div>
    </div>
  );
}
