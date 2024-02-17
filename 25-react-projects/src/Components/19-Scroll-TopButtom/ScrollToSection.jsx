import React, { useRef } from "react";

const ScrollToSection = () => {
  const scrollRef = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "white",
      },
    },
    {
      label: "third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
  ];

  const handleScroll = () => {
    let position = scrollRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1>Scroll to a Particular section</h1>
      <button onClick={handleScroll}>Click to scroll</button>
      {data.map((item, index) => {
        return (
          <div style={item.style} ref={index === 2 ? scrollRef : null}>
            <h3>{item.label}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollToSection;
