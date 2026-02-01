import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 flex items-center justify-center py-4 shadow-inner">
      <h3 className="text-sm md:text-base tracking-wide">
        © {new Date().getFullYear()} Rajnish. All rights reserved.
      </h3>
    </footer>
  );
};

export default Footer;
