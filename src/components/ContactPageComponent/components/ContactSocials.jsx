import "../styles/ContactSocials.css";

const ContactSocials = () => {
  return (
    <div className="contact-socials-container">
      <a href="https://github.com/Outkarm" target="_blank" rel="noopener">
        <img src="/images/contactImg/github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/john-kpordje-866749241/"
        target="_blank"
        rel="noopener"
      >
        <img src="/images/contactImg/linkedIn.svg" alt="linkedIn" />
      </a>
      <a
        href="https://wellfound.com/u/john-kpordje"
        target="_blank"
        rel="noopener"
      >
        <img src="/images/contactImg/angelList.svg" alt="angelList" />
      </a>
      <a href="https://twitter.com/outkarm" target="_blank" rel="noopener">
        <img src="/images/contactImg/twitter.svg" alt="twitter" />
      </a>
      <a href="https://medium.com/@jkpordje" target="_blank" rel="noopener">
        <img src="/images/contactImg/medium.svg" alt="medium" />
      </a>
    </div>
  );
};

export default ContactSocials;
