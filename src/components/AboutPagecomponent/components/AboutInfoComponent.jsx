import { useState } from "react";
import Button from "../../GeneralAccessoriesComponent/Button.jsx";
import "../styles/AboutInfoComponent.css";

const AboutInfoComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/pdf/John_Kpordje_Resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "John_Kpordje_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Downloads\Documents\video_5.pdf

  return (
    <div className="about-info-container">
      <div className="about-info-header">About me</div>
      <div className="about-info-text">
        Hey there! I can help you build a product, feature or website. Look
        through some of my work and experience! If you like what you see and
        have a project you need coded, don’t hesitate to contact me.
      </div>
      <Button
        btnText={"Get my resume"}
        clickFunction={handleDownload}
        btnUse={"pop-up"}
        costomBlock={true}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AboutInfoComponent;
