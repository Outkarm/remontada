import "../styles/TechnologyInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faLaptopCode,
  faBrain,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const TechnologyInfo = ({ infoName, infoDetails }) => {
  return (
    <div className="technology-info-container">
      <div className="technology-icon-container">
        {infoName === "Language" && <FontAwesomeIcon icon={faLanguage} />}
        {infoName === "Frameworks" && <FontAwesomeIcon icon={faLaptopCode} />}
        {infoName === "Ability" && <FontAwesomeIcon icon={faBrain} />}
        {infoName === "Database" && <FontAwesomeIcon icon={faDatabase} />}
      </div>
      <div className="technology-info">
        <div className="technology-name">{infoName}</div>
        <div className="technology-info-text">{infoDetails}</div>
      </div>
    </div>
  );
};

export default TechnologyInfo;
