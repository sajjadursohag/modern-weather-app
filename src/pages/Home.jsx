import { useState } from "react";

const Home = () => {
  const [click, setClick] = useState("");
  console.log(click);

  return (
    <div className="text-center">
      <h1 className="text-6xl text-blue-300 font-extra-bold">
        Modern <span className="text-blue-400">Weather App</span>
      </h1>

      <p className="py-4 text-md text-gray-400">
        Check your weather today in next level
      </p>
      <div>
        <button
          type="button"
          onClick={() => setClick("Clicked")}
          className="text-lg font-medium hover:scale-105 transition-all bg-blue-500 px-5 py-1 rounded-4xl delay-500 text-gray-100"
        >
          Check Weather
        </button>
      </div>
    </div>
  );
};

export default Home;
