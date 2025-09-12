import React, { useState, useEffect } from "react";

function WhatWeDo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Title outside image */}
      <h2
        style={{
          fontSize: isMobile ? "28px" : "40px",
          fontWeight: "700",
          marginBottom: isMobile ? "16px" : "32px",
          color: "#333",
          textAlign: "center",
        }}
      >
        What We Do
      </h2>

      {/* Background image with foreground text */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: isMobile ? "300px" : "500px",
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
          }}
        >
          <p>
            To redefine industry standards through innovation, enabling businesses and individuals to unlock their full potential with cutting-edge technology.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
