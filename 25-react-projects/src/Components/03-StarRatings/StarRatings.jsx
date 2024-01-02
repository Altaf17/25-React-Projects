import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRatings.css";

const StarRatings = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-ratings">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onMouseLeave={() => handleMouseLeave()}
            onMouseMove={() => handleMouseMove(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRatings;
