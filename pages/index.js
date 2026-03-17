import React, { useState } from 'react';
import styles from '../styles/home.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Error submitting. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>🧬 APEX LABS</h1>
          <p className={styles.tagline}>Research Peptides for Serious Researchers</p>
          <p className={styles.subtitle}>
            Cutting-edge peptide compounds for biomedical research.
            <br />
            <strong>For research purposes only.</strong>
          </p>
        </div>
      </section>

      {/* Featured Peptides */}
      <section className={styles.featured}>
        <h2>Featured Research Compounds</h2>
        <div className={styles.peptideGrid}>
          <div className={styles.peptideCard}>
            <h3>BPC-157</h3>
            <p>10mg — $25</p>
            <p className={styles.cardDesc}>Synthetic peptide from gastric juice. Research areas: tissue repair, angiogenesis, neuroprotection.</p>
          </div>
          <div className={styles.peptideCard}>
            <h3>Tirzepatide</h3>
            <p>20mg-60mg — $50-$90</p>
            <p className={styles.cardDesc}>Dual GIP/GLP-1 receptor agonist. Research focus: metabolic dysfunction models.</p>
          </div>
          <div className={styles.peptideCard}>
            <h3>TB-500</h3>
            <p>10mg — $40</p>
            <p className={styles.cardDesc}>Thymosin Beta-4 analogue. Research areas: cell migration, tissue repair, angiogenesis.</p>
          </div>
          <div className={styles.peptideCard}>
            <h3>NAD+</h3>
            <p>500mg — $35</p>
            <p className={styles.cardDesc}>Nicotinamide adenine dinucleotide. Research focus: mitochondrial function, aging models.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletter}>
        <h2>Weekly Research Digest</h2>
        <p>Get weekly peptide research summaries, mechanisms of action, and new compound spotlights.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
          />
          <button type="submit" disabled={submitted}>
            {submitted ? '✓ Subscribed' : 'Subscribe'}
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {submitted && <p className={styles.success}>Check your email to confirm!</p>}
      </section>

      {/* Discord CTA */}
      <section className={styles.discord}>
        <h2>Join the Community</h2>
        <p>Connect with researchers, discuss compounds, and stay updated on the latest peptide research.</p>
        <a href="https://discord.gg/kYY3p822j3" target="_blank" rel="noopener noreferrer" className={styles.discordBtn}>
          💬 Join APEX LABS Discord
        </a>
      </section>

      {/* Disclaimer */}
      <section className={styles.disclaimer}>
        <p>
          <strong>All products are sold strictly for research purposes only.</strong> Not for human consumption.
          Not intended to diagnose, treat, cure, or prevent any disease. For use by qualified researchers only.
          Keep out of reach of children.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 APEX LABS. All rights reserved.</p>
        <p>For research purposes only.</p>
      </footer>
    </div>
  );
}
