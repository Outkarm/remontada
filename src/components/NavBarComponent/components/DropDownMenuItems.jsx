import { Link } from "react-router-dom";
import "../style/DropDownMenuItems.css";

const DropDownMenuItems = ({ dropDownMenuItems, setIsClicked }) => {
  const closeDropDown = () => {
    setIsClicked(false);
  };

  return (
    <>
      {dropDownMenuItems.map((item, index) => (
        <Link to={`/${item.toLowerCase()}`} onClick={closeDropDown} key={index}>
          <div className="dd-menu-item" key={index}>
            {item}
          </div>
        </Link>
      ))}
    </>
  );
};

export default DropDownMenuItems;
