import "./styles/Button.css";

const Button = ({
  btnText,
  btnUse,
  isLiveLink = false,
  isSourceLink = false,
  btnType = "button",
  costomBlock = false,
  clickFunction,
}) => {
  return (
    <button
      type={btnType}
      className={`${btnUse} ${costomBlock && "form-btn"} base-btn`}
      onClick={clickFunction}
    >
      {btnText}

      {isLiveLink && (
        <span class="svg-container">
          <img src="/images/live_link.svg" alt="Button Icon" />
        </span>
      )}
      {isSourceLink && (
        <span class="svg-container">
          <img src="/images/source_link.svg" alt="Button Icon" />
        </span>
      )}
    </button>
  );
};

export default Button;
