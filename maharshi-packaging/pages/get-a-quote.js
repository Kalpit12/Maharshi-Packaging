import { motion } from 'framer-motion';

export default function GetAQuote() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-royal mb-8 text-center">Request a Quote</h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="glass p-8 rounded-xl w-full max-w-lg flex flex-col gap-6 mb-12"
      >
        <div className="relative">
          <input type="text" id="name" name="name" required className="peer w-full bg-transparent border-b-2 border-royal py-2 px-1 text-royal focus:outline-none" />
          <label htmlFor="name" className="absolute left-1 top-2 text-royal/60 transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-green peer-valid:-top-5 peer-valid:text-xs">Name</label>
        </div>
        <div className="relative">
          <input type="email" id="email" name="email" required className="peer w-full bg-transparent border-b-2 border-royal py-2 px-1 text-royal focus:outline-none" />
          <label htmlFor="email" className="absolute left-1 top-2 text-royal/60 transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-green peer-valid:-top-5 peer-valid:text-xs">Email</label>
        </div>
        <div className="relative">
          <textarea id="details" name="details" required className="peer w-full bg-transparent border-b-2 border-royal py-2 px-1 text-royal focus:outline-none resize-none" rows={3} />
          <label htmlFor="details" className="absolute left-1 top-2 text-royal/60 transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-green peer-valid:-top-5 peer-valid:text-xs">Project Details</label>
        </div>
        {/* Drag-and-drop file upload placeholder */}
        <div className="w-full h-24 border-2 border-dashed border-green flex items-center justify-center rounded-xl bg-green/5 mb-2">
          <span className="text-green">[Drag & Drop File Upload]</span>
        </div>
        <button type="submit" className="px-8 py-3 bg-green text-royal font-semibold rounded-xl shadow-neu neu text-lg transition-all hover:bg-royal hover:text-white">Submit</button>
      </motion.form>
      {/* Chatbot Pop-up Placeholder */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-16 h-16 bg-glass glass rounded-full flex items-center justify-center shadow-glass cursor-pointer">
          <span className="text-3xl text-green">💬</span>
        </div>
        {/* [Interactive Chatbot Here] */}
      </div>
    </div>
  );
} 