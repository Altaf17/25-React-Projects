import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => {
            return (
              <li key={index} onClick={handleClick}>
                {item}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Suggestions;
