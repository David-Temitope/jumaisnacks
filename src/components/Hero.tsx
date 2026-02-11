export default function Hero() {
  return (
    <header className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
            The Personal Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 dark:text-white">
            Bring the Art of Jumai <br />
            <span className="text-primary italic">To Your Table.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Elevate your private gatherings with an exclusive culinary experience. Book Chef Jumai for intimate dinners, luxury wedding tastings, or personalized masterclasses.
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
        <img
          alt="Chef plating a luxury dessert"
          className="w-full h-full object-cover opacity-20 dark:opacity-30 mask-image-linear"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3xe6gt3h7tfJVobQGAiI4TkbvcOiGbRB1d98il2UVfF75BNhULApuej9mdCsV6JwSDVr3LQ5CMLR5aQYuVbTcHRwPDNRKVAOZT_6ltK5gSE2PdrDt-P4GndYPv_gyijWwx9JfSOe1lDunQDHK5FWM5aX_w0tjV-MqlbHLohkb0LLn_49BHYQjK22pEr6sC0KT7NxOVlzjjq-P0K0SwWFy3ryRZ2bOW3ZCmwiy5PyDpAs1tbLtxx3Z8cUroV0XC2NfS2BvJiiRfj8"
        />
      </div>
    </header>
  );
}
