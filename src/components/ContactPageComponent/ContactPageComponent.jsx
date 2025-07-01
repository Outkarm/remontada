import ContactQuote from "./components/ContactQuote";
import ContactForm from "./components/ContactForm";
import ContactSocials from "./components/ContactSocials";
import "./styles/ContactPageComponent.css";

const ContactPageComponent = () => {
  return (
    <div className="contact-page-container">
      <div className="center-form-quote-container">
        <div className="quote-form-container">
          <ContactQuote />
          <ContactForm />
        </div>
      </div>
      <ContactSocials />
    </div>
  );
};

export default ContactPageComponent;
