import React from 'react';
import './StatsBand.css';

export const StatsBand: React.FC = () => {
  return (
    <section className="section stats-section overflow-clip-x">
      <div className="stats-band">
          <div className="stat-item">
            <span className="stat-number font-display">01+</span>
            <span className="stat-label font-label">Years Exp.</span>
          </div>

          <div className="stat-avatar-wrap">
            <div className="stat-avatar-ring">
              <img
                src="https://placehold.co/120x120/0D0D08/F5A800?text=DM"
                alt="Debayan Mukherjee"
                className="stat-avatar"
              />
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number font-display">10+</span>
            <span className="stat-label font-label">Projects</span>
          </div>

          <div className="stat-item">
            <span className="stat-number font-display">96%</span>
            <span className="stat-label font-label">AUC Score</span>
          </div>
        </div>
    </section>
  );
};
