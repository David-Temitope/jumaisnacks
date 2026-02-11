export default function ServiceTiers() {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Service Tiers</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-background-dark p-10 rounded-xl border border-primary/10 hover:border-primary/50 transition-all flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">restaurant_menu</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight dark:text-white">Private Chef Booking</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
              Chef Jumai visits your home or private venue to prepare a multi-course signature menu live. Perfect for anniversaries or high-end dinner parties. Includes full cleanup and tablescape design.
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Starting from £1,500</div>
          </div>

          <div className="bg-white dark:bg-background-dark p-10 rounded-xl border border-primary/10 hover:border-primary/50 transition-all flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">cake</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight dark:text-white">Custom Event Inquiry</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
              Large scale catering for weddings, corporate launches, or luxury pop-ups. We provide a full team, custom dessert bars, and bespoke cake designs tailored to your brand or event aesthetic.
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Bespoke Quotation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
