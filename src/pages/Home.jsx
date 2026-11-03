import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-6xl text-blue-300 font-extra-bold">
          Modern <span className="text-blue-400">Weather App</span>
        </h1>

        <p className="py-4 text-md text-gray-400">
          Check your weather today in next level
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setClick(true)}
          className="text-lg font-medium hover:scale-105 transition-all bg-blue-500 px-5 py-1 rounded-4xl delay-500 text-gray-100"
        >
          Check Weather
        </button>
      </div>

      {click && <LocationModal onClose={() => setClick(false)} />}
    </div>
  );
};

export default Home;
