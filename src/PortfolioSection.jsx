import "./PortfolioSection.css";
function PortfolioSection() {
  const portfolioArr = [
      {
       id: 1,
       name: 'PLM Implementation',
       image: '/resrc/PLM_Implementation.jpg',
       review: 'Expert guidance and support for seamless PLM system implementation.',
     },
     {
       id: 2,
       name: 'PLM Integration',
       image: '/resrc/PLM_Integration.jpg',
       review: 'Efficient integration of PLM software with existing systems to streamline operations.'
     },
     {
       id: 3,
       name: 'PLM Migration',
       image: '/resrc/PLM_Migration.jpg',
       review: 'Seamless migration of legacy data to new PLM systems with minimal disruption.'
     },
     {
       id: 4,
       name: 'PLM Training',
       image: '/resrc/PLM_Training.jpg',
       review: 'Comprehensive training programs to enhance user proficiency and maximize PLM utilization.'
     },
     {
       id: 5,
       name: 'PLM Support',
       image: '/resrc/PLM_Support.jpg',
       review: 'Ongoing assistance and maintenance services for uninterrupted PLM operations.'
     },
     {
       id: 6,
       name: 'CAD/CAM/CAE Customization',
       image: '/resrc/PLM_Customization.jpg',
       review: 'Tailored solutions to adapt the PLM system to your business needs.'
     },
   ];


  return (
  <div className="portfoliosection-grid">
  {portfolioArr.map((item) => (
    <div key={item.id} className="portfoliosection-card">
      <img
        src={item.image}
        alt={item.name}
        className="portfoliosection-image"
      />
      <h3 className="portfoliosection-title">{item.name}</h3>
      <p className="portfoliosection-review">{item.review}</p>
    </div>
  ))}
</div>
);
}

export default PortfolioSection;
