import "../styles/AddCardForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCard } from "../../../redux/projectCardSlice/actions/cardActions.js";
import Button from "../../GeneralAccessoriesComponent/Button.jsx";
import axios from "axios";

const EditCardForm = ({
  projectCards,
  projectCardDatabaseID,
  projectCardStoreID,
  closeEditForm,
}) => {
  console.log("project", projectCards);
  console.log("project ID", projectCardStoreID);

  console.log("bdg list", projectCards[projectCardStoreID].badge_list);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTools, setSelectedTools] = useState(
    projectCards[projectCardStoreID].badge_list
  );
  const [previewImage, setPreviewImage] = useState(
    projectCards[projectCardStoreID].image_url
  );
  const [imageName, setImageName] = useState(
    projectCards[projectCardStoreID].name
  );
  const [formData, setFormData] = useState({
    name: projectCards[projectCardStoreID].name,
    summary_text: projectCards[projectCardStoreID].summary_text,
    detailed_text: projectCards[projectCardStoreID].detailed_text,
    live_link: projectCards[projectCardStoreID].live_link,
    source_link: projectCards[projectCardStoreID].source_link,
    image_url: projectCards[projectCardStoreID].image_url,
    badge_list: projectCards[projectCardStoreID].badge_list,
  });
  const dispatch = useDispatch();

  console.log("edit form project card", projectCards);

  const devtools = [
    { value: "vscode", label: "VS Code" },
    { value: "chrome-devtools", label: "Chrome DevTools" },
    { value: "react-devtools", label: "React DevTools" },
    { value: "git", label: "Git" },
    { value: "docker", label: "Docker" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedTools);
    const payload = {
      project: {
        ...formData,
        badge_list: selectedTools,
        image_url: `${previewImage}`,
      },
    };

    try {
      console.log("Posting payload:", JSON.stringify(payload));

      const response = await axios.put(
        `http://127.0.0.1:3000/projects/${projectCardDatabaseID}`,
        payload
      );
      console.log("Project created:", response.data);
      dispatch(
        editCard(projectCardStoreID, {
          ...formData,
          badge_list: selectedTools,
          image_url: `${previewImage}`,
        })
      );
      closeEditForm(); // Close form on success
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <form className="card-form-container" onSubmit={handleSubmit}>
      <div className="label-input-container">
        <label htmlFor="Projec-Name">Project Name</label>
        <input
          type="text"
          id="Projec-Name"
          name="Projec Name"
          placeholder="Project Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="label-input-container">
        <label htmlFor="Project-Summary">Project Summary</label>
        <input
          type="text"
          id="Project-Summary"
          name="Projec Summary"
          placeholder="Project Summary"
          value={formData.summary_text}
          onChange={(e) =>
            setFormData({ ...formData, summary_text: e.target.value })
          }
          required
        />
      </div>
      <div className="label-input-container">
        <label htmlFor="Projec-Description">Project Description</label>
        <textarea
          type="text"
          id="Projec-Description"
          name="Projec Description"
          placeholder="Project Description"
          value={formData.detailed_text}
          onChange={(e) =>
            setFormData({ ...formData, detailed_text: e.target.value })
          }
          required
        />
      </div>
      <div className="custom-select-wrapper">
        <label onClick={() => setIsOpen(!isOpen)} className="select-label">
          Dev Tools ▼
        </label>
        <div className={isOpen ? "custom-select-dropdown" : ""}>
          {isOpen &&
            devtools.map((tool) => (
              <label key={tool.value} className="custom-option">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="devtools"
                  value={tool.value}
                  checked={selectedTools.includes(tool.value)}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (e.target.checked) {
                      setSelectedTools([...selectedTools, value]);
                    } else {
                      setSelectedTools(
                        selectedTools.filter((v) => v !== value)
                      );
                    }
                  }}
                />
                <span>{tool.label}</span>
              </label>
            ))}
        </div>
      </div>

      <div className="card-links-container">
        <div className="label-input-container">
          <label htmlFor="Live-Link">Live Link</label>
          <input
            type="text"
            id="Live-Link"
            name="Live Link"
            placeholder="Live Link"
            value={formData.live_link}
            onChange={(e) =>
              setFormData({ ...formData, live_link: e.target.value })
            }
            required
            className="card-link"
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="Source-Link">SourceLink</label>
          <input
            type="url"
            id="Source-Link"
            name="Source Link"
            placeholder="Source Link"
            value={formData.source_link}
            onChange={(e) =>
              setFormData({ ...formData, source_link: e.target.value })
            }
            required
            className="card-link"
          />
        </div>
      </div>
      <div className="image-input-container">
        <label htmlFor="Project-Image">Project Image</label>
        <div className="input-wrapper">
          <input
            type="file"
            id="Project-Image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {!previewImage ? (
            <span className="upload-placeholder">📁 Click to Upload</span>
          ) : (
            <>
              <img src={previewImage} alt="preview" className="preview-image" />
              <span className="change-image-text">
                Click here to change image
              </span>
            </>
          )}
        </div>

        {imageName && <span className="image-name">{imageName}</span>}
      </div>

      <div className="button-group">
        <button
          className="cancel-btn"
          onClick={() => {
            closeEditForm();
          }}
        >
          Cancel
        </button>
        <Button
          btnType="submit"
          btnUse="pop-up"
          btnText="Create"
          costomBlock={true}
        />
      </div>
    </form>
  );
};

export default EditCardForm;
