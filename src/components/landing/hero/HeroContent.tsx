import { WaitlistForm } from "./WaitlistForm";
import { motion } from "framer-motion";

export const HeroContent = () => {
  return (
    <div className="space-y-8">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-2 rounded-full bg-kingdom-primary/10 text-kingdom-primary border border-kingdom-primary/20"
      >
        Welcome to MyKingdom
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-kingdom-primary to-kingdom-secondary">
          AI-Powered Property
        </span>
        <br />
        <span className="text-white">
          Management Platform
        </span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg md:text-xl text-kingdom-text/80 max-w-2xl"
      >
        Transform your property management experience with cutting-edge AI technology. 
        Streamline operations, maximize ROI, and deliver exceptional service to your tenants.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <WaitlistForm />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex items-center space-x-4 text-sm text-kingdom-text/60"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-kingdom-primary to-kingdom-secondary p-[1px]"
            >
              <div className="w-full h-full rounded-full bg-kingdom-dark"></div>
            </div>
          ))}
        </div>
        <p>Trusted by 1000+ property managers worldwide</p>
      </motion.div>
    </div>
  );
};