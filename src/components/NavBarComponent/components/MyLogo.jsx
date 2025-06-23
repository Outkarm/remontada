import { Link } from "react-router-dom";
import "../style/MyLogo.css";
const MyLogo = () => {
  return (
    <Link to={"/"}>
      <div className="my-logo">Koy Outkarm</div>
    </Link>
  );
};
export default MyLogo;
