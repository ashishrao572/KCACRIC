const Admissions = () => {
  return (
    <section id="admissions" className="py-5 mb-10">
      <div className="max-w-4xl mx-auto px-4 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-8 text-[#9C5455] text-center">Join Our Academy</h2>

        {/* Eligibility */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-xl w-4/3">
            <h3 className="text-xl font-semibold text-[#d47476] mb-3">🎯 Eligibility</h3>
            <ul className="list-disc list-inside ml-6 text-left text-gray-800 text-lg space-y-2">
              <li>Boys & girls aged 8–18 years</li>
              <li>Basic fitness & passion for cricket</li>
              <li>Willingness to attend regular sessions</li>
            </ul>
          </div>
        </div>

        {/* Fees */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-xl w-4/3">
          <h3 className="text-xl font-semibold text-[#d47476] mb-2">💰 Fees Structure</h3>
          <ul className="list-disc list-inside ml-6 text-left text-gray-800 text-lg space-y-1">
            <li>Monthly: ₹1500 – ₹2500 (depending on batch & location)</li>
            <li>Hostel (if availed): ₹3000/month extra (includes mess)</li>
          </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="/contact" className="inline-block px-8 py-3 bg-[#9C5455] text-white rounded-lg text-lg font-medium hover:bg-[#802f31] transition">
            Contact for Registration
          </a>
        </div>
      </div>
    </section>
  );
};

const Coaches = () => {
  return (
    <section className="py-20 text-center mt-5">
      <h2 className="text-3xl font-bold mb-10 text-[#9C5455]">Meet Our Coaches</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 px-4">
        {/* Coach Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <img
            src="/resrc/coach1.jpg"
            alt="Coach 1"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-[#d47476]">Coach Anil Sharma</h3>
          <p className="text-gray-700 text-base mt-2">
            BCCI Level-1 certified coach with 12+ years experience in grassroots and district cricket.
          </p>
        </div>

        {/* Coach Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <img
            src="/resrc/coach2.jpg"
            alt="Coach 2"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-[#d47476]">Coach Priya Mehta</h3>
          <p className="text-gray-700 text-base mt-2">
            Former state-level player, now mentoring upcoming young girls and bowlers.
          </p>
        </div>
      </div>
    </section>
  );
};

const Join = () => {
  return (
    <div>
      <Coaches/>
      <Admissions />
    </div>
  );
};

export default Join;
