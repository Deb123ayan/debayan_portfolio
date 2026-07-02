import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TypingText } from './ui/TypingText';
import ScrollFloat from './ui/ScrollFloat';
import './BentoProjects.css';

const projects = [
  { id: 1, title: 'Kinsa', tag: 'Full-Stack', desc: 'Agro e-commerce platform connecting farmers & consumers with cart, orders, and inventory management.', tech: ['React', 'Supabase', 'PostgreSQL'], accent: '#0D0D08', textColor: '#F5A800' },
  { id: 2, title: 'Arogya AI', tag: 'AI / ML', desc: 'Cancer risk prediction with 96% AUC using ResNet-50 CNN and explainable AI dashboards.', tech: ['Python', 'ResNet-50', 'XAI'], accent: '#1A1A12', textColor: '#FFD166' },
  { id: 3, title: 'ZafBy', tag: 'ML + Backend', desc: 'Parametric insurance for gig workers with RandomForest fraud detection engine.', tech: ['Django', 'React', 'PostgreSQL'], accent: '#E07B00', textColor: '#0D0D08' },
  { id: 4, title: 'Core Games', tag: 'Game Dev', desc: 'Immersive interactive games built with Core Engine, Unreal Blueprinting and Lua scripting.', tech: ['Core Engine', 'Unreal', 'Lua'], accent: '#3D2B00', textColor: '#F5A800' },
  { id: 5, title: 'Guidewire', tag: 'Achievement', desc: 'Secured top position at college level in the Guidewire Developer Trials competition.', tech: ['Guidewire'], accent: '#26261A', textColor: '#FFD166' },
];

export const BentoProjects: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="bento-section">
      <motion.div
        className="bento-header"
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bento-label font-label">
          <TypingText text="SELECTED WORK" />
        </span>
        <ScrollFloat containerClassName="bento-title font-display">
          PROJECTS
        </ScrollFloat>
      </motion.div>

      <div className="bento-grid">
        {projects.map((p, i) => (
          <motion.div
            layout
            key={p.id}
            className={`bento-card${activeId !== null && activeId !== p.id ? ' bento-card--dimmed' : ''}${activeId === p.id ? ' bento-card--expanded' : ''}`}
            style={{ backgroundColor: p.accent }}
            onClick={() => setActiveId(activeId === p.id ? null : p.id)}
            initial={{ opacity: 0, y: 48 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          >
            {activeId !== p.id && (
              <h3
                className="bento-card-title font-display"
                style={{ color: p.textColor }}
              >
                {p.title}
              </h3>
            )}

            {activeId === p.id && (
              <motion.div
                layout
                className="bento-overlay"
                style={{ backgroundColor: p.accent }}
                onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
              >
                <span className="bento-overlay-tag font-label" style={{ color: p.textColor, borderColor: p.textColor }}>{p.tag}</span>
                <h2 className="bento-overlay-title font-display" style={{ color: p.textColor }}>{p.title}</h2>
                <p className="bento-overlay-desc font-body" style={{ color: p.textColor + 'cc' }}>{p.desc}</p>
                <div className="bento-overlay-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="bento-tech-pill font-label" style={{ color: p.textColor, borderColor: p.textColor + '55' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
