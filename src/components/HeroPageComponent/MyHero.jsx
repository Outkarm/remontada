import "./styles/MyHero.css";
import MyHeroInfo from "./components/MyHeroInfo";
import MyHeroSocials from "./components/MyHeroSocials";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { updateAllCards } from "../../redux/projectCardSlice/actions/cardActions";

const MyHero = () => {
  const dispatch = useDispatch();
  const loadCards = async () => {
    try {
      const response = await axios
        .get("http://127.0.0.1:3000/projects")
        .then((response) => {
          const data = response.data;
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error(`Error Lpading Cards From Database: ${error}`);
        });
      console.log("Project loaded:", response);
      dispatch(updateAllCards(response));
    } catch (error) {
      console.error(`Error Lpading Cards From Database: ${error}`);
    }
  };

  useEffect(() => {
    const handleLoadCards = async () => {
      await loadCards();
    };
    handleLoadCards();
  }, []);

  return (
    <div className="my-hero-container">
      <div className="my-hero-info-container">
        <MyHeroSocials />
        <MyHeroInfo />
      </div>
      <img src="/images/myHeroPage.svg" className="hero-img" alt="Hero" />
    </div>
  );
};

export default MyHero;
