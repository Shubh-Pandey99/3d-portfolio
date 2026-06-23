import "../../styles/TechStack.css";

const skillGroups = [
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS",        icon: "/images/aws.png" },
      { name: "GCP",        icon: "/images/gcp.png" },
      { name: "Azure",      icon: "/images/azure.png" },
    ],
  },
  {
    category: "Containers & IaC",
    skills: [
      { name: "Kubernetes", icon: "/images/kubernetes.png" },
      { name: "Docker",     icon: "/images/docker.png" },
      { name: "Terraform",  icon: "/images/terraform.png" },
      { name: "Helm",       icon: "/images/helm.png" },
      { name: "Ansible",    icon: "/images/ansible.png" },
    ],
  },
  {
    category: "Observability",
    skills: [
      { name: "Prometheus", icon: "/images/prometheus.png" },
      { name: "Grafana",    icon: "/images/grafana.png" },
      { name: "Datadog",    icon: "/images/datadog.png" },
      { name: "CloudWatch", icon: "/images/aws.png" },
    ],
  },
  {
    category: "Languages & Dev",
    skills: [
      { name: "Python",     icon: "/images/python.png" },
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "Bash",       icon: "/images/bash.png" },
      { name: "FastAPI",    icon: "/images/fastapi.png" },
    ],
  },
  {
    category: "CI/CD & Source",
    skills: [
      { name: "GitLab CI",  icon: "/images/gitlab.png" },
      { name: "Jenkins",    icon: "/images/jenkins.png" },
      { name: "Linux",      icon: "/images/linux.png" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="skills">
      <div className="techstack-container">
        <h2 className="techstack-heading">
          TECH <span>ARSENAL</span>
        </h2>
        <p className="techstack-sub">
          The stack I use daily to build resilient, observable, zero-trust cloud systems.
        </p>
        <div className="techstack-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h4 className="skill-group-label">{group.category}</h4>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <div className="skill-chip" key={skill.name}>
                    <div className="skill-chip-icon-wrap">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-chip-icon"
                      />
                    </div>
                    <span className="skill-chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
