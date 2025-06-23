import { Link } from "react-router-dom";
import "../style/MenuItems.css";

const MenuItems = ({ itemsArr }) => {
  return (
    <div className="menu-list-container">
      {itemsArr.map((item, index) => (
        <Link to={`/${item.toLowerCase()}`} key={index}>
          <div className="menu-list-item" key={index}>
            {item}
          </div>
        </Link>
      ))}
      <div className="menu-list-item">
        {" "}
        <img src="/images/messageImage.svg" alt="icon" />
      </div>
    </div>
  );
};

export default MenuItems;
