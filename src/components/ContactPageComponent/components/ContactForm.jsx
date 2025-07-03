import { useState, useEffect } from "react";
import Button from "../../GeneralAccessoriesComponent/Button.jsx";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <form className="contact-form-container">
      {isMobile ? (
        <input
          type="text"
          id="Full-Name"
          name="Full Name"
          placeholder="Full Name"
          className="name-input"
        />
      ) : (
        <div className="names-container">
          <input
            type="text"
            id="First-Name"
            name="First Name"
            placeholder="First Name"
            className="name-input"
          />
          <input
            type="text"
            id="Last-Name"
            name="Last Name"
            placeholder="Last Name"
            className="name-input"
          />
        </div>
      )}
      <input
        type="text"
        id="Email"
        name="Email"
        placeholder="Email address"
        className="email-input"
      />
      <textarea
        type="text"
        id="Contact-Message"
        name="Message"
        placeholder="Write me something..."
        className="message-text-area"
      />
      <Button
        btnText={"Get in touch"}
        costomBlock={true}
        btnType="submit"
        btnUse={"pop-up"}
      />
    </form>
  );
};

export default ContactForm;
