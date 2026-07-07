import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollFloat from './ui/ScrollFloat';
import './Contact.css';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { ref, isInView } = useScrollAnimation(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("");
        setShowModal(true);
        setForm({ name: '', email: '', subject: '', message: '' }); // Reset form
        setTimeout(() => setShowModal(false), 4000); // Revert back after 4s
      } else {
        setResult("Error: " + (data.message || "Failed to send message."));
      }
    } catch (error) {
      console.error(error);
      setResult("Error: Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <motion.div
          className="contact-wordmark-bg"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          CONTACT
        </motion.div>

        <motion.div
          className="contact-card"
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="contact-image-side"
            initial={{ scale: 1.08 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/assets/picture/contact_fron.png"
              alt="Profile"
              className="contact-photo"
              style={{ transform: 'scale(1.73)' }}
            />
          </motion.div>

          <div className="contact-form-side">
            <ScrollFloat containerClassName="contact-title">
              LET'S TALK
            </ScrollFloat>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label">Full Name*</label>
                  <input type="text" name="name" placeholder="Your Name here" value={form.name} onChange={handleChange} className="contact-input" required />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Email*</label>
                  <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="contact-input" required />
                </div>
              </div>
              <div className="contact-field">
                <label className="contact-label">Subject*</label>
                <input type="text" name="subject" placeholder="Write Subject line" value={form.subject} onChange={handleChange} className="contact-input" required />
              </div>
              <div className="contact-field">
                <label className="contact-label">Message*</label>
                <textarea name="message" placeholder="" value={form.message} onChange={handleChange} className="contact-input contact-textarea" rows={4} required />
              </div>
              <button type="submit" className="contact-submit-btn">Send Message</button>
              {result && <p className="font-body text-center mt-4" style={{ marginTop: '16px' }}>{result}</p>}
            </motion.form>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="success-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="success-modal"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="success-modal-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="font-heading text-ink" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Message Sent!</h3>
              <p className="font-body text-ink-muted">Thank you for reaching out. I'll get back to you soon.</p>
              <button className="success-modal-btn" onClick={() => setShowModal(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
