import "./styles/MyHero.css";
const MyHero = () => {
  return (
    <div className="my-hero-container">
      <div className="my-hero-info-container"></div>
      <div className="my-hero-container">
        <img src="/images/myHeroPage.svg" className="hero-img" alt="Hero" />
      </div>
    </div>
  );
};

export default MyHero;
