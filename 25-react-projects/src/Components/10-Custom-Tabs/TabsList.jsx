import React, { useState } from "react";
import "./Tabs.css";
export const TabsList = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (getIndex) => {
    setCurrentTabIndex(getIndex);
    onChange(getIndex);
  };
  return (
    <>
      <div className="wrapper">
        <div className="heading">
          {tabsContent.map((item, index) => {
            return (
              <div
                key={item.label}
                onClick={() => handleClick(index)}
                className={`tab-item ${
                  currentTabIndex === index ? "active" : ""
                }`}
              >
                <span className="label">{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="content" style={{ color: "red" }}>
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
      </div>
    </>
  );
};
