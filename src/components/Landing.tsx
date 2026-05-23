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
          </div>
          <div className="landing-info">
            <h3>A Senior</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cloud Engineer</div>
              <div className="landing-h2-2">SRE & DevOps</div>
            </h2>
            <h2>
              <div className="landing-h2-info">SRE & DevOps</div>
              <div className="landing-h2-info-1">Cloud Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
