import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-badge">Currently @ REA Group — Senior Engineer Cloud</div>
        <p className="para">
          SRE & DevOps specialist building resilient, zero-trust cloud platforms across AWS, GCP, and Azure. Expert in Kubernetes, Terraform, CI/CD orchestration, and turning SLA/SLO requirements into self-healing automated systems.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-num">5+</span>
            <span className="about-stat-label">Years Cloud Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">3</span>
            <span className="about-stat-label">Cloud Platforms</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">11</span>
            <span className="about-stat-label">Certifications</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
