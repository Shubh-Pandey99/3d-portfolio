import "./styles/EducationCertifications.css";

interface Certification {
  name: string;
  issuer: string;
  validity: string;
  badge: string;
  verifyUrl: string;
}

interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-devops.png",
    verifyUrl: "https://www.credly.com/badges/1b93a0ed-8a58-46d8-9489-e23bc97a3645/public_url"
  },
  {
    name: "AWS Certified Generative AI Developer – Professional",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-genai-pro.png",
    verifyUrl: "https://www.credly.com/badges/bb57e8ba-d7a9-4043-b738-4261fc40c32c/public_url"
  },
  {
    name: "AWS Certified GenAI Developer – Early Adopter",
    issuer: "Amazon Web Services",
    validity: "2025 – Lifetime",
    badge: "/images/certs/aws-genai-early.png",
    verifyUrl: "https://www.credly.com/badges/128a45fa-ae46-4026-b76c-321391c524b5/public_url"
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    validity: "2026 – 2029",
    badge: "/images/certs/aws-sysops.png",
    verifyUrl: "https://www.credly.com/badges/4c2a0cb4-2594-416a-9a4d-f820f01858f1/public_url"
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    validity: "2026 – 2029",
    badge: "/images/certs/aws-developer.png",
    verifyUrl: "https://www.credly.com/badges/844595a4-f38a-4447-b191-8a7a86c9b15a/public_url"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    validity: "2023 – 2026",
    badge: "/images/certs/aws-sa.png",
    verifyUrl: "https://www.credly.com/badges/df778dc8-7450-4016-bcc1-f7c8b7315304/public_url"
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-ai.png",
    verifyUrl: "https://www.credly.com/badges/5218e26e-9f2d-4dc2-8c3f-40ffd021661d/public_url"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025 – 2028",
    badge: "/images/certs/aws-cp.png",
    verifyUrl: "https://www.credly.com/badges/677da2d9-3f70-4b98-b4c7-b3244c66c8de/public_url"
  },
  {
    name: "Google Cloud Certified: Associate Cloud Engineer",
    issuer: "Google Cloud",
    validity: "2023 – 2026",
    badge: "/images/certs/gcp-ace.png",
    verifyUrl: "https://www.credly.com/badges/beb65be5-586a-48c1-909a-b10e51dfe61f/public_url"
  },
  {
    name: "Datadog Certified: Datadog Fundamentals",
    issuer: "Datadog",
    validity: "2025 – 2028",
    badge: "/images/certs/datadog.png",
    verifyUrl: "https://www.credly.com/badges/8c7e79d3-5a4a-4f2a-9b1c-d1e5f6a7b8c9/public_url"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    validity: "2022 – Lifetime",
    badge: "/images/certs/azure-fundamentals.png",
    verifyUrl: "https://www.credly.com/badges/a2b3c4d5-e6f7-8901-abcd-ef1234567890/public_url"
  }
];

const education: Education[] = [
  {
    degree: "B.Tech Computer Science",
    institution: "Jaypee Institute of Information Technology",
    cgpa: "8.0",
    period: "2017 – 2021"
  }
];

const EducationCertifications = () => {
  return (
    <div className="edu-cert-section" id="certifications">
      <div className="edu-cert-container">

        {/* Education Section */}
        <div className="edu-section">
          <h2 className="section-heading">
            Educational <span>Foundation</span>
          </h2>
          <p className="section-subheading">
            Academic background that built the technical core for my DevOps career.
          </p>
          {education.map((edu, index) => (
            <div className="edu-card-new" key={index}>
              <div className="edu-card-glow"></div>
              <div className="edu-card-inner">
                <div className="edu-icon-wrap">
                  <span className="edu-icon">🎓</span>
                </div>
                <div className="edu-content">
                  <h3>{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-meta">
                    <span className="edu-tag">📅 {edu.period}</span>
                    <span className="edu-tag edu-tag-accent">⭐ GPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="cert-section">
          <h2 className="section-heading">
            Certified <span>Credentials</span>
          </h2>
          <p className="section-subheading">
            Industry-validated expertise across prominent cloud ecosystems and DevOps frameworks.
          </p>
          <div className="cert-card-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card-new" key={index}>
                <div className="cert-card-top">
                  <div className="cert-badge-wrap">
                    <div className="cert-badge-glow"></div>
                    <div className="cert-badge-img-wrap">
                      <img
                        src={cert.badge}
                        alt={cert.name}
                        className="cert-badge-img"
                      />
                    </div>
                  </div>
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-card-bottom">
                  <span className="cert-validity">📅 {cert.validity}</span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-btn"
                  >
                    Verify ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCertifications;
