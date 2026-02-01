import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <h2 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        404
      </h2>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        Oops! Page Not Found
      </h2>

      <p className="mt-3 text-gray-400 text-center max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:scale-105"
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
