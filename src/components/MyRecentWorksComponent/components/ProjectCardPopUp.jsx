import "../styles/ProjectCardPopUp.css";
import Budge from "../../GeneralAccessoriesComponent/Budge";
import Button from "../../GeneralAccessoriesComponent/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectCardPopUp = ({
  imgURL,
  bdgList = [],
  projectName,
  projectInfo,
  seeLiveLink,
  seeSourceLink,
  setOpenPopUpCard,
}) => {
  const handleCloseBTN = (e) => {
    e.preventDefault;
    setOpenPopUpCard(false);
  };

  const handleSeeProjectLive = (e) => {
    e.preventDefault;
    window.open(seeLiveLink);
  };

  const handleSeeProjectSource = () => {
    e.preventDefault;
    window.open(seeSourceLink);
  };

  return (
    <div className="pop-up-card-container">
      <button onClick={handleCloseBTN} className="close-btn">
        <FontAwesomeIcon size="3x" icon={faXmark} />
      </button>

      <div className="pop-up-card-sub-container-1">
        <div className="pop-up-project-name-and-badge-container">
          <div className="pop-up-project-name">{projectName}</div>
          <div className="pop-up-badge-list-container">
            {bdgList.map((bdgName, index) => (
              <Budge bdgText={bdgName} bdgID={index} bdgType={"pop-up"} />
            ))}
          </div>
        </div>
      </div>
      <div className="pop-up-card-sub-container-2">
        <div className="pop-up-card-image-container">
          <img className="project-image" src={imgURL} alt={projectName} />
        </div>
        <div className="pop-up-card-info-and-btn-container">
          <div className="project-info">{projectInfo}</div>
          <div className="pop-up-buttons-container">
            <Button
              btnText={"See Live"}
              btnType="pop-up"
              costomBlock={true}
              clickFunction={handleSeeProjectLive}
              isLiveLink={true}
            />
            <Button
              btnText={"See Source"}
              btnType="pop-up"
              costomBlock={true}
              clickFunction={handleSeeProjectSource}
              isSourceLink={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPopUp;
