import { useState } from "react";
import "./styles/EducationCertifications.css";
import { TbCertificate } from "react-icons/tb";
import CertificationsCanvas from "./CertificationsCanvas";

interface Certification {
  name: string;
  issuer: string;
  validity: string;
  badge: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-devops.png"
  },
  {
    name: "AWS Certified Generative AI Developer – Professional",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-genai-pro.png"
  },
  {
    name: "AWS Certified GenAI Developer – Early Adopter",
    issuer: "Amazon Web Services",
    validity: "2025 – Lifetime",
    badge: "/images/certs/aws-genai-early.png"
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    validity: "2026 – 2029",
    badge: "/images/certs/aws-sysops.png"
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    validity: "2026 – 2029",
    badge: "/images/certs/aws-developer.png"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    validity: "2023 – 2026",
    badge: "/images/certs/aws-sa.png"
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-ai.png"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-cp.png"
  },
  {
    name: "Google Cloud Certified: Associate Cloud Engineer",
    issuer: "Google Cloud",
    validity: "2023 – 2026",
    badge: "/images/certs/gcp-ace.png"
  },
  {
    name: "Datadog Certified: Datadog Fundamentals",
    issuer: "Datadog",
    validity: "2025 – 2028",
    badge: "/images/certs/datadog.png"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    validity: "2022 – Lifetime",
    badge: "/images/certs/azure-fundamentals.png"
  }
];

const EducationCertifications = () => {
  const [hoveredCert, setHoveredCert] = useState<Certification | null>(null);

  return (
    <div className="edu-cert-section section-container" id="certifications">
      <div className="edu-cert-container">
        <h2>
          <span>Certifications</span>
        </h2>

        <div className="edu-cert-grid">
          {/* Certifications Side (Now Full Width) */}
          <div className="cert-box">
            <h3 className="sub-title">
              <TbCertificate className="icon-header" /> Certifications ({certifications.length})
            </h3>
            
            {/* Interactive 3D Physics Canvas */}
            <div className="cert-canvas-container">
              <CertificationsCanvas items={certifications} onHoverItem={setHoveredCert} />
            </div>

            {/* Glassmorphic Reactive Details Panel */}
            <div className={`cert-details-card ${hoveredCert ? "has-hover" : ""}`}>
              {hoveredCert ? (
                <div className="cert-details-content">
                  <img
                    src={hoveredCert.badge}
                    alt={hoveredCert.name}
                    className="cert-details-badge"
                  />
                  <div className="cert-details-info">
                    <h4>{hoveredCert.name}</h4>
                    <div className="cert-details-meta">
                      <span className="cert-details-issuer">{hoveredCert.issuer}</span>
                      <span className="cert-details-divider">•</span>
                      <span className="cert-details-validity">{hoveredCert.validity}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="cert-details-placeholder">
                  <span className="sparkle-icon">💡</span>
                  <p>Interactive 3D Badge Playground: Drag, push, and hover over the 3D medals above to inspect credential details.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertifications;
