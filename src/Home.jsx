import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/resrc/home.png")' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-10 text-white">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src="/resrc/kcacric.png"
              alt="Cricket Academy Logo"
              className="w-60 h-60 md:w-80 md:h-80 object-contain"
            />
          </div>

          {/* Text + Buttons */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Kushinagar Cricket Academy!
            </h1>
            <p className="text-lg md:text-2xl mt-4">
              Gaon ka talent, desh ka future!
            </p>
            <div className="mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-start">
              <Link to="/join">
                <button className="bg-yellow-500 text-black py-2 px-6 rounded-md text-xl hover:bg-yellow-600">
                  Join Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white py-2 px-6 rounded-md text-xl text-white hover:bg-white hover:text-black">
                  Book a Visit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
