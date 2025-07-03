import "../styles/ProjectCard.css";
import Budge from "../../GeneralAccessoriesComponent/Budge";
import Button from "../../GeneralAccessoriesComponent/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../redux/projectCardSlice/actions/cardActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectCard = ({
  projectCardDBID,
  setProjectCardDatabaseID,
  setProjectCardStoreID,
  projectCardID,
  openEditForm,
  imgURL,
  bdgList = [],
  projectName,
  projectInfo,
  setOpenPopUpCard,
  setPopUpCardIndex,
}) => {
  const dispatch = useDispatch();
  // console.log(imgURL);
  // console.log(projectInfo);
  // console.log(projectName);
  // console.log(bdgList);

  const hundleEditCard = () => {
    setProjectCardDatabaseID(projectCardDBID);
    setProjectCardStoreID(projectCardID);
    openEditForm();
  };

  const handleDelete = async () => {
    try {
      console.log("projectCardDBID", projectCardDBID);
      console.log("projectCardID", projectCardID);

      const response = await axios.delete(
        `http://127.0.0.1:3000/projects/${projectCardDBID}`
      );
      console.log("delete response", response);
      dispatch(deleteCard(projectCardID));
    } catch (error) {
      console.error("Could not delete card", error);
    }
  };

  const handleSeeProjectBTN = () => {
    setPopUpCardIndex(projectCardID);
    setOpenPopUpCard(true);
  };

  return (
    <div className="project-card-container">
      <div className="edit-delete-btn-container">
        <button onClick={hundleEditCard} className="edit-delete-btn pen">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button onClick={handleDelete} className="edit-delete-btn bin">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="card-details-container">
        <div className="project-card-name"> {projectName} </div>
        <div className="project-card-info">{projectInfo}</div>
        <div className="budge-list-container">
          {bdgList.length > 3 ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={8}
              slidesPerView={"auto"}
              speed={5000} // higher speed means smoother slower scroll
              autoplay={{
                delay: 1,
              }}
              loop={true}
              allowTouchMove={false}
            >
              {bdgList.map((bdgname, index) => (
                <SwiperSlide style={{ width: "fit-content" }} key={index}>
                  <Budge bdgID={index} bdgText={bdgname} bdgType="card" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            bdgList.map((bdgname, index) => (
              <Budge
                key={index}
                bdgID={index}
                bdgText={bdgname}
                bdgType="card"
              />
            ))
          )}
        </div>
      </div>
      <img src={imgURL} className="prpject-background-img" />
      <Button
        btnText={"See project"}
        btnUse={"card"}
        clickFunction={handleSeeProjectBTN}
      />
    </div>
  );
};

export default ProjectCard;
