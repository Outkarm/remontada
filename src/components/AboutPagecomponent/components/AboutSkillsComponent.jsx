import SkillComponent from "./SkillComponent";
import frontendData from "../../../data/fromtendData.json";
import backendData from "../../../data/backendData.json";
import "../styles/AboutSkillsComponent.css";

const AboutSkillsComponent = () => {
  return (
    <div className="about-skills-component-container">
      <SkillComponent
        skillCompName={"Frontend Skills"}
        jsonData={frontendData}
      />
      <SkillComponent skillCompName={"Backend Skills"} jsonData={backendData} />
    </div>
  );
};

export default AboutSkillsComponent;
