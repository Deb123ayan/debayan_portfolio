import React from 'react';
import { Badge } from './ui/Badge';
import ScrollFloat from './ui/ScrollFloat';
import './PortfolioGrid.css';

const tiles = [
  { id: 1, bg: '#F5A800', label: 'Full-Stack', title: 'Kinsa', sub: 'Agro E-Commerce Platform', img: 'https://placehold.co/300x300/F5A800/0D0D08?text=Kinsa' },
  { id: 2, bg: '#26261A', label: 'AI / ML', title: 'Arogya AI', sub: 'Disease Prediction — 96% AUC', img: 'https://placehold.co/300x300/26261A/FFD166?text=Arogya' },
  { id: 3, bg: '#E07B00', label: 'ML + Backend', title: 'ZafBy', sub: 'Parametric Insurance Platform', img: 'https://placehold.co/300x300/E07B00/0D0D08?text=ZafBy' },
  { id: 4, bg: '#3D2B00', label: 'Game Dev', title: 'Core Games', sub: 'Interactive Game Projects', img: 'https://placehold.co/300x300/3D2B00/F5A800?text=Games' },
];

export const PortfolioGrid: React.FC = () => {
  return (
    <section className="section portfolio-section bg-canvas overflow-clip-x">
      <div className="container">
        <ScrollFloat containerClassName="font-display text-ink portfolio-title">PROJECTS</ScrollFloat>
        <div className="portfolio-grid">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="portfolio-tile"
              style={{ backgroundColor: tile.bg }}
            >
              <img src={tile.img} alt={tile.title} className="tile-img" />
              <div className="tile-info">
                <p className="tile-title font-heading">{tile.title}</p>
                <p className="tile-sub font-body">{tile.sub}</p>
              </div>
              <div className="tile-caption">
                <Badge variant="accent">{tile.label}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
