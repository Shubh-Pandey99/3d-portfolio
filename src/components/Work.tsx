import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const box = document.querySelectorAll(".work-box");
    const workFlex = document.querySelector(".work-flex");
    const workContainer = document.querySelector(".work-container");
    if (!box.length || !workFlex || !workContainer) return;

    const getTranslateX = () => {
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = workFlex.parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [
    {
      id: "01",
      title: "Email Remediation Automation",
      category: "Self-healing Cloud Operations",
      description: "Automated AWS email pipeline with intelligent self-healing triggers, reducing manual intervention by 80% across production workloads.",
      tools: ["AWS Step Functions", "Lambda (Python)", "EventBridge", "DynamoDB", "SNS"],
      gradient: "linear-gradient(135deg, #ff6b2b22 0%, #ff920022 50%, #0a080700 100%)",
      accent: "#ff6b2b",
      icon: "⚙️",
      link: "https://github.com/Shubh-Pandey99"
    },
    {
      id: "02",
      title: "Scribe – AI Meeting Assistant",
      category: "AI & Browser Extension",
      description: "Chrome extension that transcribes meetings in real-time with Whisper STT, uses Gemini Flash 2.0 for intelligent summaries, and stores structured notes in MongoDB.",
      tools: ["Chrome Extension API", "Whisper STT", "Gemini Flash 2.0", "MongoDB", "Flask"],
      gradient: "linear-gradient(135deg, #4f46e522 0%, #7c3aed22 50%, #0a080700 100%)",
      accent: "#7c3aed",
      icon: "🎙️",
      link: "https://github.com/Shubh-Pandey99"
    },
    {
      id: "03",
      title: "TeacherPro Attendance App",
      category: "SaaS Dashboard & Analytics",
      description: "Full-stack SaaS application for educational institutions with real-time attendance tracking, analytics dashboards, and Firebase-backed authentication.",
      tools: ["React (Vite)", "Firebase Auth", "Firestore", "Node.js", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, #05966922 0%, #0d947922 50%, #0a080700 100%)",
      accent: "#059669",
      icon: "📊",
      link: "https://github.com/Shubh-Pandey99"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Tools and features</h4>
                <div className="work-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="work-tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="work-visual">
                <div className="work-visual-card" style={{ background: project.gradient, borderColor: project.accent + "33" }}>
                  <div className="work-visual-icon" style={{ color: project.accent }}>{project.icon}</div>
                  <div className="work-visual-lines">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="work-visual-line" style={{ width: `${60 + i * 8}%`, backgroundColor: project.accent + "33" }}></div>
                    ))}
                  </div>
                  <div className="work-visual-glow" style={{ background: project.accent + "15" }}></div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-link" data-cursor="disable" style={{ color: project.accent, borderColor: project.accent + "66" }}>
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
