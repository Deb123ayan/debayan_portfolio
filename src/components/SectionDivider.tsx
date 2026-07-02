import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface Props {
  from: string;
  to: string;
  flip?: boolean;
}

export const SectionDivider: React.FC<Props> = ({ from, to, flip = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      style={{ display: 'block', lineHeight: 0, overflow: 'hidden', background: from }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: 'clamp(40px, 6vw, 80px)',
          transform: flip ? 'scaleX(-1)' : undefined,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static flat base so there's no flash before animation */}
        <motion.polygon
          fill={to}
          initial={{ points: '0,0 1440,0 1440,80 720,80 0,80' }}
          animate={
            isInView
              ? {
                  points: [
                    '0,0 1440,0 1440,80 720,80 0,80',   // flat
                    '0,0 1440,0 1440,80 720,8 0,80',    // tip dips down
                    '0,0 1440,0 1440,80 720,28 0,80',   // settle mid
                    '0,0 1440,0 1440,80 720,12 0,80',   // bounce
                    '0,0 1440,0 1440,80 720,20 0,80',   // rest
                  ],
                }
              : { points: '0,0 1440,0 1440,80 720,80 0,80' }
          }
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
            times: [0, 0.3, 0.6, 0.8, 1],
          }}
        />
      </svg>
    </div>
  );
};
