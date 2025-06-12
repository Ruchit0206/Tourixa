import React, { useState } from 'react';
import './Community.css';

const faqs = [
  {
    question: "What is Tourixaa Community?",
    answer: "A platform to connect and share travel experiences.",
  },
  {
    question: "How can I contribute stories?",
    answer: "Soon, you’ll be able to post and share your adventures.",
  },
  {
    question: "When is the beta available?",
    answer: "We launch on July 1, 2025 — stay tuned!",
  },
];

const Community = () => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // For FAQ dropdown open state

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNotify = () => {
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      setSuccessMsg('');
      return;
    }
    setErrorMsg('');
    setSuccessMsg(`Thank you! We'll notify you at ${email}`);
    setEmail('');
    setShowConfetti(true);

    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  // Toggle FAQ dropdown
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Social share example for Twitter
 const shareUrl = "https://tourixa.vercel.app/"; // your website URL
const message = `Excited for the Tourixa Community! Join me in exploring the world 🌍 #TourixaComingSoon ${shareUrl}`;
const encodedMessage = encodeURIComponent(message);

// Twitter
const twitterShare = `https://twitter.com/intent/tweet?text=${encodedMessage}`;

// WhatsApp
const whatsappShare = `https://api.whatsapp.com/send?text=${encodedMessage}`;


  return (
    <section className="community-teaser">
      <div className="teaser-content">
        <h2>🌍 Tourixaa Community-Coming Soon!</h2>
        <p>We’re building a space where travelers connect, share stories, and plan adventures together.</p>

        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email for notification"
          />
          <button onClick={handleNotify}>Notify Me</button>
        </div>

        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        {successMsg && <p className="success-msg">{successMsg}</p>}

        {showConfetti && <div className="confetti"></div>}

        <p className="teaser-subtext">Be the first to join and shape the future of travel with us.</p>

       <div className="social-share">
  <p>Share the excitement!</p>

  <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="social-btn twitter" aria-label="Share on Twitter">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ marginRight: '8px' }}
    >
      <path d="M24 4.557a9.9 9.9 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.942 13.942 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.903 4.903 0 0 1 .964 9.1v.062a4.917 4.917 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.508 14.01-14.01 0-.213-.005-.425-.014-.636A10.01 10.01 0 0 0 24 4.557z"/>
    </svg>
    Twitter
  </a>

<a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="social-btn whatsapp" aria-label="Share on WhatsApp">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="currentColor"
    style={{ marginRight: '8px' }}
  >
    <path d="M16.003 2.004c-7.732 0-13.997 6.265-13.997 13.997 0 2.463.644 4.871 1.873 6.999l-1.978 7.254 7.431-1.957c1.995 1.091 4.241 1.667 6.671 1.667 7.732 0 13.997-6.265 13.997-13.997s-6.265-13.997-13.997-13.997zm0 25.995c-2.073 0-4.087-.543-5.862-1.572l-.42-.243-4.405 1.16 1.18-4.293-.274-.437c-1.139-1.814-1.74-3.91-1.74-6.077 0-6.392 5.203-11.596 11.596-11.596 6.393 0 11.597 5.204 11.597 11.596 0 6.393-5.204 11.596-11.597 11.596zm6.518-8.837c-.353-.177-2.089-1.033-2.412-1.15-.323-.118-.56-.177-.796.177-.237.353-.914 1.15-1.121 1.388-.206.237-.412.266-.765.089-.353-.177-1.491-.548-2.84-1.748-1.05-.94-1.757-2.102-1.963-2.456-.206-.353-.023-.543.154-.719.157-.156.353-.412.53-.618.177-.206.236-.353.353-.589.118-.237.06-.443-.03-.618-.089-.177-.796-1.918-1.09-2.618-.285-.679-.575-.585-.796-.595l-.676-.012c-.236 0-.618.089-.941.443s-1.237 1.21-1.237 2.951 1.266 3.42 1.441 3.655c.177.237 2.497 3.814 6.052 5.346.846.364 1.506.58 2.021.74.85.27 1.624.231 2.236.141.682-.101 2.089-.853 2.386-1.676.295-.823.295-1.527.206-1.676-.088-.148-.324-.236-.676-.412z" />
  </svg>
  WhatsApp
</a>

</div>

<div className="why-join">
          <h3>Why Join Early?</h3>
          <ul>
            <li>Connect with like-minded travelers.</li>
            <li>Get early access to exclusive features.</li>
            <li>Help shape the future of the platform.</li>
          </ul>
        </div>
        {/* FAQ Accordion */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggleFAQ(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') toggleFAQ(idx); }}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              aria-label={`Toggle answer for: ${faq.question}`}
            >
              <div className="faq-question">{faq.question}</div>
              {openIndex === idx && (
                <div className="faq-answer" id={`faq-answer-${idx}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Join Section */}
        
      </div>
    </section>
  );
};

export default Community;
