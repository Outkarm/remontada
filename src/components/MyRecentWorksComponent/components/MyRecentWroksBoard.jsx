import "../styles/MyRecentWroksBoard.css";
import Budge from "../../GeneralAccessoriesComponent/Budge";
import Button from "../../GeneralAccessoriesComponent/Button";

const MyRecentWroksBoard = ({
  imgURL,
  bdgList = [],
  projectName,
  projectInfo,
  projectId,
  setOpenPopUpCard,
  setPopUpCardIndex,
}) => {
  const handleSeeProjectBTN = () => {
    setPopUpCardIndex(projectId);
    setOpenPopUpCard(true);
  };
  return (
    <div className="my-recent-works-board-container">
      <div className="my-recent-works-board-image-container">
        <img src={imgURL} className="my-recent-works-board-image" />
      </div>
      <div className="my-recent-works-board-info-container">
        <div className="my-recent-works-board-project-name">{projectName}</div>
        <div className="my-recent-works-board-project-info">{projectInfo}</div>
        <div className="my-recent-works-board-project-badge-list">
          {bdgList.map((bdgName, index) => (
            <Budge bdgID={index} bdgText={bdgName} bdgType={"pop-up"} />
          ))}
        </div>
        <Button
          costomBlock={true}
          btnText={"See project"}
          btnUse={"pop-up"}
          clickFunction={handleSeeProjectBTN}
        />
      </div>
    </div>
  );
};

export default MyRecentWroksBoard;
