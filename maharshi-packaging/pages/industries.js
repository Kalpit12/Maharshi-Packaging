import { motion } from 'framer-motion';

const industries = [
  { name: 'Food & Beverage', icon: '[🍔]' },
  { name: 'Pharmaceutical', icon: '[💊]' },
  { name: 'E-commerce', icon: '[📦]' },
  { name: 'Automotive', icon: '[🚗]' },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-royal mb-8 text-center">Industries We Serve</h2>
      {/* Animated Icons */}
      <div className="flex flex-wrap gap-8 mb-12 justify-center">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="neu p-8 rounded-xl flex flex-col items-center w-48"
          >
            <div className="text-5xl mb-4">{ind.icon}</div>
            <div className="text-xl font-semibold text-royal text-center">{ind.name}</div>
          </motion.div>
        ))}
      </div>
      {/* Sliding Use Cases Placeholder */}
      <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="glass p-8 w-full max-w-3xl text-center text-royal/70">
        [Sliding Use Cases Here]
      </motion.div>
    </div>
  );
} 