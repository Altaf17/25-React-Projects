import React from "react";
import { TabsList } from "./TabsList";

const SomeRandomComponent = () => {
  return <h1> some random content</h1>;
};

const TabsTest = () => {
  const tabs = [
    { label: "Tab 1", content: "tab 1 content" },
    { label: "Tab 2", content: "tab 2 content" },
    { label: "Tab 3", content: <SomeRandomComponent /> },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return <TabsList tabsContent={tabs} onChange={handleChange} />;
};

export default TabsTest;
