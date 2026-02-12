import { useState } from 'react';
import Choco from '../assets/choco.jpg';
import Strawberry from '../assets/strawberry.jpg';
import Creamy from '../assets/creamy.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Midnight Velvet",
    price: "N850.00",
    category: "Signature Cakes",
    description: "Deep cocoa sponge with signature crimson cream cheese frosting.",
    image: Choco,
    badge: "BEST SELLER"
  },
  {
    id: 2,
    name: "Flora Collection",
    price: "N500.00",
    category: "Artisan Cupcakes",
    description: "Hand-piped floral cupcakes with infused botanical essences.",
    image: Strawberry,
    badge: "NEW FLAVOR"
  },
  {
    id: 3,
    name: "Glazed Brioche",
    price: "N800.00",
    category: "Brioche Donuts",
    description: "Cloud-like donuts with a crystal honey glaze and sea salt.",
    image: Creamy
  },
  {
    id: 4,
    name: "Premium Chinchin",
    price: "N1500.00",
    category: "Premium Chinchin",
    description: "Traditional crunchy bites with a hint of nutmeg and vanilla.",
    image: Strawberry
  },
  {
    id: 5,
    name: "Ivory Romance",
    price: "N3200.00",
    category: "Signature Cakes",
    description: "Tiered wedding masterpiece with white chocolate ganache.",
    image: Choco,
    badge: "LIMITED EDITION"
  },
  {
    id: 6,
    name: "Double Choco",
    price: "£32.00",
    category: "Artisan Cupcakes",
    description: "Belgium dark chocolate cupcakes with molten centers.",
    image: Creamy
  }
];

const TheBakery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Delicacies');

  const filteredProducts = selectedCategory === 'All Delicacies'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Sub-header / Category Navigation */}
      <div className="border-b border-primary/10 bg-white/50 dark:bg-primary/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#" className="text-primary border-b border-primary pb-1">Cakes</a>
            <a href="#" className="hover:text-primary transition-colors pb-1">Cupcakes</a>
            <a href="#" className="hover:text-primary transition-colors pb-1">Donuts</a>
            <a href="#" className="hover:text-primary transition-colors pb-1">Chinchin</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">search</button>
            <div className="relative">
              <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">shopping_bag</button>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Explore Catalog</h3>
              <ul className="space-y-4">
                {[
                  { name: 'All Delicacies', count: 48 },
                  { name: 'Signature Cakes', count: 12 },
                  { name: 'Artisan Cupcakes', count: 18 },
                  { name: 'Brioche Donuts', count: 8 },
                  { name: 'Premium Chinchin', count: 10 }
                ].map((cat) => (
                  <li key={cat.name} className="flex justify-between items-center group cursor-pointer" onClick={() => setSelectedCategory(cat.name)}>
                    <span className={`text-sm font-medium ${selectedCategory === cat.name ? 'text-primary' : 'text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors'}`}>{cat.name}</span>
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-primary/10 px-2 py-1 rounded-full text-slate-400">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Flavors</h3>
              <div className="space-y-3">
                {['Red Velvet', 'Dark Chocolate', 'Salted Caramel', 'Madagascar Vanilla'].map((flavor) => (
                  <label key={flavor} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-700 bg-transparent" defaultChecked={flavor === 'Dark Chocolate'} />
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{flavor}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Dietary</h3>
              <div className="flex flex-wrap gap-2">
                {['Gluten-Free', 'Vegan', 'Nut-Free'].map((tag) => (
                  <button key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-full hover:border-primary hover:text-primary transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl font-bold mb-2">Our Masterpieces</h1>
                <p className="text-slate-500 dark:text-slate-400">Handcrafted delights for the refined palate.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Sort by:</span>
                <select className="bg-transparent border-0 border-b border-slate-200 dark:border-slate-800 focus:ring-0 text-sm font-bold appearance-none pr-8">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white dark:bg-primary/5 rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {product.badge}
                      </span>
                    )}
                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-sm">favorite</span>
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                      <span className="text-primary font-bold">{product.price}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-grow bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
                        Add to Cart
                      </button>
                      <button className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:border-primary hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-lg">settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                  <button key={page} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${page === 1 ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}>
                    {page}
                  </button>
                ))}
              </div>
              <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TheBakery;
