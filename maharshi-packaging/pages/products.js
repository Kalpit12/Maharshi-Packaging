import { motion } from 'framer-motion';

const products = [
  { name: 'Eco Box', type: 'Eco-Friendly', img: '', desc: 'Sustainable packaging for all needs.' },
  { name: 'Corrugated Crate', type: 'Corrugated', img: '', desc: 'Strong, reliable, and customizable.' },
  { name: 'Industrial Pack', type: 'Industrial', img: '', desc: 'Heavy-duty solutions for industry.' },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-royal mb-8 text-center">Products & Solutions</h2>
      {/* Filters Placeholder */}
      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-royal text-white rounded-lg">All</button>
        <button className="px-4 py-2 bg-green text-royal rounded-lg">Eco-Friendly</button>
        <button className="px-4 py-2 bg-royal text-white rounded-lg">Corrugated</button>
        <button className="px-4 py-2 bg-green text-royal rounded-lg">Industrial</button>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            whileHover={{ rotateY: 15, scale: 1.05 }}
            className="neu p-8 rounded-xl flex flex-col items-center cursor-pointer transition-transform"
          >
            {/* 3D Product Image Placeholder */}
            <div className="w-32 h-32 bg-glass glass flex items-center justify-center mb-4">
              <span className="text-3xl text-royal/30">[3D]</span>
            </div>
            <div className="text-2xl font-bold text-royal mb-2">{p.name}</div>
            <div className="text-green font-semibold mb-2">{p.type}</div>
            <div className="text-royal/70 text-center">{p.desc}</div>
          </motion.div>
        ))}
      </div>
      {/* Build Your Box Configurator Placeholder */}
      <div className="w-full max-w-2xl glass p-8 flex flex-col items-center">
        <span className="text-2xl text-royal/40">[Build Your Box Configurator Here]</span>
      </div>
    </div>
  );
} 