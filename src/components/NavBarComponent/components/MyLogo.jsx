import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/MyLogo.css";
const MyLogo = ({ setIsLogoClicked, isLogoClicked }) => {
  const toggleClick = () => setIsLogoClicked(!isLogoClicked);
  const adminAccess = useSelector((state) => state.portfolio.admin.adminAccess);

  return (
    <div className="logo-container">
      <div
        className="logo-image-container"
        style={
          adminAccess === "live"
            ? {
                border: "5px solid green",
              }
            : { border: "5px solid rgba(255, 0, 0, 0.511)" }
        }
        onClick={toggleClick}
      >
        {adminAccess === "live" ? (
          <img src="/logo/logo3.jpg" alt="My Logo" className="logo-image" />
        ) : (
          <img src="/logo/logo-1.png" alt="My Logo" className="logo-image" />
        )}
      </div>
      <Link to={"/"}>
        <div className="my-logo">Koy Outkarm</div>
      </Link>
    </div>
  );
};
export default MyLogo;
