'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const text = 'Hello!';

const Welcome = () => {
  const [isDone, setIsDone] = useState(false);

  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='absolute flex h-screen w-full items-center justify-center overflow-hidden'
    >
      <motion.p className='indent-1 text-6xl font-semibold'>
        {text.split('').map((char, index) => (
          <motion.span
            key={`welcome-char-${char}-${index}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-20, 0, 0, 0],
            }}
            transition={{
              delay: index * 0.12,
              duration: 1.8,
              times: [0, 0.25, 0.75, 1],
              ease: 'easeInOut',
            }}
            onAnimationComplete={() => {
              if (index === text.length - 1) {
                setTimeout(() => setIsDone(true), 200);
              }
            }}
            className='inline-block'
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default Welcome;
