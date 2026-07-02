import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollFloat from './ui/ScrollFloat';
import './FAQ.css';

const faqs = [
  { id: 1, q: "What kind of projects do you take on?", a: "Full-stack web apps, AI/ML systems, game development, and everything in between. If it involves building something real, I'm in." },
  { id: 2, q: "What's your tech stack of choice?", a: "React + Next.js on the frontend, Django REST or Express on the backend, Supabase/PostgreSQL for data, and scikit-learn/PyTorch for ML work." },
  { id: 3, q: "Do you work remotely?", a: "Yes — fully remote and async-friendly. Based in Kharagpur, West Bengal, but available across time zones." },
  { id: 4, q: "Can you handle both design and engineering?", a: "Yes. I bridge both sides — I care about the visual quality of what I build, not just the code behind it." },
];

export const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { ref, isInView } = useScrollAnimation(0.1);

  const toggle = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <section className="section faq-section overflow-clip-x" ref={ref}>
      <div className="container">
        <ScrollFloat containerClassName="font-display faq-title">
          FAQ
        </ScrollFloat>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <motion.div
              key={item.id}
              className={`faq-item ${expandedId === item.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.09 }}
            >
              <button className="faq-header" onClick={() => toggle(item.id)}>
                <span className="font-heading">{item.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-content">
                <p className="font-body">{item.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
