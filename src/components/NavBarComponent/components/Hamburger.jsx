import "../style/Hamburger.css";
const Hamburger = ({ isClicked, setIsClicked }) => {
  const toggleClick = () => setIsClicked(!isClicked);
  return (
    <div className="hamburger-container" onClick={toggleClick}>
      <div className={`dash top ${isClicked ? "clicked" : ""}`}></div>
      <div className={`dash middle ${isClicked ? "clicked" : ""}`}></div>
      <div className={`dash bottom ${isClicked ? "clicked" : ""}`}></div>
    </div>
  );
};

export default Hamburger;
