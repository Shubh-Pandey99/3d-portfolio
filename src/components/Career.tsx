import "./styles/Career.css";

const experiences = [
  {
    title: "Senior Engineer Cloud",
    company: "REA Group",
    period: "2026 – Present",
    bullets: [
      "Improved CI/CD reliability by fixing AWS instance-profile credential timeout/retry behavior in Shipper, addressing a failure mode affecting roughly 29% of builds in high-volume pipelines.",
      "Designed self-hosted GitHub Actions runner architecture on Kubernetes with ephemeral auto-scaling runners, network-zone segmentation, and secure container-mode execution for enterprise platform use.",
      "Implemented zero-trust cloud access patterns for CI by removing pod-level AWS permissions and adopting OIDC-based short-lived credentials for job-level access.",
      "Drove cost/performance optimization of runner infrastructure through ARM64/Graviton-first sizing strategy and standardized runner images.",
      "Enhanced PaaS observability and platform health with cross-cluster monitoring, synthetic checks, and SLI-oriented validation for custom-resource lifecycle and connectivity paths."
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Thales Digital Identity & Security",
    period: "2023 – 2025",
    bullets: [
      "Developed full-stack solutions for the Thales Secure File Transfer (TSFT) platform and enforced SLIs, SLOs, and error budgets to maintain 99.9% availability across 500+ global enterprise customers.",
      "Built robust frontend portals using Vue.js and Typescript, hosted on S3 and delivered via CloudFront, improving UI performance by 30%.",
      "Centralized and tuned observability with CloudWatch, OpenSearch/ELK, and Grafana, building unified dashboards for metrics, logs, and traces; integrated EventBridge + Step Functions + PagerDuty.",
      "Containerized IBM Sterling Connect: Direct with Docker, deployed on AWS EKS, enabling secure, scalable file transfers and cutting infra costs by 20%.",
      "Provisioned the complete infrastructure using Terraform, deploying AWS resources including Lambda, API Gateway, Step Functions, Cognito, DynamoDB, Transfer Family etc.",
      "Designed backend services using FastAPI on AWS Lambda in Python, ensuring scalable and serverless architecture."
    ]
  },
  {
    title: "Cloud Operations Engineer",
    company: "Thales Digital Identity & Security",
    period: "2021 – 2023",
    bullets: [
      "Managed AWS services (EC2, RDS, S3, VPC) specializing on fault tolerance and auto-scaling, reducing cloud downtime by 28%.",
      "Configured Datadog and Prometheus monitoring pipelines, defining SLIs and automating alerts/log rotation, improving observability by 15%.",
      "Optimized cloud infrastructure costs with autoscaling, right-sizing, and serverless adoption while maintaining SLAs.",
      "Created Ansible playbooks for system configuration and dependency management, cutting deployment time by 40% across 10+ servers.",
      "Participated in on-call rotations, handling escalations, network diagnostics, and RCAs for production issues."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Thales Digital Identity & Security",
    period: "Feb – Aug 2021",
    bullets: [
      "Engineered a secure Apple backend payload encryption system utilizing the Java Cryptography Architecture (JCA), enhancing transaction security and minimizing data breaches for Visa transactions.",
      "Executed 50+ functional test cases for the platform's back testing framework, enhancing test coverage by 25% and identifying critical bugs pre-deployment."
    ]
  }
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp, idx) => (
            <div className="career-info-box" key={idx}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <ul className="career-bullets">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
