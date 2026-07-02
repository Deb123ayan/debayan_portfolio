import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const ref = useRef(null);
  // amount: 0.1 triggers when 10% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const words = text.split(' ');
  
  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingRight: '0.25em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + index * 0.05, ease: [0.33, 1, 0.68, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
