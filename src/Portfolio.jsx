import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioArr = [
    {
      id: 1,
      name: 'Batting Mastery',
      image: '/resrc/PLM_Implementation.jpg',
      tagline: 'Learn proper stance, footwork, and stroke selection from our experienced coaches.',
      review: `We help organizations implement robust PLM (Product Lifecycle Management) systems that streamline processes, enhance data visibility, and improve collaboration across departments. Whether it's a greenfield implementation or an enterprise-wide rollout, our structured approach ensures minimal disruption, faster ROI, and a scalable foundation for future growth.

Our PLM implementation services cover:
• Requirement assessment and system architecture
• Configuration and business process mapping
• CAD and enterprise integrations
• User acceptance testing and go-live support

We specialize in leading PLM platforms including Siemens Teamcenter, Dassault 3DEXPERIENCE, and PTC Windchill.`,
    },
    {
      id: 2,
      name: 'CAD/CAM/CAE Customization and Automation',
      image: '/resrc/PLM_Customization.jpg',
      tagline: 'Tailored solutions to adapt the PLM system to your unique business requirements.',
      review: `No two organizations are the same—and your PLM system shouldn't be either. We offer deep customization services to align your PLM workflows, user interfaces, and data models with your unique business needs.

Our team builds custom modules, dashboards, forms, and automation scripts that enhance usability, reduce manual effort, and improve data accuracy.

Our customization capabilities include:
• Custom workflow and lifecycle development
• BOM management enhancements
• User interface (UI/UX) tailoring
• Scripting and plugin development
• Compliance-driven custom reports`,
    },
    {
      id: 3,
      name: 'PLM Integration',
      image: '/resrc/PLM_Integration.jpg',
      tagline: 'Efficient integration of PLM software with existing systems to streamline operations.',
      review: `A PLM system is most powerful when it integrates seamlessly with other enterprise systems like ERP, MES, CAD, and CRM. We deliver secure, scalable, and high-performance integrations that enable real-time data exchange and end-to-end digital continuity.

We offer:
• CAD integrations (CATIA, NX, Creo, SolidWorks)
• ERP integration (SAP, Oracle, etc.)
• MES and manufacturing system connections
• REST/SOAP API-based custom interfaces
• Synchronization of product, process, and compliance data

Our goal is to break silos and create a connected enterprise.`,
    },
    {
      id: 4,
      name: 'PLM Training',
      image: '/resrc/PLM_Training.jpg',
      tagline: 'Comprehensive training programs to enhance user proficiency and maximize PLM utilization.',
      review: `We offer role-based PLM training programs for users, administrators, and developers to ensure effective adoption and long-term success. Our hands-on training approach covers both theoretical concepts and real-world use cases.

Training modules include:
• End-user training for design and engineering teams
• Admin and configuration-level training
• Developer-focused training for customization and scripting
• Onsite, virtual, or self-paced delivery formats

Our trainers bring years of domain and tool-specific expertise to help your team get the most out of your PLM investment.`,
    },
    {
      id: 5,
      name: 'PLM Support',
      image: '/resrc/PLM_Support.jpg',
      tagline: 'Ongoing assistance and maintenance services for uninterrupted PLM operations.',
      review: `We offer comprehensive support services to ensure your PLM environment runs smoothly, efficiently, and without unexpected downtimes. From minor issue resolution to system optimization and upgrades, our team is always available.

Our support offerings include:
• L1, L2, and L3 support models
• Incident management and SLA adherence
• Patch deployment and system updates
• Data recovery and troubleshooting
• Usage optimization and performance tuning

We offer flexible support models—monthly, yearly, or ticket-based—to suit your business needs.`,
    },
    {
      id: 6,
      name: 'PLM Migration',
      image: '/resrc/PLM_Migration.jpg',
      tagline: 'Seamless migration of legacy data to new PLM systems with minimal disruption.',
      review: `Whether you are moving from a legacy system to a modern PLM platform or upgrading between versions, our migration services ensure zero data loss and smooth transition. We follow a structured and validated approach to migrate data, workflows, and user configurations with full traceability.

Our PLM migration services include:
• Data extraction, cleansing, and transformation
• Object and metadata mapping
• Workflow and user role migration
• Verification and validation post-migration
• Legacy to cloud-native PLM migration

We minimize business disruption while ensuring complete system integrity.`,
    },
  ];

  const [flipped, setFlipped] = useState(Array(portfolioArr.length).fill(false));

  const handleFlip = (idx) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <div className="portfolio-grid">
      {portfolioArr.map((item, idx) => (
        <div
          key={item.id}
          className={`portfolio-card${flipped[idx] ? ' flipped' : ''}`}
          onClick={() => handleFlip(idx)}
        >
          <div className="portfolio-card-inner">
            <div className="portfolio-card-front">
              <img src={item.image} alt={item.name} className="portfolio-image" />
              <h3 className="portfolio-title">{item.name}</h3>
              {item.tagline && <h4 className="portfolio-tagline">{item.tagline}</h4>}
            </div>
            <div className="portfolio-card-back">
              <h3 className="portfolio-title">{item.name}</h3>
              <p className="portfolio-review">{item.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
