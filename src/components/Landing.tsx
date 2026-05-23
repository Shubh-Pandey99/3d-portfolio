import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHUBH
              <br />
              <span>PANDEY</span>
            </h1>
            <div className="landing-cta-row">
              <a
                href="https://linkedin.com/in/shubhpandey9"
                target="_blank"
                rel="noopener noreferrer"
                className="landing-cta-btn landing-cta-primary"
                data-cursor="disable"
              >
                LinkedIn ↗
              </a>
              <a
                href="#about"
                className="landing-cta-btn landing-cta-secondary"
                data-cursor="disable"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Scroll Down ↓
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>A Senior</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cloud Engineer</div>
              <div className="landing-h2-2">SRE &amp; DevOps</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
