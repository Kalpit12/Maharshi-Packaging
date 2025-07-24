import { motion } from 'framer-motion';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-royal mb-8 text-center">Sustainability</h2>
      {/* Animated Infographic Placeholder */}
      <div className="glass p-8 w-full max-w-3xl mb-12 text-center text-royal/70">
        [Animated Infographic: Recyclable Material Flow]
      </div>
      {/* Glowing Eco Efforts Section */}
      <div className="w-full max-w-2xl mb-12 p-8 rounded-xl bg-green/10 border-2 border-green shadow-glass text-center">
        <span className="text-2xl text-green font-bold glow">Eco-Friendly Initiatives</span>
        <div className="mt-4 text-royal/80">We use recycled materials, renewable energy, and sustainable processes to minimize our footprint.</div>
      </div>
      {/* Animated Certification Badges */}
      <div className="flex gap-8">
        {[1,2,3].map((n, i) => (
          <motion.div
            key={n}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, type: 'spring' }}
            className="w-24 h-24 rounded-full bg-glass glass flex items-center justify-center shadow-glass border-2 border-green"
          >
            <span className="text-green text-3xl font-bold">[✓]</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 