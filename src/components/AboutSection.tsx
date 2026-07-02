import { motion, animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollFloat from './ui/ScrollFloat';
import './AboutSection.css';

const EASE = 'easeOut' as const;

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  inView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  delay = 0,
  inView
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.round(value).toString().padStart(2, '0')}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, delay, inView, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from.toString().padStart(2, '0')}{suffix}</span>;
};

export const AboutSection: React.FC = () => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section id="about" className="section about-section" ref={ref}>
      <motion.div
        className="about-pill-wrap"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <span className="about-pill font-label">ABOUT ME</span>
      </motion.div>

      <ScrollFloat containerClassName="about-headline font-display">
        BUILDING SCALABLE APPS, AI SYSTEMS & IMMERSIVE GAMES.
      </ScrollFloat>

      <div className="about-stats-grid">
        <motion.div
          className="about-stat about-stat--tl"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          <span className="about-stat-number font-display">
            <AnimatedCounter to={2} suffix="+" inView={isInView} delay={0.2} />
          </span>
          <span className="about-stat-label font-label">Years of Experience</span>
        </motion.div>

        <motion.div
          className="about-stat about-stat--tr"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          <span className="about-stat-number font-display">
            <AnimatedCounter to={3} inView={isInView} delay={0.3} />
          </span>
          <span className="about-stat-label font-label">Internships</span>
        </motion.div>

        <motion.div
          className="about-profile-wrap"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          <div className="about-profile-circle">
            <video
              src="/assets/videos/Profile.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="about-profile-video"
            />
          </div>
        </motion.div>

        <motion.div
          className="about-stat about-stat--bl"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
        >
          <span className="about-stat-number font-display">
            <AnimatedCounter to={10} suffix="+" inView={isInView} delay={0.35} />
          </span>
          <span className="about-stat-label font-label">Total Projects</span>
        </motion.div>

        <motion.div
          className="about-stat about-stat--br"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
        >
          <span className="about-stat-number font-display">
            <AnimatedCounter to={1} inView={isInView} delay={0.4} />
          </span>
          <span className="about-stat-label font-label">GuideWire Developer Rank</span>
        </motion.div>
      </div>
    </section>
  );
};
