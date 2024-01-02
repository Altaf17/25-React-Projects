import MenuList from "./MenuList";
import "./TreeView.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="treeView-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
