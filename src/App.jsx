import { useState, useEffect } from 'react';
import './App.css';

// Real images
const LOGO_URL = '/images/logo.png';
const MAP_URL = '/images/map.svg';
const COLLAGE_URL = '/images/collage.png';
const BADGE_URL = '/images/badge.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'coverage', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-logo">Northwoods Adjusting</div>
          <div className="nav-links">
            {['home', 'about', 'services', 'coverage', 'process', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="page page-cover">
        <div className="cover-content">
          <img className="logo" src={LOGO_URL} alt="Northwoods Adjusting LLC" />
          <h1 className="tagline">We Don't Meet the Bar, We Set It.</h1>
          <p className="cover-subtitle">Where Precision, Integrity, and Results Define Every Claim</p>
        </div>
        <a href="#contact" className="cta-button">
  Submit a Claim
</a>
        
        <div className="scroll-hint">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="page page-about">
        <div className="page-content">
          <h2 className="section-title">Who We Are</h2>
          <p className="about-text">
            Northwoods Adjusting LLC is a specialized vehicle appraisal and inspection firm focused on non-standard auto claims. We provide expert evaluations for losses involving Semi-truck &amp; trailer, heavy equipment, specialty vehicles, recreational vehicles, marine vessels and classic cars—claims that demand technical knowledge beyond traditional auto adjusting. With 12 years of combined industry experience and more than 25,000 claims successfully closed, our team brings proven expertise to every assignment. We understand the importance of accuracy, consistency, and defensible documentation, and we deliver clear, reliable assessments that stand up to carrier, regulatory, and legal scrutiny. As a small, boutique firm, Northwoods Adjusting offers a level of service and quality that larger operations can't match. Every claim receives hands-on attention, prompt communication, and a commitment to doing the job right the first time. We don't rely on volume-driven processes—our focus is precision, accountability, and results. When claims fall outside the norm, Northwoods Adjusting sets the bar for professionalism, service, and quality.
          </p>
          <img className="vehicle-collage" src={COLLAGE_URL} alt="Vehicle Types" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="page page-services">
        <div className="page-content">
          <div className="services-grid">
            <div className="service-card">
              <h3>Our Services</h3>
              <div className="underline"></div>
              <ul className="service-list">
                <li><span className="bullet bullet-gold"></span><span>Full Service Physical Damage Inspections / Estimating</span></li>
                <li><span className="bullet bullet-gold"></span><span>Desk Reviews</span></li>
                <li><span className="bullet bullet-gold"></span><span>Subrogation Reviews</span></li>
                <li><span className="bullet bullet-gold"></span><span>Appraisal Clause Disputes</span></li>
                <li><span className="bullet bullet-gold"></span><span>Diminished Value Claims</span></li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Units We Handle</h3>
              <div className="underline"></div>
              <ul className="service-list">
                <li><span className="bullet bullet-forest"></span><span>Over the Road Tractor &amp; Trailer (O.R.T.T)</span></li>
                <li><span className="bullet bullet-forest"></span><span>Heavy Equipment</span></li>
                <li><span className="bullet bullet-forest"></span><span>Recreational Vehicles</span></li>
                <li><span className="bullet bullet-forest"></span><span>Personal Watercraft / Marine</span></li>
                <li><span className="bullet bullet-forest"></span><span>Specialty Vehicles</span></li>
                <li><span className="bullet bullet-forest"></span><span>Classic Cars</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="page page-coverage">
        <div className="page-content">
          <h2 className="section-title">Nationwide Network</h2>
          
          <p className="coverage-intro">
            Northwoods Adjusting LLC provides scalable nationwide claims coverage with hands-on attention through a rigorously vetted network of senior-level adjusters and appraisers trained specifically in non-standard auto claims. Our centralized quality control and oversight model ensures accuracy, responsiveness, and alignment with each carrier's guidelines. This hands-on approach delivers consistent quality, clear communication, and dependable outcomes—allowing insurers to confidently handle specialized claims beyond their local footprint without sacrificing service or control.
          </p>

          <div className="quote-block">
            <p>"We don't just send any appraiser for the job, we send the RIGHT appraiser for the specific claim"</p>
          </div>

          <div className="map-visual">
            <h3>Nationwide Coverage</h3>
            <img className="us-map" src={MAP_URL} alt="US Coverage Map" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="page page-process">
        <div className="page-content">
          <h2 className="section-title">Our Process &amp; Expectations</h2>

          <div className="timeline">
            <div className="timeline-step">
              <div className="step-number">1</div>
              <h4 className="step-title">Claim Confirmation</h4>
              <p className="step-desc">Receipt confirmed within 4 hours</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">2</div>
              <h4 className="step-title">Owner Contact</h4>
              <p className="step-desc">Vehicle owner contacted within 24 hours</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">3</div>
              <h4 className="step-title">Status Updates</h4>
              <p className="step-desc">Updates every 24 hours until scheduled</p>
            </div>
          </div>

          <div className="package-section">
            <h3 className="package-title">Completed Appraisal Package Includes:</h3>
            <div className="package-grid">
              {[
                'Comprehensive photo set of unit and damages',
                'Copies of pertinent claim documents',
                'Estimate of record',
                'Detailed appraisal report of findings',
                'Total loss valuation (if needed)',
                'Salvage bids (if needed)',
                'In-depth claim review',
                'Supplement Handling (if needed)'
              ].map((item, index) => (
                <div key={index} className="package-item">
                  <div className="check">
                    <svg viewBox="0 0 24 24" fill="none">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="guarantee-banner">
            <img className="guarantee-badge" src={BADGE_URL} alt="Satisfaction Guaranteed" />
            <h3>✓ Satisfaction Guaranteed</h3>
            <p>If, for any reason, you are unhappy with our work product, we will fix it for free or you don't owe us for the service.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="page page-submit">
        <div className="page-content">
  <h2 className="section-title">Submit a Claim</h2>
  
  <p className="submit-intro">Use our secure form to submit your claim with all necessary documentation.</p>

  {/* Form Container - Drop JotForm/Cognito embed code here */}
  <div className="form-container">
    <div className="form-placeholder">
      <h3>Secure Claim Submission Form</h3>
      <p>Form embed code goes here (JotForm or Cognito Forms)</p>
      <p className="form-note">Replace this placeholder by pasting your form embed code in App.jsx</p>
    </div>
  </div>

  <div className="divider"></div>

  {/* Alternative Email Method */}
  <h3 className="section-subtitle">Prefer Email?</h3>
  <p className="submit-intro">You can also send claims directly via email:</p>

  <div className="email-section">
    <div className="email-address">
      <a href="mailto:EADJUSTINGLLC@gmail.com">EADJUSTINGLLC@gmail.com</a>
    </div>
    
    <div className="email-format">
      <strong>Subject Line:</strong>
      <p>CLAIM NUMBER</p>
    </div>

    <div className="email-format">
      <strong>Body of Email — Include:</strong>
    </div>

    <ul className="requirements-list">
      <li>Type of service you are requesting</li>
      <li>Insured/claimant information</li>
      <li>Facts of loss</li>
      <li>Date of loss</li>
      <li>Vehicle location</li>
      <li>Shop of choice (if applicable)</li>
      <li>Deductible (if applicable)</li>
      <li>Any additional documentation or pertinent claim information</li>
    </ul>
  </div>

          
        </div>
      </section>
      {/* Footer */}
          <div className="footer">
            <div className="footer-content">
              <img className="footer-logo" src={LOGO_URL} alt="Northwoods Adjusting LLC" />
              <p className="footer-tagline">WE DON'T MEET THE BAR, WE SET IT.</p>
              <div className="contact-info">
                <p className="name">Koby Hearn, Owner</p>
                <p><a href="tel:859-221-2893">859-221-2893</a></p>
                <p><a href="mailto:Eadjustingllc@gmail.com">Eadjustingllc@gmail.com</a></p>
              </div>
            </div>
          </div>
    </>
  );
}

export default App;
