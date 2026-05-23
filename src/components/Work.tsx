import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

    let timeline = gsap.timeline({
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
      title: "Scribe - AI Meeting Assistant",
      category: "AI & Browser Extension",
      tools: "Chrome Extension API, Whisper STT, Gemini Flash 2.0, MongoDB, Flask",
      image: "/images/placeholder.webp"
    },
    {
      title: "TeacherPro Attendance App",
      category: "SaaS Dashboard & Analytics",
      tools: "React (Vite), Firebase Auth/Firestore, Node.js, Tailwind CSS",
      image: "/images/placeholder.webp"
    },
    {
      title: "Email Remediation Automation",
      category: "Self-healing Cloud Operations",
      tools: "AWS Step Functions, Lambda (Python), EventBridge, DynamoDB, SNS",
      image: "/images/placeholder.webp"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
