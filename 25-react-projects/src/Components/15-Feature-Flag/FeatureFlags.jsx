import { useContext } from "react";
import Accordian from "../01-Accordian/Accordian";
import RandomColors from "../02-RandomColors/RandomColors";
import TreeView from "../06-TreeView/TreeView";
import ThemeChanger from "../08-ThemeChanger/ThemeChanger";
import TicToc from "../14-Tic-Toc-Game/TicToc";
import { FeatureFlagsContext } from "./context";
import menus from "../06-TreeView/Data";
import TabsTest from "../10-Custom-Tabs/TabsTest";

const FeatureFlags = () => {
  const { loading, enable } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <ThemeChanger /> },
    { key: "showTicTacBoard", component: <TicToc /> },
    { key: "showAccordian", component: <Accordian /> },
    { key: "showTreeView", component: <TreeView menus={menus} /> },
    { key: "showRandomColors", component: <RandomColors /> },
    { key: "showTab", component: <TabsTest /> },
  ];

  const checksEnablesFlags = (getCurrentKey) => {
    return enable[getCurrentKey];
  };

  if (loading) return <h1>Loading... please wait</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checksEnablesFlags(componentItem.key) ? (
          <div key={componentItem.key}> componentItem.component</div>
        ) : null
      )}
    </div>
  );
};

export default FeatureFlags;
