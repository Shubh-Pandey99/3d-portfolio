import { useState } from "react";
import "./styles/EducationCertifications.css";
import { TbCertificate, TbSchool } from "react-icons/tb";
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
    badge: "https://images.credly.com/size/680x680/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png"
  },
  {
    name: "AWS Certified Generative AI Developer – Professional",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "https://images.credly.com/size/680x680/images/52c6e5ac-9516-4944-a4df-e31b23c9bbf2/blob"
  },
  {
    name: "AWS Certified GenAI Developer – Early Adopter",
    issuer: "Amazon Web Services",
    validity: "2025 – Lifetime",
    badge: "https://images.credly.com/size/680x680/images/9de9a2f7-3259-4720-bb74-095563bb1e49/blob"
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    validity: "2026 – 2029",
    badge: "https://images.credly.com/size/680x680/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png"
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    validity: "2026 – 2029",
    badge: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    validity: "2023 – 2026",
    badge: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
  },
  {
    name: "Google Cloud Certified: Associate Cloud Engineer",
    issuer: "Google Cloud",
    validity: "2023 – 2026",
    badge: "https://images.credly.com/size/680x680/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png"
  },
  {
    name: "Datadog Certified: Datadog Fundamentals",
    issuer: "Datadog",
    validity: "2025 – 2028",
    badge: "https://images.credly.com/size/680x680/images/c953c302-f29b-4f29-a449-f070b800fca0/blob"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    validity: "2022 – Lifetime",
    badge: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
  }
];

const EducationCertifications = () => {
  const [hoveredCert, setHoveredCert] = useState<Certification | null>(null);

  return (
    <div className="edu-cert-section section-container" id="certifications">
      <div className="edu-cert-container">
        <h2>
          Education & <span>Certifications</span>
        </h2>

        <div className="edu-cert-grid">
          {/* Education Side */}
          <div className="edu-box">
            <h3 className="sub-title">
              <TbSchool className="icon-header" /> Education
            </h3>
            <div className="edu-card">
              <div className="edu-header">
                <h4>B.Tech in Computer Science (CSE)</h4>
                <span className="edu-period">2017 – 2021</span>
              </div>
              <h5>Jaypee Institute of Information Technology</h5>
              <p className="edu-cgpa">CGPA: 8.0</p>
              <p className="edu-description">
                Gained a strong core theoretical foundation in Algorithms, Operating Systems, Database Management, and Network Security, laying the groundwork for transitioning into large-scale cloud operations and robust site reliability engineering.
              </p>
            </div>
          </div>

          {/* Certifications Side */}
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
