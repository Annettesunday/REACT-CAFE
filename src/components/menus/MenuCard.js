import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={menu.menuImage} alt="menuImage" />
      </div>
      <div className="content">
        <a className="header" href={`/menus/{menu.menuId}`}>
          {menu.type}
        </a>
        <div className="meta">
          <span
            className="date"
            style={{ left: "220px", position: "relative" }}
          >
            $ {menu.price}
          </span>
        </div>
        <div className="description">{menu.name}</div>
      </div>
    </div>
  );
};

export default MenuCard;
