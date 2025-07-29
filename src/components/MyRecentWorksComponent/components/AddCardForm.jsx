import "../styles/AddCardForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../../redux/projectCardSlice/actions/cardActions.js";
import Button from "../../GeneralAccessoriesComponent/Button.jsx";
import axios from "axios";

const AddCardForm = ({ closeAddForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTools, setSelectedTools] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    summary_text: "",
    detailed_text: "",
    live_link: "",
    source_link: "",
    image_url: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Project name is required.";
    if (!formData.summary_text.trim())
      newErrors.summary_text = "Summary is required.";
    if (!formData.detailed_text.trim())
      newErrors.detailed_text = "Description is required.";

    const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(formData.live_link))
      newErrors.live_link = "Enter a valid Live Link URL.";
    if (!urlPattern.test(formData.source_link))
      newErrors.source_link = "Enter a valid Source Link URL.";

    if (!selectedTools || selectedTools.length === 0)
      newErrors.badge_list = "Select at least one tool.";
    if (
      !previewImage ||
      (!previewImage.startsWith("data:image") &&
        !previewImage.startsWith("http"))
    )
      newErrors.image_url = "Upload a valid image.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setErrors((prev) => ({ ...prev, image_url: "" }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
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

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/projects`,
        payload
      );
      console.log("Project created:", response.data);
      dispatch(
        createCard({
          ...formData,
          badge_list: selectedTools,
          image_url: `${previewImage}`,
        })
      );
      closeAddForm(); // Close form on success
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
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </div>

      <div className="label-input-container">
        <label htmlFor="Project-Summary">Project Summary</label>
        <input
          type="text"
          id="Project-Summary"
          name="Projec Summary"
          placeholder="Project Summary"
          value={formData.summary_text}
          onChange={(e) => handleChange("summary_text", e.target.value)}
        />
        {errors.summary_text && (
          <small className="error-text">{errors.summary_text}</small>
        )}
      </div>
      <div className="label-input-container">
        <label htmlFor="Projec-Description">Project Description</label>
        <textarea
          type="text"
          id="Projec-Description"
          name="Projec Description"
          placeholder="Project Description"
          value={formData.detailed_text}
          onChange={(e) => handleChange("detailed_text", e.target.value)}
        />
        {errors.detailed_text && (
          <small className="error-text">{errors.detailed_text}</small>
        )}
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
                      setErrors((prev) => ({ ...prev, badge_list: "" }));
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
        {errors.badge_list && (
          <small className="error-text">{errors.badge_list}</small>
        )}
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
            onChange={(e) => handleChange("live_link", e.target.value)}
            className="card-link"
          />
          {errors.live_link && (
            <small className="error-text">{errors.live_link}</small>
          )}
        </div>
        <div className="label-input-container">
          <label htmlFor="Source-Link">Source Link</label>
          <input
            type="url"
            id="Source-Link"
            name="Source Link"
            placeholder="Source Link"
            value={formData.source_link}
            onChange={(e) => handleChange("source_link", e.target.value)}
            className="card-link"
          />
          {errors.source_link && (
            <small className="error-text">{errors.source_link}</small>
          )}
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
        {errors.image_url && (
          <small className="error-text">{errors.image_url}</small>
        )}
      </div>

      <div className="button-group">
        <button
          className="cancel-btn"
          onClick={() => {
            closeAddForm();
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

export default AddCardForm;
