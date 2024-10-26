import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

import { FaRegStarHalfStroke } from "react-icons/fa6";
interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 10;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) {
      return <FaStar key={index} className="h-5 w-5 text-yellow-500" />;
    } else if (index === fullStars && hasHalfStar) {
      return (
        <FaRegStarHalfStroke
          key={index}
          className="h-5 w-5 -500 text-yellow-500"
        />
      );
    } else {
      return <FaRegStar key={index} className="h-5 w-5 text-gray-300" />;
    }
  });

  return <div className="flex">{stars}</div>;
};

export default Rating;
