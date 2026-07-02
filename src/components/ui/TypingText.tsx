import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 0.05,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const characters = Array.from(text);
  
  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: 'none' }}
          animate={isInView ? { opacity: 1, display: 'inline' } : {}}
          transition={{ duration: 0.05, delay: delay + index * speed }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
