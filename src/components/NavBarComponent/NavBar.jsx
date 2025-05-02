import "./style/NavBar.css";
import MyLogo from "./components/MyLogo.jsx";
import MenuItems from "./components/MenuItems.jsx";

const NavBar = () => {
  const menuItems = ["Portoflio", "About", "Contact"];
  return (
    <div className="navigation-bar">
      <MyLogo />
      <MenuItems itemsArr={menuItems} />
    </div>
  );
};
export default NavBar;
