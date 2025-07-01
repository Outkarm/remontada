import Button from "../../GeneralAccessoriesComponent/Button.jsx";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form-container">
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
