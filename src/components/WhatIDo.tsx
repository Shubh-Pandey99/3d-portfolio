import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleInteraction = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className={`what-content ${activeIndex === 0 ? "what-content-active" : (activeIndex === 1 ? "what-sibling" : "what-noTouch")}`}
            onClick={() => handleInteraction(0)}
            onMouseEnter={() => setActiveIndex(0)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>PLATFORM & IAC</h3>
              <h4>Description</h4>
              <p>
                Designing and operating resilient, zero-trust cloud platforms and elastic container runtimes. Specializing in high-availability Kubernetes configurations, secure OIDC short-lived credential flows, and scalable infrastructure-as-code automation.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS</div>
                <div className="what-tags">GCP</div>
                <div className="what-tags">Azure</div>
                <div className="what-tags">Terraform</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Helm</div>
                <div className="what-tags">GitOps</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className={`what-content ${activeIndex === 1 ? "what-content-active" : (activeIndex === 0 ? "what-sibling" : "what-noTouch")}`}
            onClick={() => handleInteraction(1)}
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>OBSERVABILITY & AUTOMATION</h3>
              <h4>Description</h4>
              <p>
                Engineering continuous integration systems and cross-cluster observability pipelines. Specializing in automated incident remediation, synthetic endpoint checks, SLI/SLO dashboarding, and rapid deployment velocity.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Datadog</div>
                <div className="what-tags">Prometheus</div>
                <div className="what-tags">Grafana</div>
                <div className="what-tags">CloudWatch</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Bash</div>
                <div className="what-tags">GitLab CI/CD</div>
                <div className="what-tags">Ansible</div>
                <div className="what-tags">Jenkins</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
