import { useState } from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = '/images/logo.png';

function SubmitClaim() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="submit-page-wrapper">
      {/* Simple Nav */}
      <nav className="nav">
        <div className="nav-content">
          <Link to="/" className="nav-logo">Northwoods Adjusting</Link>
          
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>← Back to Home</Link>
          </div>
        </div>
      </nav>
      <section className="page page-cover-submit">
  <div className="cover-content">
    <img className="logo" src={LOGO_URL} alt="Northwoods Adjusting LLC" />
    <h1 className="tagline">Submit Your Claim</h1>
  </div>
  
  <div className="scroll-hint">
    <span>Scroll to form</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
    </svg>
  </div>
</section>



      {/* Submit Content */}
      <section className="page page-submit-standalone">
        <div className="page-content">

          
          
{/* Form Container */}
<div className="form-container">
  <iframe 
    src="https://forms.fillout.com/t/e9TS6iMxJRus"
    width="100%" 
    height="1200"
    frameBorder="0"
    title="Claim Submission Form"
    style={{border: 'none', borderRadius: '12px'}}
  >
    Loading…
  </iframe>
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
      <footer className="footer">
        <div className="footer-content">
          <img className="footer-logo" src={LOGO_URL} alt="Northwoods Adjusting LLC" />
          <p className="footer-tagline">WE DON'T MEET THE BAR, WE SET IT.</p>
          <div className="contact-info">
            <p className="name">Koby Hearn, Owner</p>
            <p><a href="tel:859-221-2893">859-221-2893</a></p>
            <p><a href="mailto:Eadjustingllc@gmail.com">Eadjustingllc@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SubmitClaim;