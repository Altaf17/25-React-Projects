import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((item) => {
            return <MenuItem item={item} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
