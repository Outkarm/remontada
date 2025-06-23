import "./styles/MyRecentWorks.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyRecentWorksHead from "./components/MyRecentWorksHead";
import MyRecentWroksBoard from "./components/MyRecentWroksBoard";
import MyRecentWorksProjects from "./components/MyRecentWorksProjects";
import Overlay from "./components/Overlay";
import AddCardForm from "./components/AddCardForm";
import EditCardForm from "./components/EditCardForm";
import ProjectCardPopUp from "./components/ProjectCardPopUp";
import BackgroundDesign from "../GeneralAccessoriesComponent/BackgroundDesign";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MyRecentWorks = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openPopUpCard, setOpenPopUpCard] = useState(false);
  const [popUpCardIndex, setPopUpCardIndex] = useState(null);
  const [projectCardDatabaseID, setProjectCardDatabaseID] = useState(null);
  const [projectCardStoreID, setProjectCardStoreID] = useState(null);

  const projectCards = useSelector(
    (state) => state.portfolio.card.ProjectCards
  );

  console.log(projectCards);

  const opemAddForm = () => {
    setOpenForm(true);
  };

  const closeAddForm = () => {
    setOpenForm(false);
  };
  const opemTheEditForm = () => {
    setOpenEditForm(true);
  };

  const closeTheEditForm = () => {
    setOpenEditForm(false);
  };

  const picLink =
    "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg";

  const projectName = "Multi-Post Stories";
  const projectInfo =
    "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";

  const bdgList = ["CSS", "HTML", "Bootstrap", "Ruby"];
  return (
    <div className="my-recent-works-container">
      <BackgroundDesign />
      <MyRecentWorksHead />
      {projectCards ? (
        <div className="my-recent-works-board-carousel">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
          >
            {projectCards.map((card, index) => (
              <SwiperSlide key={index}>
                <MyRecentWroksBoard
                  projectInfo={card.summary_text}
                  projectName={card.name}
                  imgURL={card.image_url}
                  bdgList={card.badge_list}
                  projectId={index}
                  setOpenPopUpCard={setOpenPopUpCard}
                  setPopUpCardIndex={setPopUpCardIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <MyRecentWroksBoard
          projectInfo={projectInfo}
          projectName={projectName}
          imgURL={picLink}
          bdgList={bdgList}
          projectId={0}
          setOpenPopUpCard={setOpenPopUpCard}
        />
      )}

      <MyRecentWorksProjects
        openEditForm={opemTheEditForm}
        openAddForm={opemAddForm}
        projectCards={projectCards}
        setProjectCardDatabaseID={setProjectCardDatabaseID}
        setProjectCardStoreID={setProjectCardStoreID}
        setOpenPopUpCard={setOpenPopUpCard}
        setPopUpCardIndex={setPopUpCardIndex}
      />
      {openForm && (
        <>
          <AddCardForm closeAddForm={closeAddForm} /> <Overlay />
        </>
      )}
      {openEditForm && (
        <>
          <EditCardForm
            projectCardDatabaseID={projectCardDatabaseID}
            closeEditForm={closeTheEditForm}
            projectCardStoreID={projectCardStoreID}
            projectCards={projectCards}
          />
          <Overlay />
        </>
      )}
      {openPopUpCard && (
        <>
          <ProjectCardPopUp
            imgURL={projectCards[popUpCardIndex].image_url}
            projectName={projectCards[popUpCardIndex].name}
            projectInfo={projectCards[popUpCardIndex].detailed_text}
            bdgList={projectCards[popUpCardIndex].badge_list}
            seeLiveLink={projectCards[popUpCardIndex].live_link}
            seeSourceLink={projectCards[popUpCardIndex].source_link}
            setOpenPopUpCard={setOpenPopUpCard}
          />
          <Overlay />
        </>
      )}
    </div>
  );
};

export default MyRecentWorks;
