import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "../sections/About";
import Career from "../sections/Career";
import Contact from "../sections/Contact";
import Cursor from "../ui/Cursor";
import Landing from "../sections/Landing";
import Navbar from "./Navbar";
import SocialIcons from "../ui/SocialIcons";
import WhatIDo from "../sections/WhatIDo";
import Work from "../sections/Work";
import EducationCertifications from "../sections/EducationCertifications";
import Blogs from "../sections/Blogs";
import setSplitText from "../../utils/splitText";

const TechStack = lazy(() => import("../sections/TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <EducationCertifications />
            <Blogs />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
