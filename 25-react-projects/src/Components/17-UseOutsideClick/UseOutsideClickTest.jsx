import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(!showContent));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random content</h1>
          <p>Please click outside of this to close this</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(!showContent)}>
          See Content
        </button>
      )}
    </div>
  );
};

export default UseOutsideClickTest;
