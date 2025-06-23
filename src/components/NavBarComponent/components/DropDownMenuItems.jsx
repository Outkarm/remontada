import { Link } from "react-router-dom";
import "../style/DropDownMenuItems.css";

const DropDownMenuItems = ({ dropDownMenuItems }) => {
  return (
    <>
      {dropDownMenuItems.map((item, index) => (
        <Link to={`/${item.toLowerCase()}`} key={index}>
          <div className="dd-menu-item" key={index}>
            {item}
          </div>
        </Link>
      ))}
    </>
  );
};

export default DropDownMenuItems;
