import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import TechnologyInfo from "./TechnologyInfo";
import TechnologySkillChart from "./TechnologySkillChart";
import "../styles/SkillComponent.css";

const SkillComponent = ({ jsonData, skillCompName }) => {
  const [dropDown, setDropDown] = useState(false);

  const { skillList, whatIDo } = jsonData;

  const handleSkillDropdown = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };
  return (
    <>
      <div
        className={`skill-main-container ${dropDown ? "active" : ""}`}
        onClick={handleSkillDropdown}
      >
        <div className="skill-main-name">{skillCompName}</div>
        {dropDown ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      {dropDown && (
        <div className="drop-down-skills-container">
          <div className="what-i-do-container">
            <div className="drop-down-skills-container">What I Do ?</div>
            <div className="technologies-container">
              {whatIDo.map((item, index) => (
                <TechnologyInfo
                  key={index}
                  infoName={item.name}
                  infoDetails={item.detail}
                />
              ))}
            </div>
          </div>
          <div className="coading-skills-container">
            <div className="drop-down-skills-container">Coding Skills</div>
            <div className="technologies--skills-chartcontainer">
              {skillList.map((skill, index) => (
                <TechnologySkillChart
                  key={index}
                  skillName={skill.skillName}
                  skillPercentage={skill.skillPercentage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillComponent;
