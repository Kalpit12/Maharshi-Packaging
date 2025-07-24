import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* 3D Hero Section Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[400px] h-[400px] bg-glass glass flex items-center justify-center">
          {/* Replace with Three.js 3D box */}
          <span className="text-6xl text-royal font-bold opacity-30">[3D Box]</span>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-royal mb-4 text-center drop-shadow-lg"
        >
          Innovating the Future of Packaging
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-royal/80 mb-8 text-center"
        >
          Custom, Sustainable & Smart Packaging Solutions
        </motion.p>
        <div className="flex gap-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 bg-green text-royal font-semibold rounded-xl shadow-neu neu text-lg transition-all hover:bg-royal hover:text-white"
          >
            Explore Solutions
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 bg-royal text-white font-semibold rounded-xl shadow-neu neu text-lg transition-all hover:bg-green hover:text-royal"
          >
            Request a Quote
          </motion.button>
        </div>
      </div>
    </div>
  );
} 