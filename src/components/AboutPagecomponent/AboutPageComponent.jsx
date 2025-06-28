import "./styles/AboutPageComponent.css";
import AboutInfoComponent from "./components/AboutInfoComponent";
import AboutSkillsComponent from "./components/AboutSkillsComponent";

const AboutPageComponent = () => {
  return (
    <div className="about-page-container">
      <AboutInfoComponent />
      <hr className="about-hr"></hr>
      <AboutSkillsComponent />
      <img
        src="/images/About_page_bg.svg"
        className="about-page-img"
        alt="About background"
      />
    </div>
  );
};

export default AboutPageComponent;
