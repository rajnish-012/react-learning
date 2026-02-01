import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();

  return (
    <div className="absolute bottom-14 w-full bg-gray-900/90 border-t border-gray-700 
                    px-4 py-4">
      
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row 
                      items-center justify-center gap-4">

        <button
          onClick={() => navigate("/")}
          className="font-medium text-sm sm:text-base
                     bg-gradient-to-r from-amber-400 to-amber-500
                     px-6 py-2 rounded-lg text-black
                     hover:from-amber-500 hover:to-amber-600
                     transition-all duration-300
                     active:scale-95 shadow-md"
        >
          Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="font-medium text-sm sm:text-base
                     bg-gray-800 text-white
                     px-6 py-2 rounded-lg
                     border border-gray-700
                     hover:bg-gray-700
                     transition-all duration-300
                     active:scale-95"
        >
          Back
        </button>

        <button
          onClick={() => navigate(1)}
          className="font-medium text-sm sm:text-base
                     bg-gray-800 text-white
                     px-6 py-2 rounded-lg
                     border border-gray-700
                     hover:bg-gray-700
                     transition-all duration-300
                     active:scale-95"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default Navbar2;
