import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="w-64 bg-white rounded-lg overflow-hidden">
        <img
          src={elem.download_url}
          alt={elem.author}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
        <div className="p-3">
          <h1 className="text-black text-sm font-medium truncate">
            {elem.author}
          </h1>
        </div>
      </div>
    </a>
  );
};

export default Card;
