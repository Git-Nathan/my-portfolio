'use client';

import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='relative flex h-screen w-full items-center justify-center'
    >
      <p>Welcome!</p>
    </motion.div>
  );
};

export default Welcome;
