import { useState, useEffect } from "react";
import "./style/NavBar.css";
import MyLogo from "./components/MyLogo.jsx";
import MenuItems from "./components/MenuItems.jsx";
import Hamburger from "./components/Hamburger.jsx";
import DropDownMenu from "./components/DropDownMenu.jsx";
import AuthAccessDropDown from "./components/AuthAccessDropDown.jsx";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);

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
        {!isClicked ? (
          <>
            <MyLogo
              setIsLogoClicked={setIsLogoClicked}
              isLogoClicked={isLogoClicked}
            />
            {isLogoClicked && (
              <AuthAccessDropDown
                setIsLogoClicked={setIsLogoClicked}
                isOpen={isLogoClicked}
              />
            )}
          </>
        ) : (
          <div></div>
        )}

        <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <DropDownMenu
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isMobile={isMobile}
      />
    </div>
  ) : (
    <div className="navigation-bar">
      <>
        <MyLogo
          setIsLogoClicked={setIsLogoClicked}
          isLogoClicked={isLogoClicked}
        />
        {isLogoClicked && (
          <AuthAccessDropDown
            setIsLogoClicked={setIsLogoClicked}
            isOpen={isLogoClicked}
          />
        )}
      </>
      <MenuItems itemsArr={menuItems} />
    </div>
  );
};

export default NavBar;
