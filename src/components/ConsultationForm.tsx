export default function ConsultationForm() {
  return (
    <div className="lg:col-span-7">
      <div className="space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Event Consultation</h2>
          <p className="text-slate-600 dark:text-slate-400">
            For custom requests like weddings, corporate events, or large scale celebrations, please fill out the details below. Our team will reach out within 24 hours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-300 dark:text-white transition-colors"
                placeholder="Johnathan Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-300 dark:text-white transition-colors"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Event Type</label>
              <select className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 transition-colors appearance-none dark:text-white">
                <option className="bg-white dark:bg-background-dark">Wedding Celebration</option>
                <option className="bg-white dark:bg-background-dark">Intimate Birthday Dinner</option>
                <option className="bg-white dark:bg-background-dark">Corporate Gala</option>
                <option className="bg-white dark:bg-background-dark">Bakery Masterclass</option>
                <option className="bg-white dark:bg-background-dark">Other / Custom</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Guest Count</label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-300 dark:text-white transition-colors"
                placeholder="e.g. 20"
                type="number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Event Location / Venue</label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-300 dark:text-white transition-colors"
              placeholder="London, United Kingdom"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Describe your Dream Menu</label>
            <textarea
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-300 dark:text-white transition-colors resize-none"
              placeholder="Tell us about your flavor preferences, dietary requirements, or theme..."
              rows={4}
            ></textarea>
          </div>

          <div className="flex items-center gap-3 py-4">
            <input
              className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-700 bg-transparent"
              id="newsletter"
              type="checkbox"
            />
            <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="newsletter">
              Keep me updated with seasonal menus and exclusive offers from Jumai Snacks.
            </label>
          </div>

          <button
            className="group flex items-center justify-center gap-3 w-full md:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold tracking-[0.2em] uppercase text-sm hover:scale-[1.02] active:scale-95 transition-all"
            type="submit"
          >
            Request Consultation
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
}
