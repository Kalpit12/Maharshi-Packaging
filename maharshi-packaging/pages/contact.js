import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-royal mb-8 text-center">Contact Us</h2>
      {/* Google Map Placeholder */}
      <div className="w-full max-w-2xl mb-12 aspect-video glass flex items-center justify-center">
        <span className="text-2xl text-royal/40">[Google Map Here]</span>
      </div>
      {/* Animated Contact Icons */}
      <div className="flex gap-8 mb-12">
        <motion.a
          whileHover={{ scale: 1.2, boxShadow: '0 0 16px #25D366' }}
          href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
          className="w-16 h-16 bg-glass glass rounded-full flex items-center justify-center shadow-glass cursor-pointer"
        >
          <span className="text-3xl" style={{ color: '#25D366' }}>🟢</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, boxShadow: '0 0 16px #0072c6' }}
          href="mailto:info@maharshipackaging.com"
          className="w-16 h-16 bg-glass glass rounded-full flex items-center justify-center shadow-glass cursor-pointer"
        >
          <span className="text-3xl" style={{ color: '#0072c6' }}>✉️</span>
        </motion.a>
      </div>
      {/* Office Hours Section */}
      <div className="glass p-8 rounded-xl w-full max-w-md text-center">
        <div className="text-xl font-bold text-royal mb-2">Office Hours</div>
        <div className="flex flex-col gap-1">
          <div className="hover:text-green transition-colors">Mon-Fri: 9:00 AM - 6:00 PM</div>
          <div className="hover:text-green transition-colors">Sat: 10:00 AM - 2:00 PM</div>
          <div className="hover:text-green transition-colors">Sun: Closed</div>
        </div>
      </div>
    </div>
  );
} 