import { motion } from 'framer-motion';
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollFloat from './ui/ScrollFloat';
import './Experience.css';

export const Experience: React.FC = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <ScrollFloat containerClassName="font-display section-title-exp">
          EXPERIENCE
        </ScrollFloat>
        
        <motion.div 
          className="experience-card"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="exp-content">
            <h3 className="font-heading exp-title">Support Tech Intern</h3>
            <h4 className="font-heading exp-company">High Radius</h4>
            <div className="exp-date font-label">June 8 2026 — June 8 2027</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
