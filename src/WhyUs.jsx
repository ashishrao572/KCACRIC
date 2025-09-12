import React, { useState, useEffect } from "react";

function WhyUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Title outside the image section */}
      <h2
        style={{
          fontSize: isMobile ? "28px" : "40px",
          fontWeight: "700",
          marginBottom: isMobile ? "16px" : "32px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Why Choose Us?
      </h2>

      {/* Background image with foreground text */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: isMobile ? "350px" : "550px",
          backgroundImage: 'url("/resrc/robo_arm_1.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "20px" : "40px",
          boxSizing: "border-box",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        }}
      >
        {/* White text box */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "12px",
            padding: isMobile ? "20px" : "40px",
            maxWidth: isMobile ? "90%" : "60%",
            color: "#333",
            fontSize: isMobile ? "16px" : "20px",
            lineHeight: 1.6,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflowY: "auto",
            maxHeight: "100%",
          }}
        >
          <p style={{ marginBottom: "16px" }}>
            With over 25 years of experience, we are your trusted partner in advanced Simulation and Digital Twin technologies. Our team helps organizations across India leverage Simulation, Optimization, and Data Analytics to create smarter, more efficient products.
          </p>
          <ul style={{ paddingLeft: "18px", margin: 0 }}>
            <li><strong>Industry Expertise:</strong> Practical experience across diverse sectors.</li>
            <li><strong>Tailored Solutions:</strong> Customized to your business challenges.</li>
            <li><strong>Innovative Tools:</strong> Access to the latest tech stack and platforms.</li>
            <li><strong>Skilled Team:</strong> Passionate engineers and problem-solvers.</li>
            <li><strong>Customer Focused:</strong> We listen, understand, and collaborate closely.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
