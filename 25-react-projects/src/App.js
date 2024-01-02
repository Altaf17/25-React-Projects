import Accordian from "./Components/01-Accordian/Accordian";
import RandomColors from "./Components/02-RandomColors/RandomColors";
import StarRatings from "./Components/03-StarRatings/StarRatings";
import Slider from "./Components/04-ImageSlider/Slider";
import LoadMore from "./Components/05-LoadMore/LoadMore";
import menus from "./Components/06-TreeView/Data";
import TreeView from "./Components/06-TreeView/TreeView";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColors /> */}
      {/* <StarRatings noOfStars={10} /> */}
      {/* <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMore /> */}
      <TreeView menus={menus} />
    </div>
  );
}
