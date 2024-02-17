import React from "react";
import useResponsive from "./useResponsive";

const UseResponsiveTest = () => {
  const windowSize = useResponsive();
  const { height, width } = windowSize;
  return (
    <div>
      <h1>window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseResponsiveTest;
