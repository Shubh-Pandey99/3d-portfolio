import "./styles/Career.css";

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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Operations Engineer</h4>
                <h5>Thales Digital Identity & Security</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Managed fault-tolerant core AWS services (EC2, RDS, S3, VPC). Configured Datadog & Prometheus metrics pipelines, automated log rotation, optimized cloud infrastructure costs, and created Ansible playbooks to cut server deployment times by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Thales Digital Identity & Security</h5>
              </div>
              <h3>2023 – 2025</h3>
            </div>
            <p>
              Developed full-stack secure file transfer solutions maintaining 99.9% availability for 500+ clients. Centralized cross-cluster monitoring with ELK, CloudWatch, and Grafana. Containerized workloads with EKS and automated multi-layer serverless Lambdas using Terraform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Engineer Cloud</h4>
                <h5>REA Group</h5>
              </div>
              <h3>2026 – Present</h3>
            </div>
            <p>
              Leading platform stability and automation initiatives. Troubleshot runtime timeouts in high-throughput build pipelines, engineered self-hosted ephemeral GitHub Actions runner systems on Kubernetes, and established zero-trust OIDC short-lived credential patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
