import { X } from "lucide-react";
import { useState } from "react";
import { getGeolocation } from "../services/get-geolocation";
import { useNavigate } from "react-router";

const LocationModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const goToPage = (location) => {
    navigate("/weather", { state: { location } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = city.trim();
    // console.log(value);
    if (!value) {
      setError("Please Enter a city name");
      return;
    }

    try {
      const location = await getGeolocation(value);
      // console.log(result);
      if (!location) {
        setError("Geocoding request failed!");
      }
      goToPage(location);
    } catch (error) {
      setError(error);
    }
  };

  const handleGeoLocations = () => {
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;
        // console.log({ latitude, longitude });
        goToPage({ name: "Your Locations", lat: latitude, lon: longitude });
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 10000,
      },
    );
  };

  return (
    <div
      className="fixed inset-0 flex 
    justify-center items-center bg-gray-950/60"
    >
      <div className="h-[300px] p-5 rounded-xl w-[400px] bg-gray-100 shadow-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where are you today?</h2>

          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>
        <div className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-5 ">
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border p-1 rounded-2xl"
            />
            <div className="">
              <button
                type="submit"
                className="text-lg w-full font-medium hover:scale-105 transition-all bg-blue-500 px-5 py-1 rounded-4xl delay-500 text-gray-100"
              >
                Get Weather
              </button>
            </div>
          </form>
        </div>

        <div className="p-2 text-center">Or</div>
        <div className="">
          <button
            type="button"
            onClick={handleGeoLocations}
            className="text-lg w-full font-medium hover:scale-105 transition-all bg-blue-500 px-5 py-1 rounded-4xl delay-500 text-gray-100"
          >
            Use My Locations
          </button>
        </div>

        <div className="">
          {error && (
            <p className="text-red-500 text-md font-medium text-center p-2">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
