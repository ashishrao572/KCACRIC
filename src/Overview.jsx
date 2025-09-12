import React, { useState, useEffect } from "react";
import "./Overview.css";

const slides = [
  {
    image: "/resrc/CAD_CAM_Development.png",
    text: "CAD/CAM Software Development",
  },
  {
    image: "/resrc/SoftwareDevelopment.png",
    text: "CAE Software Development",
  },
  {
    image: "/resrc/CAE_Automation.png",
    text: "CAE Process Automation",
  },
  {
    image: "/resrc/Innovative.png",
    text: "Innovative Solutions",
  },
];

// Custom hook to detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

function OverviewTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bi-slider-container">
      {!isMobile ? (
        // Desktop: Sliding images
        <div
          className="image-slider"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide-image" key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        // Mobile: Static image
        <div className="static-image">
          <img src="/resrc/CAE_Automation.png" alt="CAEAutomation" />
        </div>
      )}

      {/* Text always changes */}
      <div className="text-slider">
        {slides.map((slide, index) => (
          <div
            className={`slide-text ${index === activeIndex ? "active" : ""}`}
            key={index}
          >
            {slide.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewTabs;
