import "./styles/MyHero.css";
import MyHeroInfo from "./components/MyHeroInfo";
import MyHeroSocials from "./components/MyHeroSocials";
const MyHero = () => {
  return (
    <div className="my-hero-container">
      <div className="my-hero-info-container">
        <MyHeroSocials />
        <MyHeroInfo />
      </div>
      <div className="my-hero-container">
        <img src="/images/myHeroPage.svg" className="hero-img" alt="Hero" />
      </div>
    </div>
  );
};

export default MyHero;
