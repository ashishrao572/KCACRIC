import React, { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import Overview from "./Overview";
import PortfolioSection from "./PortfolioSection";
import IndustriesWeServe from "./IndustrySection";
import WhyUs from "./WhyUs";
import WhatWeDo from "./WhatWeDo";
import "./Home.css";

// Section Components
const ContactFormSection = () => (
  <div className="w-full md:w-2/4 h-auto md:h-1/2 px-4 py-8 flex justify-center items-center">
    <ContactForm />
  </div>
);

const OverviewSection = () => <Overview/>;

const WhatSection = () => ( <div className="pt-16 justify-center items-center">
    <WhatWeDo />
  </div>
);

const WhySection = () => ( <div className="pt-16 justify-center items-center">
    <WhyUs/>
  </div>
);

const IndustrySection = () => (
  <div className="w-4/5 min-h-screen flex flex-col pt-16 justify-center items-center">
    <IndustriesWeServe />
  </div>
);

const PortfolioSectionLayout = () => (
  <div className="w-full flex flex-col items-center justify-center">
    {/* Title - Responsive */}
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-black-600 mb-8">
      Our Services
    </h2>
    <div className="w-[200px] h-1 mx-auto bg-gradient-to-r from-blue-700 via-white via-cyan-300 to-blue-900 rounded-full mb-6"/>
    {/* Portfolio Grid */}
    <div className="w-full md:w-8/10">
      <PortfolioSection />
    </div>
  </div>
);


// Map of component wrappers
const componentMap = {
  OverviewSection,
  WhatSection,
  WhySection,
  IndustrySection,
  PortfolioSectionLayout,
  ContactFormSection,
};

// Section definitions
const sections = [
  { id: "overview", label: "Overview", component: "OverviewSection", color: "text-white" },
  { id: "WhatWe", label: "What we do", component: "WhatSection", color: "text-white" },
  { id: "WhyUs", label: "Why Us", component: "WhySection", color: "text-white" },
  { id: "Industry", label: "Industries", component: "IndustrySection", color: "text-gray-800" },
  { id: "Services", label: "Services", component: "PortfolioSectionLayout", color: "text-gray-900" },
  { id: "contact", label: "Contact", component: "ContactFormSection", color: "text-white" },
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export default function Home() {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Scroll to specific section
  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  // Observe which section is in view
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div className="relative w-full overflow-hidden">
      <main
        className={`overflow-y-scroll scroll-smooth no-scrollbar ${
          isMobile ? "" : "snap-y snap-mandatory"
        }`}
        style={{
          paddingTop: "0px",
          marginTop: "0px",
          height: "100vh",
        }}
      >
        {sections.map(({ id, component, color }, index) => {
          const SectionComponent = componentMap[component];
          return (
            <section
              key={id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className={`${
                isMobile ? "" : "snap-start"
              } flex items-center justify-center text-4xl font-bold transition-opacity duration-500 ease-in-out ${color}`}
              style={{
                minHeight: isMobile ? "auto" : "100vh",
                padding: isMobile ? "2rem 0rem" : "0",
              }}
            >
              {SectionComponent && <SectionComponent />}
            </section>
          );
        })}
      </main>

      {/* Vertical Scroll Dots - Hidden on Mobile */}
      {!isMobile && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 pr-5 z-50">
          {sections.map(({ id, label }, index) => (
            <div className="relative group" key={id}>
              <button
                aria-label={`Scroll to ${label} section`}
                tabIndex="0"
                onClick={() => scrollToSection(index)}
                className="w-4 h-4 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    activeIndex === index ? "#7ac0e8" : "#9cdeff",
                  border:
                    activeIndex === index
                      ? "2px solid #3b82f6"
                      : "2px solid transparent",
                  opacity: activeIndex === index ? 1 : 0.5,
                }}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition bg-white text-gray-800 text-xs px-2 py-1 rounded shadow">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
