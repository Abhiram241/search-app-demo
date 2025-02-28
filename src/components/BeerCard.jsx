import { useState } from "react";

const BeerCard = ({ beer }) => {
  const backupImage = "https://placehold.co/600x400"; // Backup Image
  const [imgSrc, setImgSrc] = useState(beer.image); // Initial image

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      {/* Image wrapper for fixed size */}
      <div className="w-full h-40 flex justify-center items-center bg-gray-200 rounded-md overflow-hidden">
        <img
          src={imgSrc}
          alt={beer.name || "Beer Image"}
          className="w-full h-full object-contain flex items-center"
          onError={() => setImgSrc(backupImage)} // If image fails, replace it
        />
      </div>
      <h2 className="text-lg font-bold mt-2">{beer.name}</h2>
      <p className="text-gray-600">{beer.price || "Price not available"}</p>
      <p className="text-sm text-gray-500">
        ⭐ {beer.rating?.average?.toFixed(1) || "N/A"} (
        {beer.rating?.reviews || 0} reviews)
      </p>
    </div>
  );
};

export default BeerCard;
