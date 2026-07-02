import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section className="hero-video-section" ref={sectionRef}>
      <motion.video
        className="hero-video"
        src="/assets/videos/Hero sec.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ y: videoY, scale: videoScale }}
      />
    </section>
  );
};
