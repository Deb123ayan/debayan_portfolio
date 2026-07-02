import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollFloat from './ui/ScrollFloat';
import './ServicesAccordion.css';

const services = [
  { id: 1, title: 'FRONTEND', description: 'React, Next.js, HTML5, Tailwind CSS, Streamlit, Three.js — building fast, accessible, and visually sharp interfaces.' },
  { id: 2, title: 'BACKEND', description: 'Express.js, Django REST Framework, Supabase, PocketBase — scalable APIs and cloud-ready server architecture.' },
  { id: 3, title: 'AI / ML', description: 'CNNs, ResNet-50, Scikit-learn, pandas, NumPy, Explainable AI — end-to-end ML pipelines from data to deployment.' },
  { id: 4, title: 'GAME DEV', description: 'Core Engine, Unreal Blueprinting, Lua Scripting — interactive and immersive real-time game experiences.' },
];

const SkillCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
    >
      <h3 className="font-heading skill-card-title">{service.title}</h3>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cloud-tooltip"
            initial={{ opacity: 0, y: 20, scale: 0.8, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: 20, scale: 0.8, x: '-50%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cloud-bump bump-1" />
            <div className="cloud-bump bump-2" />
            <p className="font-body skill-card-desc">{service.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ServicesAccordion: React.FC = () => {
  const { ref } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="section services-section overflow-clip-x" ref={ref}>
      <div className="container">
        <ScrollFloat containerClassName="font-display section-title">
          SKILLS
        </ScrollFloat>
        <div className="skills-grid">
          {services.map((service, i) => (
            <SkillCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
