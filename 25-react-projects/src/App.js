import Accordian from "./Components/01-Accordian/Accordian";
import RandomColors from "./Components/02-RandomColors/RandomColors";
import StarRatings from "./Components/03-StarRatings/StarRatings";
import Slider from "./Components/04-ImageSlider/Slider";
import LoadMore from "./Components/05-LoadMore/LoadMore";
import menus from "./Components/06-TreeView/Data";
import TreeView from "./Components/06-TreeView/TreeView";
import QRCodeGenerator from "./Components/07-QRCodeGenerator/QRCodeGenerator";
import ThemeChanger from "./Components/08-ThemeChanger/ThemeChanger";
import ScrollIndicator from "./Components/09-Scroll-Indicator/ScrollIndicator";
import TabsTest from "./Components/10-Custom-Tabs/TabsTest";
import ModalTest from "./Components/11-Modal-Popup/ModalTest";
import Profile from "./Components/12-Github-Profile/Profile";
import Search from "./Components/13-Search-Auto-Complate/Search";
import TicToc from "./Components/14-Tic-Toc-Game/TicToc";
import FeatureFlags from "./Components/15-Feature-Flag/FeatureFlags";
import FeatureFlagGlobalState from "./Components/15-Feature-Flag/context";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        {/* <Accordian /> */}
        {/* <RandomColors /> */}
        {/* <StarRatings noOfStars={10} /> */}
        {/* <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
        {/* <LoadMore /> */}
        {/* <TreeView menus={menus} /> */}
        {/* <QRCodeGenerator /> */}
        {/* <ThemeChanger /> */}
        {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}
        {/* <TabsTest /> */}
        {/* <ModalTest /> */}
        {/* due to api its not working */}
        {/* <Profile /> */}
        {/* <Search /> */}
        {/* <TicToc /> */}
        <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState>
      </div>
    </>
  );
}
