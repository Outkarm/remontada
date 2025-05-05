import "../style/DropDownMenuItems.css";

const DropDownMenuItems = ({ dropDownMenuItems }) => {
  return (
    <>
      {dropDownMenuItems.map((item, index) => (
        <div className="dd-menu-item" key={index}>
          {item}
        </div>
      ))}
    </>
  );
};

export default DropDownMenuItems;
