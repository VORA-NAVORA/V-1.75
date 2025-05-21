import { motion } from 'framer-motion';

export default function AIHead() {
  return (
    <motion.div
      className="w-48 h-48 rounded-full bg-cyan-400/70 shadow-2xl mx-auto mt-10"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
    >
      <div className="w-full h-full flex items-center justify-center text-white text-4xl font-semibold tracking-wide">
        VORA
      </div>
    </motion.div>
  );
}
