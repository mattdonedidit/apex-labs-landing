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
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>APEX LABS</div>
          <a href="https://discord.gg/kYY3p822j3" target="_blank" rel="noopener noreferrer" className={styles.navDiscord}>
            Join Community
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Research-Grade Peptides</h1>
          <p className={styles.heroSubtitle}>Premium peptide compounds for biomedical research.</p>
          <p className={styles.disclaimer}>For research purposes only. Not for human consumption.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.benefits}>
        <h2>Why APEX LABS</h2>
        <div className={styles.benefitGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>✓</div>
            <h3>High Purity</h3>
            <p>Premium quality compounds tested for research applications</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>✓</div>
            <h3>Fast Shipping</h3>
            <p>Discreet packaging with flat $12 rate on all orders</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>✓</div>
            <h3>Expert Support</h3>
            <p>Active research community with knowledge sharing</p>
          </div>
        </div>
      </section>

      {/* Featured Peptides */}
      <section className={styles.products}>
        <h2>Featured Research Compounds</h2>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <h3>BPC-157</h3>
            <p className={styles.pricing}>$25 (10mg)</p>
            <p className={styles.description}>Body Protection Compound. Research areas: tissue repair, angiogenesis, neuroprotection.</p>
          </div>
          <div className={styles.productCard}>
            <h3>Tirzepatide</h3>
            <p className={styles.pricing}>$50–$90 (20–60mg)</p>
            <p className={styles.description}>GIP/GLP-1 receptor agonist. Focus: metabolic research and cellular studies.</p>
          </div>
          <div className={styles.productCard}>
            <h3>TB-500</h3>
            <p className={styles.pricing}>$40 (10mg)</p>
            <p className={styles.description}>Thymosin Beta-4 analogue. Research: cell migration, angiogenesis, tissue modeling.</p>
          </div>
          <div className={styles.productCard}>
            <h3>NAD+</h3>
            <p className={styles.pricing}>$35 (500mg)</p>
            <p className={styles.description}>Nicotinamide dinucleotide. Research focus: mitochondrial function and aging models.</p>
          </div>
          <div className={styles.productCard}>
            <h3>Sermorelin</h3>
            <p className={styles.pricing}>$30 (10mg)</p>
            <p className={styles.description}>Growth hormone-releasing hormone analogue for research applications.</p>
          </div>
          <div className={styles.productCard}>
            <h3>PT-141</h3>
            <p className={styles.pricing}>$25 (10mg)</p>
            <p className={styles.description}>Melanotan II analogue. Research areas: neuroendocrine function studies.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Weekly Research Updates</h2>
          <p>Get weekly peptide research summaries, mechanism breakdowns, and compound spotlights delivered to your inbox.</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
            />
            <button type="submit" disabled={submitted}>
              {submitted ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
          {submitted && <p className={styles.success}>Check your email to confirm subscription.</p>}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Join Our Research Community</h2>
        <p>Connect with other researchers, discuss compounds, and stay updated on new releases.</p>
        <a href="https://discord.gg/kYY3p822j3" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          Visit APEX LABS Discord
        </a>
      </section>

      {/* Compliance */}
      <section className={styles.compliance}>
        <h2>Important Information</h2>
        <div className={styles.complianceBox}>
          <p>
            <strong>All products are sold strictly for research purposes only.</strong>
          </p>
          <p>
            Not for human consumption. Not intended to diagnose, treat, cure, or prevent any disease. For use by qualified researchers and institutions only. Keep all compounds out of reach of children and animals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2026 APEX LABS Research</p>
          <p>For research purposes only</p>
        </div>
      </footer>
    </div>
  );
}
