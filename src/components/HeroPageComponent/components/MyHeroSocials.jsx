import "../styles/MyHeroSocials.css";
const MyHeroSocials = () => {
  const socialList = [
    {
      name: "github",
      theLink: "https://github.com/Outkarm",
    },
    {
      name: "linkedin",
      theLink: "https://www.linkedin.com/in/john-kpordje-866749241/",
    },
    {
      name: "angelList",
      theLink: "https://wellfound.com/u/john-kpordje",
    },
    {
      name: "twitter",
      theLink: "https://twitter.com/outkarm",
    },
    {
      name: "medium",
      theLink: "https://medium.com/@jkpordje",
    },
  ];

  return (
    <div className="socials-icon-container">
      {socialList.map((item, index) => (
        <a href={item.theLink} target="_blank" rel="noopener">
          <img
            src={`/images/${item.name}.svg`}
            className="social-icons"
            alt={item.name}
            key={index}
          />
        </a>
      ))}
    </div>
  );
};
export default MyHeroSocials;
