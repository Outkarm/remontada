import { useState, useEffect } from "react";
import "./style/NavBar.css";
import MyLogo from "./components/MyLogo.jsx";
import MenuItems from "./components/MenuItems.jsx";
import Hamburger from "./components/Hamburger.jsx";
import DropDownMenu from "./components/DropDownMenu.jsx";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = ["Portfolio", "About", "Contact"];

  return isMobile ? (
    <div className="navigation-dropdown-container">
      <div className="navigation-bar">
        {!isClicked ? <MyLogo /> : <div></div>}

        <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <DropDownMenu isClicked={isClicked} isMobile={isMobile} />
    </div>
  ) : (
    <div className="navigation-bar">
      <MyLogo />
      <MenuItems itemsArr={menuItems} />
    </div>
  );
};

export default NavBar;
