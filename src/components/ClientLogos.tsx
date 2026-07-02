import React from 'react';
import './ClientLogos.css';

const tools = ['React', 'Next.js', 'Django', 'Supabase', 'PostgreSQL', 'Docker', 'PyTorch'];

export const ClientLogos: React.FC = () => {
  return (
    <section className="section client-logos-section">
      <div className="logos-strip">
        {tools.map((name) => (
          <span key={name} className="logo-name font-heading text-ink-muted">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};
