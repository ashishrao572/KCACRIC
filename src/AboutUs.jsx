import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us-container">
      {/* Intro Section */}
      <section className="intro">
        <h1>About VSA</h1>
        <p>
          We’re at the nexus of CAE development, Customization, and Artificial Intelligence. We help enable what’s next.
        </p>
      </section>

      {/* Vision Section */}
      <div className="split-section responsive-row">
        <div className="split-text" ref={ref}>
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              To redefine industry standards through innovation, enabling businesses and individuals to unlock their full potential with cutting-edge technology.
            </p>
          </div>
        </div>
        <div className="split-image">
          <img src="/resrc/OurVision.png" alt="Our Vision" />
        </div>
      </div>

      {/* Mission Section - reversed */}
      <div className="split-section responsive-row">
        <div className="split-image">
          <img src="/resrc/OurMission.png" alt="Our Mission" />
        </div>
        <div className="split-text" ref={ref}>
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              We strive to deliver excellence by developing state-of-the-art solutions, ensuring sustainability, efficiency, and growth across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="company-section">
        <h2>Company</h2>
        <p>
          VSA is a pioneering Engineering IT services & technology company, specializing in end-to-end digital transformation 
          for design, engineering, and manufacturing workflows. Our team brings decades of expertise, developing advanced automation, 
          customization, and optimization solutions to enhance productivity across industries.
        </p>
      </section>

      {/* Industry Focus */}
      <div className="split-section responsive-row">
        <div className="split-text" ref={ref}>
          <div className="text-content">
            <h2>Industry Focus</h2>
            <p>At VSA, we provide cutting-edge multidisciplinary services, supporting:</p>
            <ul>
              <li>✔ Automotive</li>
              <li>✔ Aerospace</li>
              <li>✔ Heavy Engineering</li>
              <li>✔ AEC (Architectural Engineering Civil)</li>
              <li>✔ Component Suppliers</li>
            </ul>
          </div>
        </div>
        <div className="split-image">
          <img src="/resrc/IndustryFocus.png" alt="Industry Focus" />
        </div>
      </div>

      {/* Engagement Model */}
      <div className="split-section responsive-row">
        <div className="split-image">
          <img src="/resrc/EngagementModel.png" alt="Engagement Model" />
        </div>
        <div className="split-text" ref={ref}>
          <div className={`text-content ${isVisible ? "animate" : ""}`}>
            <h2>Engagement Model</h2>
            <p>Our engagement model is highly flexible & scalable, designed to adapt to client needs:</p>
            <ul>
              <li>✅ Offsite / Onsite / Hybrid</li>
              <li>✅ Fixed Cost / Time & Material (T&M)</li>
            </ul>
            <p>
              Get in touch with our team to explore our value-added services and customized solutions designed to drive efficiency and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Management Profile */}
      <section className="management-profile">
        <h2>Management Profile</h2>
        <p>
          Our leadership team consists of industry experts and visionaries, dedicated to fostering innovation and growth. Their expertise ensures VSA remains at the forefront of technology and development.
        </p>
      </section>

      {/* Working at VSA */}
      <section className="working-at-vsa">
        <h2>Working at VSA</h2>
        <p>
          VSA is a hub for intellectual growth and industry innovation. We believe in fostering a collaborative, inclusive, and forward-thinking work environment where ideas turn into impactful solutions.
        </p>
        <p>
          At VSA, you're not just an employee—you are a key contributor to pioneering advancements. We thrive on creativity, problem-solving, and a passion for excellence in everything we do.
        </p>

        <h3>Job Overview</h3>
        <p>
          Envision the future, lead the change, and embrace the adventure. Whether you're an experienced professional or an ambitious newcomer, VSA offers exciting challenges, skill-building opportunities, and a platform to push boundaries in technology and design.
        </p>
        <p>
          We value dedication, curiosity, and teamwork, ensuring that every individual has the resources to grow, innovate, and succeed in a rapidly evolving industry.
        </p>
        <p>
          Join us and be a part of something transformative—where your work shapes the future.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
