import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 100;
    setScrolled(isScrolled);
    if (!isScrolled && menuOpen) {
      setMenuOpen(false);
    }
  });

  return (
    <>
      <div className="navbar-container">
        <motion.nav
          className="navbar"
          initial={{ width: '100%', marginTop: 0, borderRadius: '0px' }}
          animate={{
            width: scrolled ? '70%' : '100%',
            marginTop: scrolled ? '24px' : '0px',
            borderRadius: scrolled ? '999px' : '0px',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'transparent',
            color: scrolled ? '#15141A' : '#FFFFFF',
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
            border: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
            padding: scrolled ? '16px 32px' : '24px 48px'
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="nav-logo font-display">DM</span>

          <AnimatePresence mode="wait">
            {scrolled ? (
              <motion.div
                key="hamburger"
                className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </motion.div>
            ) : (
              <motion.div
                key="links"
                className="nav-links font-label"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#skills">SKILLS</a>
                <a href="#contact">CONTACT</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="fullscreen-menu-links font-display">
              <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
