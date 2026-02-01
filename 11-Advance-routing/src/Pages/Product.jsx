import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      <div className="flex flex-col md:flex-row gap-8 mt-20">
        
        {/* Men */}
        <Link
          to="/product/men"
          className="group w-60 h-36 flex items-center justify-center rounded-2xl
                     bg-gray-800 border border-gray-700
                     hover:border-blue-500 transition-all duration-300
                     shadow-lg hover:shadow-blue-500/30
                     hover:scale-105"
        >
          <span className="text-2xl font-semibold text-transparent bg-clip-text 
                           bg-gradient-to-r from-blue-400 to-blue-600">
            Men
          </span>
        </Link>

        {/* Women */}
        <Link
          to="/product/women"
          className="group w-60 h-36 flex items-center justify-center rounded-2xl
                     bg-gray-800 border border-gray-700
                     hover:border-pink-500 transition-all duration-300
                     shadow-lg hover:shadow-pink-500/30
                     hover:scale-105"
        >
          <span className="text-2xl font-semibold text-transparent bg-clip-text 
                           bg-gradient-to-r from-pink-400 to-pink-600">
            Women
          </span>
        </Link>

        {/* Child */}
        <Link
          to="/product/child"
          className="group w-60 h-36 flex items-center justify-center rounded-2xl
                     bg-gray-800 border border-gray-700
                     hover:border-green-500 transition-all duration-300
                     shadow-lg hover:shadow-green-500/30
                     hover:scale-105"
        >
          <span className="text-2xl font-semibold text-transparent bg-clip-text 
                           bg-gradient-to-r from-green-400 to-green-600">
            Child
          </span>
        </Link>

      </div>
      <Outlet />
    </div>
  );
};

export default Product;
