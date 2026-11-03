import { X } from "lucide-react";


const LocationModal = ({ onClose}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[300px] p-5 rounded-xl w-[400px] bg-gray-100 shadow-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocationModal
