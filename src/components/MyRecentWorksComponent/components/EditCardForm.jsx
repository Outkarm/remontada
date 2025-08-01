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
  const dispatch = useDispatch();

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

  const [errors, setErrors] = useState({});

  const devtools = [
    { value: "adonisjs", label: "AdonisJS" },
    { value: "alpinejs", label: "Alpine.js" },
    { value: "android-studio", label: "Android Studio" },
    { value: "angular", label: "Angular" },
    { value: "ansible", label: "Ansible" },
    { value: "apache", label: "Apache HTTP Server" },
    { value: "apollo", label: "Apollo" },
    { value: "astro", label: "Astro" },
    { value: "aws", label: "AWS" },
    { value: "babel", label: "Babel" },
    { value: "bash", label: "Bash" },
    { value: "bitbucket", label: "Bitbucket" },
    { value: "blazor", label: "Blazor" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "bun", label: "Bun" },
    { value: "c", label: "C" },
    { value: "csharp", label: "C#" },
    { value: "cplusplus", label: "C++" },
    { value: "chakraui", label: "Chakra UI" },
    { value: "chrome-devtools", label: "Chrome DevTools" },
    { value: "circleci", label: "CircleCI" },
    { value: "cloudflare", label: "Cloudflare" },
    { value: "cypress", label: "Cypress" },
    { value: "d3js", label: "D3.js" },
    { value: "dart", label: "Dart" },
    { value: "deno", label: "Deno" },
    { value: "django", label: "Django" },
    { value: "docker", label: "Docker" },
    { value: "dotnet", label: ".NET" },
    { value: "electron", label: "Electron" },
    { value: "elixir", label: "Elixir" },
    { value: "ember", label: "Ember.js" },
    { value: "esbuild", label: "esbuild" },
    { value: "express", label: "Express.js" },
    { value: "fastapi", label: "FastAPI" },
    { value: "figma", label: "Figma" },
    { value: "firebase", label: "Firebase" },
    { value: "flask", label: "Flask" },
    { value: "flutter", label: "Flutter" },
    { value: "gatsby", label: "Gatsby" },
    { value: "git", label: "Git" },
    { value: "github", label: "GitHub" },
    { value: "gitlab", label: "GitLab" },
    { value: "graphql", label: "GraphQL" },
    { value: "grunt", label: "Grunt" },
    { value: "gulp", label: "Gulp" },
    { value: "heroku", label: "Heroku" },
    { value: "html", label: "HTML" },
    { value: "http", label: "HTTP" },
    { value: "intellij", label: "IntelliJ IDEA" },
    { value: "ionic", label: "Ionic" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "jest", label: "Jest" },
    { value: "jquery", label: "jQuery" },
    { value: "json", label: "JSON" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "kotlin", label: "Kotlin" },
    { value: "laravel", label: "Laravel" },
    { value: "linux", label: "Linux" },
    { value: "material-ui", label: "Material UI" },
    { value: "mongodb", label: "MongoDB" },
    { value: "mongoose", label: "Mongoose" },
    { value: "mysql", label: "MySQL" },
    { value: "netlify", label: "Netlify" },
    { value: "nextjs", label: "Next.js" },
    { value: "nginx", label: "NGINX" },
    { value: "nodejs", label: "Node.js" },
    { value: "npm", label: "npm" },
    { value: "nuxtjs", label: "Nuxt.js" },
    { value: "openapi", label: "OpenAPI" },
    { value: "parcel", label: "Parcel" },
    { value: "php", label: "PHP" },
    { value: "photoshop", label: "Photoshop" },
    { value: "postgresql", label: "PostgreSQL" },
    { value: "postman", label: "Postman" },
    { value: "prisma", label: "Prisma" },
    { value: "puppeteer", label: "Puppeteer" },
    { value: "python", label: "Python" },
    { value: "rails", label: "Ruby on Rails" },
    { value: "react", label: "React" },
    { value: "react-devtools", label: "React DevTools" },
    { value: "react-native", label: "React Native" },
    { value: "redis", label: "Redis" },
    { value: "remix", label: "Remix" },
    { value: "restapi", label: "REST API" },
    { value: "rollup", label: "Rollup" },
    { value: "ruby", label: "Ruby" },
    { value: "rust", label: "Rust" },
    { value: "sass", label: "Sass" },
    { value: "sentry", label: "Sentry" },
    { value: "socketio", label: "Socket.IO" },
    { value: "solidjs", label: "SolidJS" },
    { value: "spring", label: "Spring Boot" },
    { value: "sqlite", label: "SQLite" },
    { value: "storybook", label: "Storybook" },
    { value: "stripe", label: "Stripe API" },
    { value: "styledcomponents", label: "Styled Components" },
    { value: "svelte", label: "Svelte" },
    { value: "swagger", label: "Swagger" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "tensorflow", label: "TensorFlow" },
    { value: "threejs", label: "Three.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "unity", label: "Unity" },
    { value: "vite", label: "Vite" },
    { value: "visual-studio", label: "Visual Studio" },
    { value: "vscode", label: "VS Code" },
    { value: "vue", label: "Vue.js" },
    { value: "webpack", label: "Webpack" },
    { value: "windows-terminal", label: "Windows Terminal" },
    { value: "wordpress", label: "WordPress" },
    { value: "xcode", label: "Xcode" },
    { value: "yarn", label: "Yarn" },
    { value: "zsh", label: "Zsh" },
  ];

  console.log(projectCardDatabaseID);

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

    const payload = {
      project: {
        ...formData,
        badge_list: selectedTools,
        image_url: `${previewImage}`,
      },
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/projects/${projectCardDatabaseID}`,
        payload
      );
      dispatch(
        editCard(projectCardStoreID, {
          ...formData,
          badge_list: selectedTools,
          image_url: `${previewImage}`,
        })
      );
      closeEditForm();
    } catch (error) {
      console.error("Error editing project:", error);
    }
  };

  return (
    <form className="card-form-container" onSubmit={handleSubmit}>
      <div className="label-input-container">
        <label htmlFor="Projec-Name">Project Name</label>
        <input
          type="text"
          id="Projec-Name"
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
          id="Projec-Description"
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
        <button className="cancel-btn" onClick={closeEditForm} type="button">
          Cancel
        </button>
        <Button
          btnType="submit"
          btnUse="pop-up"
          btnText="Save"
          costomBlock={true}
        />
      </div>
    </form>
  );
};

export default EditCardForm;
