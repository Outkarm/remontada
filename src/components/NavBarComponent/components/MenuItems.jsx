import "../style/MenuItems.css";
const MenuItems = ({ itemsArr }) => {
  return (
    <div className="menu-list-container">
      {itemsArr.map((item, index) => (
        <div className="menu-list-item" key={index}>
          {item}
        </div>
      ))}
      <div className="menu-list-item">
        {" "}
        <img src="/images/messageImage.svg" alt="icon" />
      </div>
    </div>
  );
};

export default MenuItems;
