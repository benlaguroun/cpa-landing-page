import React from "react";
import "./CallToActionSection.css"; // Import the corresponding CSS file

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Join Us Today!</h2>
        <p>
          Unlock exclusive offers and take advantage of our amazing deals. Don’t
          miss out!
        </p>
        <button className="cta-button">Get Started Now</button>
      </div>
    </section>
  );
};

export default CallToActionSection;
