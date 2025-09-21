import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Introduction with image */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-10">
        <div className="md:w-1/2">
          <img
            src="/resrc/KCACRIC-Ground.png"
            alt="Rising Strikers Cricket Academy Ground"
            className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <p>
            At <strong>Kushinagar Cricket Academy</strong>, our goal is to discover and nurture raw cricketing talent from rural India. We strive to create champions from the grassroots by providing world-class coaching, modern facilities, and real match exposure — empowering the next generation of cricket stars.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values with icons/images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {/* Mission */}
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
          <img
            src="/resrc/Our-Mission.png"
            alt="Mission Icon"
            className="w-full mb-3 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-left">
            To unlock the hidden cricketing potential in every young player by offering expert coaching, mental conditioning, and consistent match practice, fostering discipline, teamwork, and sportsmanship.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
          <img
            src="/resrc/Our-Vision.png"
            alt="Vision Icon"
            className="w-full mb-3 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-left">
            To become the leading cricket academy in rural India, recognized for producing skilled, confident, and mentally tough players ready to compete at national and international levels.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
          <img
            src="/resrc/Our-Values.png"
            alt="Values Icon"
            className="w-full mb-3 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Values</h3>
          <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
            <li>Integrity & Fair Play</li>
            <li>Hard Work & Discipline</li>
            <li>Inclusivity & Equal Opportunity</li>
            <li>Continuous Learning & Improvement</li>
            <li>Community Engagement</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us - with image */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-lg p-8 shadow-md mb-20">
        <div className="md:w-1/2">
          <img
            src="/resrc/WhyChooseUs.png"
            alt="Coaches and Players Team"
            className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96"
          />
        </div>
        <div className="md:w-4/3 text-gray-700">
          <h3 className="text-3xl font-semibold mb-5 text-green-600">Why Choose Us?</h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-lg text-left">
            <li>Certified and experienced coaches with proven track records</li>
            <li>Personalized attention tailored to each player’s skill level and goals</li>
            <li>Access to quality cricket facilities and real match practice opportunities</li>
            <li>Supportive environment fostering growth, confidence, and teamwork</li>
            <li>Comprehensive training programs covering skills, fitness, and mental conditioning</li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <Link to="/contact">
          <button className="bg-green-500 text-white py-3 px-8 rounded-md text-xl hover:bg-green-600 transition">
            Contact Us to Join
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
