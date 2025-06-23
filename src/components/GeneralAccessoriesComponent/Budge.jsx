import "./styles/Budge.css";

const Budge = ({ bdgText, bdgType, bdgID }) => {
  // Note: bdgType must be either pop-up or card

  return (
    <div key={bdgID} className={`${bdgType}  budge`}>
      {bdgText}
    </div>
  );
};

export default Budge;
