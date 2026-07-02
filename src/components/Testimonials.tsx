import { motion } from 'framer-motion';
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollFloat from './ui/ScrollFloat';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Testimonials.css';

const highlights = [
  {
    id: 1,
    quote: 'Built ML models for cancer risk prediction using clinical data — achieving an AUC score of 96% with ResNet-50 and explainable AI interpretations.',
    name: 'Arogya AI',
    role: 'AI/ML & Full-Stack Project',
    avatar: 'https://placehold.co/56x56/0D0D08/F5A800?text=AI',
  },
  {
    id: 2,
    quote: 'Architected a multi-layered fraud detection engine using RandomForest and image forensics to automate insurance claims for gig workers.',
    name: 'ZafBy',
    role: 'Full-Stack & ML Engineering',
    avatar: 'https://placehold.co/56x56/0D0D08/FFD166?text=ZB',
  },
  {
    id: 3,
    quote: 'Secured top position at the college level in the Guidewire Developer Trials competition.',
    name: 'Achievement',
    role: 'Guidewire Dev Trials',
    avatar: 'https://placehold.co/56x56/0D0D08/E07B00?text=★',
  },
  {
    id: 4,
    quote: 'Designed and deployed an agro e-commerce platform connecting farmers and consumers with full cart, orders, and inventory management.',
    name: 'Kinsa',
    role: 'Full-Stack Project',
    avatar: 'https://placehold.co/56x56/0D0D08/F5A800?text=K',
  },
  {
    id: 5,
    quote: 'Built immersive interactive game experiences using Core Engine, Unreal Blueprinting and Lua scripting.',
    name: 'Core Games',
    role: 'Game Development',
    avatar: 'https://placehold.co/56x56/0D0D08/FFD166?text=CG',
  },
];

export const Testimonials: React.FC = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section className="testimonials-section overflow-clip-x">
      <motion.div
        className="testimonials-header"
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <ScrollFloat containerClassName="font-display testimonials-title">HIGHLIGHTS</ScrollFloat>
        <p className="font-label testimonials-sub">PROJECTS & ACHIEVEMENTS</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="testimonials-carousel-wrap"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.2}
          breakpoints={{
            560: { slidesPerView: 1.6 },
            900: { slidesPerView: 2.2 },
            1200: { slidesPerView: 2.6 },
          }}
          spaceBetween={24}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            scale: 0.82,
            slideShadows: false,
          }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonials-swiper"
          modules={[EffectCoverflow, Autoplay, Pagination]}
        >
          {highlights.map((r) => (
            <SwiperSlide key={r.id} className="testimonial-slide">
              <div className="testimonial-card">
                <p className="font-body testimonial-quote">"{r.quote}"</p>
                <div className="testimonial-author">
                  <img src={r.avatar} alt={r.name} className="testimonial-avatar" />
                  <div>
                    <p className="font-heading testimonial-name">{r.name}</p>
                    <p className="font-label testimonial-role">{r.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};
