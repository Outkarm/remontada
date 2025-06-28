import "../styles/AboutInfoComponent.css";
import Button from "../../GeneralAccessoriesComponent/Button.jsx";

const AboutInfoComponent = () => {
  return (
    <div className="about-info-container">
      <div className="about-info-header">About me</div>
      <div className="about-info-text">
        Hey there! I can help you build a product, feature or website. Look
        through some of my work and experience! If you like what you see and
        have a project you need coded, don’t hesitate to contact me.
      </div>
      <Button btnText={"Get my resume"} btnUse={"pop-up"} costomBlock={true} />
    </div>
  );
};

export default AboutInfoComponent;
