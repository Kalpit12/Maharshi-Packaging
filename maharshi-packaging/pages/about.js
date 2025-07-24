import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-royal mb-8 text-center">Our Story</h2>
      {/* Interactive Timeline Placeholder */}
      <div className="w-full max-w-3xl mb-12">
        <div className="glass p-8 text-center text-2xl text-royal/70">[3D Scrollable Timeline Here]</div>
      </div>
      {/* Animated Counters */}
      <div className="flex gap-12 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="neu p-8 rounded-xl text-center">
          <div className="text-4xl font-bold text-green">500+</div>
          <div className="text-royal/80 mt-2">Clients Served</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="neu p-8 rounded-xl text-center">
          <div className="text-4xl font-bold text-green">25</div>
          <div className="text-royal/80 mt-2">Years in Business</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="neu p-8 rounded-xl text-center">
          <div className="text-4xl font-bold text-green">10+</div>
          <div className="text-royal/80 mt-2">Awards Won</div>
        </motion.div>
      </div>
      {/* Video Section Placeholder */}
      <div className="w-full max-w-2xl glass p-8 flex flex-col items-center">
        <div className="w-full aspect-video bg-royal/10 flex items-center justify-center rounded-xl">
          <span className="text-2xl text-royal/40">[Factory Video Here]</span>
        </div>
      </div>
    </div>
  );
} 