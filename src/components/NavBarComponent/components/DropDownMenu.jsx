import "../style/DropDownMenu.css";
import DropDownMenuItems from "./DropDownMenuItems";

const DropDownMenu = ({ isClicked, isMobile, setIsClicked }) => {
  const dropDownMenuItems = ["Portfolio", "About", "Contact"];

  return isMobile ? (
    <div className={`dropdown-menu-container ${isClicked ? "open" : ""}`}>
      <DropDownMenuItems
        setIsClicked={setIsClicked}
        dropDownMenuItems={dropDownMenuItems}
      />
    </div>
  ) : null;
};

export default DropDownMenu;
