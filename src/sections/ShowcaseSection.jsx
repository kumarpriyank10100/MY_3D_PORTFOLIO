import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/3.png" alt="portfolio" />
            </div>
            <div className="text-content">
              <h2>
                INTERACTIVE 3D DEVELOPER PORTFOLIO MADE USING REACTJS, THREEJS AND GSAP!
              </h2>
              <p className="text-white-50 md:text-l">
                This project is a futuristic and visually engaging 3D developer portfolio website. 
                Designed to captivate and impress, it combines real-time 3D rendering, smooth animations, 
                and a clean UI to elevate your personal brand.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/2.png"
                  alt="netflix"
                />
              </div>
              <h2>NETFLIX UI CLONE!</h2>
              <p className="text-white-50 md:text-l">
                A responsive and visually appealing Netflix UI Clone built to replicate the iconic streaming platform's homepage.
              Designed with precision to mimic Netflix's intuitive layout, interactive features, and dark theme aesthetics.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/1.png" alt="ola_project" />
              </div>
              <h2>OLA END-TO-END DATA ANALYTICS PROJECT!</h2>
              <p className="text-white-50 md:text-l">
              A business intelligence case study that dives deep into 100,000+ rows of ride-booking 
              data from Ola, designed to model real-world operational problems in the ride-sharing industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
