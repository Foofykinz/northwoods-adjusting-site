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

      {/* Submit Content */}
      <section className="page page-submit-standalone">
        <div className="page-content">
          <img className="page-logo" src={LOGO_URL} alt="Northwoods Adjusting" />
          <h1 className="section-title">Submit a Claim</h1>
          
          
          {/* Form Container */}
          <div className="form-container">
            <div style={{textAlign: 'center'}}>
              <button 
                className="show-form-button"
                onClick={() => {
                  const formFrame = document.getElementById('claim-form');
                  const button = document.querySelector('.show-form-button');
                  formFrame.style.display = 'block';
                  button.style.display = 'none';
                }}
              >
                Open Claim Submission Form
              </button>
            </div>
            
            <iframe 
              id="claim-form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeH7WoB9rC5mxEfWfyzQ2V6EXgZxym8v_Kg9Ok90Y4jpIvxCg/viewform?embedded=true"
              width="100%" 
              height="1400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Claim Submission Form"
              style={{border: 'none', borderRadius: '12px', display: 'none'}}
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