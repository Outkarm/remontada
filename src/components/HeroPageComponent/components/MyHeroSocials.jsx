import "../styles/MyHeroSocials.css";
const MyHeroSocials = () => {
  const socialList = ["github", "linkedin", "angelList", "twitter", "medium"];
  return (
    <div className="socials-icon-container">
      {socialList.map((item, index) => (
        <img
          src={`/images/${item}.svg`}
          className="social-icons"
          alt={item}
          key={index}
        />
      ))}
    </div>
  );
};
export default MyHeroSocials;
