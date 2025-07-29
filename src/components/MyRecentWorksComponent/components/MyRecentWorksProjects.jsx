import "../styles/MyRecentWorksProjects.css";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { updateAllCards } from "../../../redux/projectCardSlice/actions/cardActions";
import axios from "axios";

const MyRecentWorksProjects = ({
  setProjectCardDatabaseID,
  setProjectCardStoreID,
  projectCards,
  openAddForm,
  openEditForm,
  setOpenPopUpCard,
  setPopUpCardIndex,
}) => {
  const dispatch = useDispatch();
  const adminAccess = useSelector((state) => state.portfolio.admin.adminAccess);

  // const picLink =
  //   "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg";

  // const projectName = "Multi-Post Stories";s
  // const projectInfo =
  //   "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";

  // const bdgList = ["CSS", "HTML", "Bootstrap", "Ruby"];

  const loadCards = async () => {
    try {
      const response = await axios
        .get(`${import.meta.env.VITE_API_URL}/projects`)
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

  const projectCardsHash = useMemo(() => {
    return JSON.stringify(projectCards);
  }, [projectCards]);

  useEffect(() => {
    const handleLoadCards = async () => {
      await loadCards();
    };
    handleLoadCards();
  }, [projectCards.length, projectCardsHash]);

  return (
    <div className="my-recent-projects-container">
      {projectCards?.map((projectCard, index) => (
        <ProjectCard
          key={index}
          setProjectCardDatabaseID={setProjectCardDatabaseID}
          setProjectCardStoreID={setProjectCardStoreID}
          projectCardID={index}
          projectCardDBID={projectCard.id}
          projectName={projectCard.name}
          projectInfo={projectCard.summary_text}
          imgURL={projectCard.image_url}
          bdgList={projectCard.badge_list}
          openEditForm={openEditForm}
          setOpenPopUpCard={setOpenPopUpCard}
          setPopUpCardIndex={setPopUpCardIndex}
        />
      ))}
      {adminAccess === "live" && (
        <button
          className="plus-container"
          onClick={() => {
            openAddForm();
          }}
        >
          <div className="circle-plus-container">
            <div className="vertical-plus-line"></div>
            <div className="horizontal-plus-line"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default MyRecentWorksProjects;
