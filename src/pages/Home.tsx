import { Link } from 'react-router-dom';
import JumaiImg from '../assets/Jumai.jpg';
import Choco from '../assets/choco.jpg';
import Strawberry from '../assets/strawberry.jpg';
import Creamy from '../assets/creamy.jpg';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Welcome to Excellence
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                Artisanal <span className="text-primary">Delights</span> for Every Celebration
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
                Experience the perfect blend of traditional flavors and modern elegance. From signature cakes to curated catering, discover why Jumai Snacks is your go-to destination for premium baked goods and professional culinary services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/bakery"
                  className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all text-center"
                >
                  Explore Our Shop
                </Link>
                <Link
                  to="/book-chef"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all text-center"
                >
                  Book Chef Jumai
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl h-96 flex items-center justify-center border border-primary/20">
                <img src={JumaiImg} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">Our Premium Services</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
              Discover our three pillars of excellence, each meticulously crafted to bring joy and sophistication to your moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Bakery */}
            <Link to="/bakery" className="group">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all h-full hover:shadow-lg">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-6xl text-primary">favorite_border</span>
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">The Bakery</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Browse our curated collection of signature cakes, artisan cupcakes, premium chinchin, and brioche donuts. Each creation is a masterpiece of flavor and design.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all gap-1">
                  <span>Shop Now</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Book Chef */}
            <Link to="/book-chef" className="group">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all h-full hover:shadow-lg">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-6xl text-primary">restaurant</span>
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">Book Chef Jumai</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Bring culinary excellence to your private events. Book Chef Jumai for intimate dinners, luxury tastings, masterclasses, and exclusive gastronomic experiences.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all gap-1">
                  <span>Book Now</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Catering */}
            <div className="group">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all h-full hover:shadow-lg">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-6xl text-primary">local_dining</span>
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">Catering & Events</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Customize your event with our premium catering services. From corporate functions to weddings, we deliver excellence with every detail.
                </p>
                <div className="flex items-center text-slate-400 font-semibold gap-1">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 border-t border-primary/10 bg-white/50 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Popular Selections</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">Signature Collections</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
              Handcrafted with precision and passion, our bestselling creations have won hearts across the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Product Cards */}
            {[
              {
                name: "Midnight Velvet",
                tag: "BEST SELLER",
                price: "N500.00",
                desc: "Deep cocoa sponge with signature crimson cream cheese frosting.",
                image: Choco,
              },
              {
                name: "Flora Collection",
                tag: "NEW FLAVOR",
                price: "N600.00",
                desc: "Hand-piped floral cupcakes with infused botanical essences.",
                image: Strawberry,
              },
              {
                name: "Ivory Romance",
                tag: "LIMITED EDITION",
                price: "N3200.00",
                desc: "Tiered wedding masterpiece with white chocolate ganache.",
                image: Creamy,
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold dark:text-white mb-2">{product.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{product.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-primary/10">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <button className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all">
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/bakery"
              className="inline-block px-8 py-3 bg-white dark:bg-slate-800 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">Excellence in Every Detail</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "verified",
                title: "Premium Quality",
                desc: "Only the finest ingredients, sourced with care for uncompromising taste."
              },
              {
                icon: "group",
                title: "Expert Team",
                desc: "Chef Jumai and team bring decades of culinary expertise and passion."
              },
              {
                icon: "cached",
                title: "Custom Orders",
                desc: "Personalized creations tailored to your preferences and celebrations."
              },
              {
                icon: "local_shipping",
                title: "Reliable Service",
                desc: "Timely delivery and exceptional customer care, every single time."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 flex justify-center">
                  <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 border-t border-primary/10 bg-white/50 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Customer Love</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">Loved by Celebrations</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
              Hear from our delighted customers who've experienced the Jumai Snacks difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amara Williams",
                role: "Wedding Planner",
                text: "Chef Jumai's cakes were the highlight of our wedding. The Ivory Romance was absolutely stunning and tasted divine."
              },
              {
                name: "David Chen",
                role: "Corporate Event Manager",
                text: "Professional, creative, and delicious. Jumai turned our company celebration into an unforgettable culinary experience."
              },
              {
                name: "Sophie Turner",
                role: "Home Baker Enthusiast",
                text: "I've tried everything from The Bakery. Each product is a work of art. Highly recommend for any occasion!"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg text-primary">star</span>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-bold dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/5"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Ready to Celebrate</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white mb-6">
            Let's Create Something <span className="text-primary">Extraordinary</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're looking for the perfect gift, planning a celebration, or seeking culinary expertise, Jumai Snacks is here to make it exceptional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-chef"
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
            >
              Schedule a Consultation
            </Link>
            <a
              href="#"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-primary/10 bg-white/50 dark:bg-primary/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold dark:text-white mb-4">Stay Updated</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Subscribe to receive exclusive offers, new collections, and culinary inspiration.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-primary/20 dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
